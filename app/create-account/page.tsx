"use client";

import FormBtn from "@/components/FormBtn";
import FormInput from "@/components/FormInput";
import SocialLogin from "@/components/SocialLogin";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";

export default function CreateAccountPage() {
  const [state, trigger] = useFormState(createAccount, null);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">반가워요!</h1>
        <h2 className="text-xl">당근은 당신과 함께하고 싶어요.</h2>
      </div>
      <form action={trigger} className="flex flex-col gap-3">
        <FormInput
          name="user_name"
          type="text"
          placeholder="이름"
          required
          errors={state?.fieldErrors.user_name}
        />
        <FormInput
          name="email"
          type="text"
          placeholder="이메일"
          required
          errors={state?.fieldErrors.email}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="비밀번호"
          required
          errors={state?.fieldErrors.password}
        />
        <FormInput
          name="confirm_password"
          type="password"
          placeholder="비밀번호 확인"
          required
          errors={state?.fieldErrors.confirm_password}
        />
        <FormBtn text="시작하기" />
      </form>
      <SocialLogin />
    </div>
  );
}
