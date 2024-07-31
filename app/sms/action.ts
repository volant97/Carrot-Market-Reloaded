"use server";

import { z } from "zod";
// 오류발생 : validator는 js용 라이브러리이기 때문에 ts가 타입을 인식못한다.
// 인기 있는 라이브러리 같은 경우 다른 개발자가 타입을 정의해서 배포하는 경우도 있다.
// npm i --save-dev @types/validator
import validator from "validator";

// sms_num을 먼저 검사하고, 이후에 authentication_num을 검사하기 때문에 z.object에 넣지 않아도 된다.
const phoneSchema = z.string().trim().refine(validator);

// action의 값이 formData에 들어가기 위해서는, input에 name이 할당되어야 한다.
export const sms = async (prevState: any, formData: FormData) => {
  const data = {
    // input의 name 참조
    sms_num: formData.get("sms_num"),
    authentication_num: formData.get("authentication_num"),
  };

  const result = phoneSchema.safeParse(data);

  if (!result.success) {
    return result.error.flatten();
  } else {
    // console.log(result.data);
  }
};
