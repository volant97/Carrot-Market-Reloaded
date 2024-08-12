"use server";

import {
  PASSWORD_REGEX_ERROR,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
} from "./../../lib/constants";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email().toLowerCase(),
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

  const result = formSchema.safeParse(data);

  if (!result.success) {
    return result.error.flatten();
  } else {
  }
};
