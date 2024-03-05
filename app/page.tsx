import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className=" max-[1rem] lg:mx-[2rem] xl:max-[6rem] 2xl:ms-[16rem] m-auto ">
      <Navbar />
    </main>
  );
}
