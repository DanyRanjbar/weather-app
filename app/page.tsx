import { defaultStates } from "./utils/defaultStates";
import Navbar from "./components/Navbar";
import Temperature from "./components/Temperature/Temperature";
import AirPollution from "./components/AirPollution/AirPollution";
import Sunset from "./components/Sunset/Sunset";
import Wind from "./components/Wind/Wind";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import UvIndex from "./components/UvIndex/UvIndex";
import Population from "./components/Population/Population";
import FeelsLike from "./components/FeelsLike/FeelsLike";
import Humidity from "./components/Humidity/Humidity";
import Visibility from "./components/Visibility/Visibility";
import Pressure from "./components/Pressure/Pressure";
import Mapbox from "./components/Mapbox/Mapbox";
import FiveDayForecast from "./components/FiveDayForecast/FiveDayForecast";

export default function Home() {
  return (
    <main className=" max-[1rem] lg:mx-[2rem] xl:max-[6rem] 2xl:ms-[16rem] m-auto ">
      <Navbar />
      <div className=" pb-4 flex flex-col gap-4 md:flex-row">
        <div className=" flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
          <Temperature />
          <FiveDayForecast />
        </div>
        <div className=" flex flex-col w-full">
          <div className="instruments grid h-full gap-4 col-span-full sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
            <AirPollution />
            <Sunset />
            <Wind />
            <DailyForecast />
            <UvIndex />
            <Population />
            <FeelsLike />
            <Humidity />
            <Visibility />
            <Pressure />
          </div>
          <div className="mapbox-con mt-4 flex gap-4">
            <Mapbox />
            <div className=" states flex flex-col gap-3 flex-1">
              <h2 className=" flex items-center m-2 gap-2 font-medium">
                Top Large Cities
              </h2>
              <div className=" flex flex-col gap-4">
                {defaultStates.map((state, index) => {
                  return (
                    <div
                      key={index}
                      className=" border rounded-lg cursor-pointer dark:bg-dark-grey shadow-sm dark:shadow-none"
                    >
                      <p className=" px-6 py-4">{state.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
