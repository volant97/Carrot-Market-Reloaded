"use client";
import FormBtn from "@/components/FormBtn";
import FormInput from "@/components/FormInput";
import SocialLogin from "@/components/SocialLogin";
import { useFormState } from "react-dom";
import { formActionHandler } from "./actions";

export default function LoginPage() {
  const [state, trigger] = useFormState(formActionHandler, {
    potato: 1,
  } as any);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">기다리고 있었어요.</h1>
        <h2 className="text-xl">당근과 만나기 3초전!</h2>
      </div>
      <form action={trigger} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder="이메일"
          required
          errors={[state.errors ?? []]}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="비밀번호"
          required
          errors={[state.errors ?? []]}
        />
        <FormBtn text="로그인" />
      </form>
      <SocialLogin />
    </div>
  );
}
