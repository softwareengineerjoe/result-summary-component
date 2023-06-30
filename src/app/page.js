import memory from "./images/icon-memory.svg";
import reaction from "./images/icon-reaction.svg";
import verbal from "./images/icon-verbal.svg";
import visual from "./images/icon-visual.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full md:justify-center font-Hanken-Grotesk">
      {/* Container */}
      <div className={whiteBox}>
        {/* FirstBox */}
        <section className={firstSection}>
          <h3 className="text-gray-300 text-lg">Your Result</h3>
          <div className="rounded-full p-8  text-white bg-gradient-to-b from-indigo-500 via--indigo-600 to-indigo-800 w-28 h-28 text-center">
            <p className="text-4xl">76</p>
            <p className="text-gray-400 text-xs">of 100</p>
          </div>
          <h2 className="text-white font-semibold text-xl">Great</h2>
          <p className="text-sm text-center leading-5 text-gray-300 md:w-4/6">
            You scored higher than 65% of the people who have taken those tests.
          </p>
        </section>
        {/* SecondBox */}
        <section className={secondSection}>
          <h3 className="font-bold text-slate-600 text-lg">Summary</h3>
          <div className="flex flex-col gap-2 font-semibold">
            <div className="flex flex-row justify-between items-center text-sm rounded-lg bg-red-100/60 px-3 py-2">
              <div className="flex flex-row gap-2 items-center">
                <Image src={reaction}></Image>
                <p className="text-red-500">Reaction</p>
              </div>
              <div className="flex">
                <p className="text-slate-600">80 </p>
                <span className="ml-1.5 text-gray-300"> / 100</span>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center text-sm rounded-lg bg-yellow-100/60 px-3 py-2">
            <div className="flex flex-row gap-2 items-center">
                <Image src={memory}></Image>
                <p className="text-yellow-500">Memory</p>
              </div>
              <div className="flex">
                <p className="text-slate-600">80 </p>
                <span className="ml-1.5 text-gray-300"> / 100</span>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center text-sm rounded-lg bg-green-100/60 px-3 py-2">
            <div className="flex flex-row gap-2 items-center">
                <Image src={verbal}></Image>
                <p className="text-green-500">Verbal</p>
              </div>
              <div className="flex">
                <p className="text-slate-600">80 </p>
                <span className="ml-1.5 text-gray-300"> / 100</span>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center text-sm rounded-lg bg-violet-100/60 px-3 py-2">
            <div className="flex flex-row gap-2 items-center">
                <Image src={visual}></Image>
                <p className="text-indigo-500">Visual</p>
              </div>
              <div className="flex">
                <p className="text-slate-600">80 </p>
                <span className="ml-1.5 text-gray-300"> / 100</span>
              </div>
            </div>
          </div>
          <button className="text-center bg-slate-600 rounded-full px-3 py-2 text-white hover:bg-indigo-700">
            Continue
          </button>
        </section>
      </div>
    </main>
  );
}

const whiteBox =
  "w-full md:max-w-2xl flex flex-col md:flex-row md:bg-white rounded-xl md:shadow-lg";
const firstSection =
  "w-full md:w-1/2 rounded-b-[30px] md:rounded-xl bg-gradient-to-b from-indigo-500 via--indigo-600 to-indigo-800 py-8 px-8 flex flex-col gap-4 items-center grow-0";
const secondSection = "w-full md:w-1/2 py-8 px-8 flex flex-col gap-4";
