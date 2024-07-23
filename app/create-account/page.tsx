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
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="이름"
            required
            className="bg-transparent rounded-md w-full h-10 border-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-orange-500 focus:outline-none placeholder:text-neutral-400"
          />
          <span className="text-red-500 font-medium">다시 입력해주세요.</span>
        </div>
        <button className="primary-btn h-10">시작하기</button>
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
