export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen p-5 bg-gray-100">
      <div className="flex flex-col w-full max-w-screen-md gap-2 p-5 bg-white shadow-lg rounded-3xl md:flex-row">
        <input
          className="w-full h-10 px-5 bg-gray-200 rounded-full outline-none ring-transparent ring-2 transition-all focus:ring-blue-500 invalid:focus:ring-red-500 peer"
          type="email"
          placeholder="이메일"
          required
        />
        <span className="px-5 text-red-500 peer-valid:hidden">
          이메일을 입력해주세요...
        </span>
        <button className="bg-black text-blue-300 py-2 rounded-full transition-transform font-medium outline-none active:scale-90 md:px-10 peer-invalid:text-red-300 peer-invalid:Disabled peer-invalid:focus:bg-red-600 peer-invalid:cursor-default peer-valid:focus:bg-blue-600">
          로그인
        </button>
      </div>
    </main>
  );
}
