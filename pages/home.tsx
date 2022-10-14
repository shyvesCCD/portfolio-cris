import type { NextPage } from "next";
import Header from "../components/Header";
import HeadComponent from "../components/HeadComponent";
import Image from "next/image";
import profilePic from "../public/crisphoto.jpg";
import setupCris from "../public/setupCris.jpg";

const InicialPage: NextPage = () => {
  return (
    <>
      <HeadComponent text="Cris Aldreyn" />
      <Header />
      {/*TODO: Ajeitar as fotos para que elas ocupem o site inteiro.*/}
      <main className="flex justify-between items-center">
        <Image
          className="flex-1 w-max h-max"
          src={profilePic}
          alt="Picture of the author"
          width="100%"
          height="100%"
          objectFit="cover"
          placeholder="blur" // Optional blur-up while loading
          priority
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl mb-8">Hi, I'm Cris.</h1>
          <p className="text-2xl mb-4">
            I’m a video editor based in Porto, Portugal.
          </p>
          <p className="text-2xl">
            But I can help you tell your story wherever you are.
          </p>
        </div>
        <Image
          className="flex-1 w-max h-max"
          src={setupCris}
          alt="Setup of the author"
          width="100%"
          height="100%"
          objectFit="cover"
          placeholder="blur" // Optional blur-up while loading
        />
      </main>
    </>
  );
};

export default InicialPage;
