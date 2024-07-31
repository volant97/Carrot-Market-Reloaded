"use server";

import { z } from "zod";

const formSchema = z.object({
  sms_num: z.number(),
  authentication_num: z.number(),
});

// action의 값이 formData에 들어가기 위해서는, input에 name이 할당되어야 한다.
export const sms = async (prevState: any, formData: FormData) => {
  const data = {
    // input의 name 참조
    sms_num: formData.get("sms_num"),
    authentication_num: formData.get("authentication_num"),
  };

  const result = formSchema.safeParse(data);

  if (!result.success) {
    return result.error.flatten();
  } else {
    // console.log(result.data);
  }
};
