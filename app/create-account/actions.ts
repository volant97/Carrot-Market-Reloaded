"use server";

import { z } from "zod";
import {
  PASSWORD_REGEX_ERROR,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
} from "./../../lib/constants";
import db from "@/lib/db";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import getSession from "@/lib/session";

const checkUsername = async (username: string) => !username.includes("tomato");

const checkPasswords = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const formSchema = z
  .object({
    user_name: z
      .string({
        invalid_type_error: "문자만 입력 가능합니다.",
        required_error: "이름을 입력해주세요.",
      })
      .min(5, "너무 짧아요!")
      .max(10, "너무 길어요!")
      .trim()
      .refine(checkUsername, `'tomato'는 입력할 수 없어요.`),
    email: z.string().email().toLowerCase(),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH)
      .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirm_password: z.string().min(PASSWORD_MIN_LENGTH),
  })
  .superRefine(async (data, ctx) => {
    const user = await db.user.findUnique({
      where: {
        username: data.user_name,
      },
      select: {
        id: true,
      },
    });
    if (user) {
      ctx.addIssue({
        code: "custom",
        message: "이미 존재하는 이름입니다.",
        path: ["user_name"],
        fatal: true,
      });
      return z.NEVER;
    }
  })
  // data 구조분해할당도 가능
  .superRefine(async ({ email }, ctx) => {
    const user = await db.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });
    if (user) {
      ctx.addIssue({
        code: "custom",
        message: "이미 존재하는 이메일입니다.",
        path: ["email"],
        fatal: true,
      });
      return z.NEVER;
    }
  })
  .refine(checkPasswords, {
    message: "비밀번호를 똑같이 입력해주세요.",
    path: ["confirm_password"],
  });

// action의 값이 formData에 들어가기 위해서는, input에 name이 할당되어야 한다.
export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    // input의 name 참조
    user_name: formData.get("user_name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };

  // parse는 error를 throw → try catch문을 써야함
  // try {
  //   formSchema.parse(data);
  // } catch (error) {
  //   console.error(error);
  // }

  // safeParse error를 throw하지 않음 → 유효성 검사의 결과만 얻음 (추천)
  // safeParseAsync = spa
  const result = await formSchema.safeParseAsync(data);

  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    // 모든 검증(~2번)이 끝난 후 실행(3번~)되어야 하는 곳
    // 1. 동일한 '이름'이 존재하는지 체크
    // → Zod로 체크
    // 2. 동일한 '이메일'이 존재하는지 체크
    // → Zod로 체크
    // 3. 비밀번호 해싱
    // 4. DB에 저장
    // 5. 로그인
    // 6. redirect("/profile")

    const hashedPasswoed = await bcrypt.hash(result.data.password, 12);

    const user = await db.user.create({
      data: {
        username: result.data.user_name,
        email: result.data.email,
        password: hashedPasswoed,
      },
      select: {
        id: true,
        username: true,
      },
    });

    const session = await getSession();

    session.id = user.id;
    await session.save();

    redirect("/profile");
  }
}
