"use server";

import { z } from "zod";

// 정규식 : 소문자, 대문자, 숫자, 특수문자 포함 여부
const passwordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/
);

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
      .refine(checkUserName, `'1'은 입력할 수 없어요.`)
      .transform((v) => `🔥 ${v} 🔥`),
    email: z.string().email().toLowerCase(),
    password: z
      .string()
      .min(10)
      .regex(
        passwordRegex,
        "소문자, 대문자, 숫자, 특수문자를 모두 포함해야합니다."
      ),
    confirm_password: z.string().min(10),
  })
  .refine(checkPasswords, {
    message: "비밀번호를 똑같이 입력해주세요.",
    path: ["confirm_password"],
  });

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
    // console.log(result.data);
  }
}
