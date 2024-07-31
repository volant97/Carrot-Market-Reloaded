"use client";

import Btn from "@/components/Btn";
import Input from "@/components/Input";
import { useFormState } from "react-dom";
import { sms } from "./action";

export default function SmsPage() {
  const [state, trigger] = useFormState(sms, null);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">전화번호로 시작할 수 있어요</h1>
        <h2 className="text-xl">번호 좀 물어봐도 될까요?</h2>
      </div>
      <form action={trigger} className="flex flex-col gap-3">
        <Input name="phone_num" type="text" placeholder="전화번호" required />
        <Input
          name="token"
          type="number"
          placeholder="인증번호"
          required
          min={100000}
          max={999999}
        />
        <Btn text="인증완료" />
      </form>
    </div>
  );
}
