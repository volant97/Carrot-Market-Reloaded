"use server";

export const formActionHandler = async (prevState: any, data: FormData) => {
  await new Promise((r) => setTimeout(r, 2000));
  // console.log(data.get("email"), data.get("password"));
  return {
    errors: "에러임",
  };
};
