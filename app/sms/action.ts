"use server";

import { boolean, z } from "zod";
// 오류발생 : validator는 js용 라이브러리이기 때문에 ts가 타입을 인식못한다.
// 인기 있는 라이브러리 같은 경우 다른 개발자가 타입을 정의해서 배포하는 경우도 있다.
// npm i --save-dev @types/validator
import validator from "validator";
import { redirect } from "next/navigation";

interface ActionState {
  token: boolean;
}

// sms_num을 먼저 검사하고, 이후에 authentication_num을 검사하기 때문에 z.object에 넣지 않아도 된다.
// sms함수에 formData가 들어오면 tpye은 number이라도 string으로 변한다.
// 따라서 coerce 사용하여 number()로 변환해야한다.
const phoneSchema = z
  .string()
  .trim()
  .refine(
    (v) => validator.isMobilePhone(v, "ko-KR"),
    "잘못된 번호 형식입니다. 예)+8201012345678"
  );
const tokenSchema = z.coerce.number().min(100000).max(999999);

// action의 값이 formData에 들어가기 위해서는, input에 name이 할당되어야 한다.
export const sms = async (prevState: ActionState, formData: FormData) => {
  // input의 name 참조
  const phone = formData.get("phone");
  const token = formData.get("token");

  if (!prevState.token) {
    const result = phoneSchema.safeParse(phone);
    if (!result.success) {
      return {
        token: false,
        error: result.error.flatten(),
      };
    } else {
      return {
        token: true,
      };
    }
  } else {
    const result = tokenSchema.safeParse(token);
    if (!result.success) {
      return {
        token: true,
        error: result.error.flatten(),
      };
    } else {
      redirect("/");
    }
  }
};
