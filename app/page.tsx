import Image from "next/image";
import Navbar from "./components/Navbar";
import Temperature from "./components/Temperature/Temperature";
import AirPollution from "./components/AirPollution/AirPollution";

export default function Home() {
  return (
    <main className=" max-[1rem] lg:mx-[2rem] xl:max-[6rem] 2xl:ms-[16rem] m-auto ">
      <Navbar />
      <div className=" pb-4 flex flex-col gap-4 md:flex-row">
        <div className=" flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
          <Temperature />
        </div>
        <div className=" flex flex-col w-full">
          <div className="instruments grid h-full gap-4 col-span-full sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
            <AirPollution />
          </div>
        </div>
      </div>
    </main>
  );
}
