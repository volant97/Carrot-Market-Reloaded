"use client";

import Input from "@/components/Input";
import Btn from "@/components/Btn";
import SocialLogin from "@/components/SocialLogin";
import { useFormState } from "react-dom";
import { login } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function LoginPage() {
  const [state, trigger] = useFormState(login, null);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">기다리고 있었어요.</h1>
        <h2 className="text-xl">당근과 만나기 3초전!</h2>
      </div>
      <form action={trigger} className="flex flex-col gap-3">
        {/* action의 값이 formData에 들어가기 위해서는, input에 name이 할당되어야 한다. */}
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
        <Btn text="로그인" />
      </form>
      <SocialLogin />
    </div>
  );
}
