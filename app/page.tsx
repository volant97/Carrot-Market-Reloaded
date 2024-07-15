export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen p-5 bg-gray-300">
      <div className="w-full max-w-3xl p-5 bg-white shadow-lg rounded-2xl">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="-mb-1 text-gray-600 font-semibold">
              In transit
            </span>
            <span className="text-4xl font-semibold">Coolblue</span>
          </div>
          <div className="flex flex-col justify-center items-center size-12 bg-orange-600 text-white text-sm font-bold leading-3 rounded-full">
            <span>cool</span>
            <span>blue</span>
          </div>
        </div>
        <div className="flex items-center gap-2 my-2">
          <span className="px-2.5 py-1.5 bg-green-400 text-white text-xs font-medium rounded-full uppercase">
            Today
          </span>
          <span>9:30-10:30</span>
        </div>
        <div className="relative">
          <div className="absolute w-full h-2 bg-gray-200 rounded-full"></div>
          <div className="absolute w-2/3 h-2 bg-green-400 rounded-full"></div>
        </div>
        <div className="flex justify-between items-center mt-5 text-gray-600">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span className="text-gray-400">Delivered</span>
        </div>
      </div>
    </main>
  );
}
