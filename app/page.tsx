import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <div className="flex flex-col items-center gap-2 my-auto *:font-medium">
        <span className="text-9xl">🥕</span>
        <h1 className="text-4xl">당근</h1>
        <h2 className="text-2xl">당근 마켓에 어서오세요!</h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full p-6">
        <Link
          href={"/create-account"}
          className="w-full bg-orange-500 text-white text-lg text-center font-medium py-2.5 rounded-md hover:bg-orange-400"
        >
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link
            href={"/login"}
            className="hover:underline hover:underline-offset-2"
          >
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
