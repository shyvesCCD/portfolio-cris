import type { NextPage } from "next";
import Header from "../components/Header";
import Image from "next/image";
import BOTTLE from "../public/BOTTLE.svg";
import TWOHANDS from "../public/TWOHANDS.svg";
import { useRouter } from "next/router";

const InicialPage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <Header />
        <main className="lg:grid lg:grid-cols-3 flex flex-col justify-center mt-[15vh] h-[85vh] w-full">
          <Image
            className="lg:visible invisible invert"
            src={TWOHANDS}
            alt="Profile picture"
            objectFit="cover"
          />
          <div className="flex flex-col justify-center items-center">
            <h1 className="lg:text-4xl text-5xl font-bold mb-8">
              Hi, I’m Cris.
            </h1>
            <p className="lg:text-2xl lg:mx-5 text-xl mb-4 mx-5 text-center">
              I’m a video editor based in Porto, Portugal.
            </p>
            <p className="lg:text-2xl lg:mx-5 text-xl mb-4 mx-5 text-center">
              Let’s bring your story to life.
            </p>
            <p className="lg:text-2xl lg:mx-5 font-bold mb-4 text-xl mx-5 text-center">
              Wherever you are.
            </p>
          </div>
          <Image
            className="lg:visible invisible invert"
            src={BOTTLE}
            alt="Setup of the author"
            objectFit="cover"
          />
        </main>
      </div>
    </>
  );
};

export default InicialPage;
