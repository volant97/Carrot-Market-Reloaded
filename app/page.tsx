export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen p-5 bg-gray-100">
      <div className="flex flex-col w-full max-w-screen-md gap-2 p-5 bg-white shadow-lg rounded-3xl">
        {["Nico", "Me", "You", "Tom"].map((person, index) => (
          <div className="flex items-center gap-5 p-2.5 group" key={index}>
            <input className="w-30 h-6 bg-test-color" />
            <div className="size-10 bg-blue-400 rounded-test-rounded" />
            <span className="text-lg font-medium group-odd:text-red-500 group-hover:text-blue-500 group-focus-within:bg-yellow-400">
              {person}
            </span>
            <div className="relative flex items-center justify-center size-6 bg-red-500 text-white rounded-full">
              <span className="z-10">{index + 1}</span>
              <div className="absolute size-6 bg-red-500 rounded-full animate-ping" />
            </div>
            <span className="btn">테스트</span>
            <a
              href="https://www.naver.com/"
              target="_blank"
              className="text-bigger-hello"
            >
              테스트
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
