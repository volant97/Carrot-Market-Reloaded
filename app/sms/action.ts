"use server";

import { z } from "zod";
// 오류발생 : validator는 js용 라이브러리이기 때문에 ts가 타입을 인식못한다.
// 인기 있는 라이브러리 같은 경우 다른 개발자가 타입을 정의해서 배포하는 경우도 있다.
// npm i --save-dev @types/validator
import validator from "validator";

// sms_num을 먼저 검사하고, 이후에 authentication_num을 검사하기 때문에 z.object에 넣지 않아도 된다.
// sms함수에 formData가 들어오면 tpye은 number이라도 string으로 변한다.
// 따라서 coerce 사용하여 number()로 변환해야한다.
const phoneNumSchema = z.string().trim().refine(validator.isMobilePhone);
const tokenSchema = z.coerce.number().min(100000).max(999999);

// action의 값이 formData에 들어가기 위해서는, input에 name이 할당되어야 한다.
export const sms = async (prevState: any, formData: FormData) => {
  const data = {
    // input의 name 참조
    phone_num: formData.get("phone_num"),
    token: formData.get("token"),
  };

  const phoneNumResult = phoneNumSchema.safeParse(data.phone_num);
  const tokenResult = tokenSchema.safeParse(data.token);

  if (!tokenResult.success) {
    return tokenResult.error.flatten();
  } else {
    console.log(tokenResult.data);
  }
};
