export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen p-5 bg-gray-100">
      <div className="flex flex-col w-full max-w-screen-md gap-2 p-5 bg-white shadow-lg rounded-3xl md:flex-row">
        <input
          className="w-full h-10 px-5 bg-gray-200 rounded-full outline-none ring-transparent ring-2 transition-all focus:ring-orange-500"
          type="text"
          placeholder="Search here"
        />
        <button className="bg-black text-white py-2 rounded-full transition-transform font-medium outline-none hover:bg-gray-800 active:scale-90 md:px-10">
          Search
        </button>
      </div>
    </main>
  );
}
