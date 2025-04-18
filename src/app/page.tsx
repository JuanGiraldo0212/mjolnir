import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="w-full p-5 flex flex-col gap-y-3">
        <header className="border-2 border-gray-400 rounded-md p-2 text-center">
          <h1>Mjolnir</h1>
        </header>
        <div className="h-fit w-full flex flex-col gap-y-2">
          <div className="border-2 border-gray-400 rounded-md px-5 py-2">
            <form action="logWeight" className="flex gap-x-2 justify-center">
              <input
                className="text-center w-[4rem] p-2 border-1 border-gray-300 rounded-md"
                type="text"
                name="weight"
                placeholder="kg"
              />
              <button className="bg-black rounded-md text-white px-2 py-1">
                Log weight
              </button>
            </form>
          </div>
          <div className="border-2 border-gray-400 rounded-md h-[10rem] w-full text-center ">
            <p>Weight graph</p>
          </div>
          <div className="border-2 border-gray-400 rounded-md h-[10rem] w-full text-center ">
            <p>Insights 1</p>
          </div>
          <div className="border-2 border-gray-400 rounded-md h-[10rem] w-full text-center ">
            <p>Insights 2</p>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 w-full border-t border-gray-300 shadow-md z-50">
        <div className="flex justify-around items-center h-16">
          <button className="flex flex-col items-center text-sm text-gray-700 hover:text-black">
            <span>Weight</span>
          </button>
          <button className="flex flex-col items-center text-sm text-gray-700 hover:text-black">
            <span>Coach</span>
          </button>
        </div>
      </footer>
    </>
  );
}
