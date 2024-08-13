"use server";

import db from "@/lib/db";
import {
  PASSWORD_REGEX_ERROR,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
} from "./../../lib/constants";
import { z } from "zod";
import bcrypt from "bcrypt";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

const checkEmailExists = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  return !!user;
};

// const checkPasswordExists = async (password: string) => {
//   const user = await db.user.findUnique({
//     where: {
//       password,
//     },
//     select: {
//       password: true,
//     },
//   });

//   const ok = await bcrypt.compare(password, user!.password ?? "");
// };

const formSchema = z.object({
  email: z
    .string()
    .email()
    .toLowerCase()
    .refine(
      checkEmailExists,
      "해당 이메일을 사용하는 계정이 존재하지 않습니다."
    ),
  password: z
    .string()
    .min(PASSWORD_MIN_LENGTH)
    .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
});

// action의 값이 formData에 들어가기 위해서는, input에 name이 할당되어야 한다.
export const login = async (prevState: any, formData: FormData) => {
  const data = {
    // input의 name 참조
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = await formSchema.spa(data);

  if (!result.success) {
    return result.error.flatten();
  } else {
    // 1. 입력한 email에 해당하는 유저 찾기 (Zod에서 체크)
    // 2. 입력한 비밀번호 해시값이 일치하는지 확인 (else문에서 Zod인 것처럼 체크)
    // 3. 로그인
    // 4. redirect("/profile")

    const user = await db.user.findUnique({
      where: {
        email: result.data.email,
      },
      select: {
        id: true,
        password: true,
      },
    });

    const ok = await bcrypt.compare(result.data.password, user!.password ?? "");

    if (ok) {
      const session = await getSession();
      session.id = user!.id;
      redirect("/profile");
    } else {
      return {
        fieldErrors: {
          password: ["잘못된 비밀번호입니다."],
          email: [],
        },
      };
    }
  }
};
