import FormButton from "@/components/FormButton";
import FormInput from "@/components/FormInput";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요</h1>
        <h2 className="text-xl">당근을 시작하기 위해서 정보를 입력해주세요.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput type="text" placeholder="닉네임" required errors={[]} />
        <FormInput type="email" placeholder="이메일" required errors={[]} />
        <FormInput
          type="password"
          placeholder="비밀번호"
          required
          errors={[]}
        />
        <FormInput
          type="password"
          placeholder="비밀번호 확인"
          required
          errors={[]}
        />
        <FormButton loading={false} text="시작하기" />
      </form>
      <div className="w-full h-px bg-neutral-500" />
      <div>
        <Link
          href={"/sms"}
          className="primary-btn flex items-center justify-center gap-2 h-10"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="size-6" />
          </span>
          <span>SNS로 시작하기</span>
        </Link>
      </div>
    </div>
  );
}
