"use server";

import { z } from "zod";
import {
  PASSWORD_REGEX_ERROR,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
} from "./../../lib/constants";
import db from "@/lib/db";

const checkUserName = (userName: string) => !userName.includes("1");
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
      .refine(checkUserName, `'1'은 입력할 수 없어요.`),
    // .transform((v) => `🔥 ${v} 🔥`),
    email: z.string().email().toLowerCase(),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH)
      .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirm_password: z.string().min(PASSWORD_MIN_LENGTH),
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
  //   console.log(error);
  // }

  // safeParse error를 throw하지 않음 → 유효성 검사의 결과만 얻음 (추천)
  const result = formSchema.safeParse(data);

  if (!result.success) {
    return result.error.flatten();
  } else {
    const user = await db.user.findUnique({
      where: {
        username: result.data.user_name,
      },
      select: {
        id: true,
      },
    });

    const userEmail = await db.user.findUnique({
      where: {
        email: result.data.email,
      },
      select: {
        id: true,
      },
    });

    // 1. 동일한 '이름'이 존재하는지 체크
    // if(user){
    // }

    // 2. 동일한 '이메일'이 존재하는지 체크
    // if(userEmail){
    // }

    // 3. 비밀번호 해싱
    // 4. DB에 저장
    // 5. 로그인
    // 6. '/home'으로 redirect
  }
}
