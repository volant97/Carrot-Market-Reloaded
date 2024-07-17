export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen p-5 bg-gray-100">
      <div className="flex flex-col w-full max-w-screen-sm gap-2 p-5 bg-white shadow-lg rounded-3xl ">
        <input
          className="w-full h-10 px-5 bg-gray-200 rounded-full outline-none ring-transparent ring-2 focus:ring-orange-500 transition-all"
          type="text"
          placeholder="Search here"
        />
        <button className="bg-black text-white py-2 rounded-full hover:bg-gray-800 active:scale-90 transition-transform font-medium outline-none">
          Search
        </button>
      </div>
    </main>
  );
}
