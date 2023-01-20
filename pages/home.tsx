import type { NextPage } from "next";
import Header from "../components/Header";
import Image from "next/image";
import profilePic from "../public/crisphoto.jpg";
import setupCris from "../public/setupCris.jpg";
import WaterMark from "../components/Watermark";

const InicialPage: NextPage = () => {
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <Header />
        <main className="lg:grid lg:grid-cols-3 flex flex-col justify-center mt-[15vh] h-[85vh] w-full">
          <Image
            className="lg:visible invisible"
            src={profilePic}
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
            <p className="lg:text-2xl lg:mx-5 text-xl mx-5 text-center">
              But I can help you tell your story wherever you are.
            </p>
          </div>
          <Image
            className="lg:visible invisible"
            src={setupCris}
            alt="Setup of the author"
            objectFit="cover"
          />
        </main>
        <WaterMark />
      </div>
    </>
  );
};

export default InicialPage;
