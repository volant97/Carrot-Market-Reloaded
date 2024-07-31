"use client";

import Input from "@/components/Input";
import Btn from "@/components/Btn";
import SocialLogin from "@/components/SocialLogin";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function CreateAccountPage() {
  const [state, trigger] = useFormState(createAccount, null);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">반가워요!</h1>
        <h2 className="text-xl">당근은 당신과 함께하고 싶어요.</h2>
      </div>
      <form action={trigger} className="flex flex-col gap-3">
        <Input
          name="user_name"
          type="text"
          placeholder="이름"
          required
          minLength={3}
          maxLength={10}
          errors={state?.fieldErrors.user_name}
        />
        <Input
          name="email"
          type="email"
          placeholder="이메일"
          required
          errors={state?.fieldErrors.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="비밀번호"
          required
          minLength={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors.password}
        />
        <Input
          name="confirm_password"
          type="password"
          placeholder="비밀번호 확인"
          required
          minLength={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors.confirm_password}
        />
        <Btn text="시작하기" />
      </form>
      <SocialLogin />
    </div>
  );
}
