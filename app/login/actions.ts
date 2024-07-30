"use server";

// action의 값이 formData에 들어가기 위해서는, input에 name이 할당되어야 한다.
export const formActionHandler = async (prevState: any, formData: FormData) => {
  await new Promise((r) => setTimeout(r, 2000));
  // console.log(data.get("email"), formData.get("password"));
  return {
    errors: ["에러임"],
  };
};
