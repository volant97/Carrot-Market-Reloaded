"use server";

import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { z } from "zod";

const formSchema = z.object({
  user_name: z.string().min(5).max(10),
  email: z.string().email(),
  password: z.string().min(10),
  confirm_password: z.string().min(10),
});

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
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

  if (!result.success) return result.error.flatten();
}
