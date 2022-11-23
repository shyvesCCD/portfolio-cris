import type { NextPage } from "next";
import Header from "../components/Header";
import Image from "next/image";
import profilePic from "../public/crisphoto.jpg";
import setupCris from "../public/setupCris.jpg";

const InicialPage: NextPage = () => {
  return (
    <div className="h-screen">
      <Header />
      {/*TODO: Ajeitar as fotos para que elas ocupem o site inteiro.*/}
      <main className="grid grid-cols-3 h-5/6">
        <Image src={profilePic} alt="Profile picture" objectFit="cover" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl mb-8">Hi, I’m Cris.</h1>
          <p className="text-2xl mb-4">
            I’m a video editor based in Porto, Portugal.
          </p>
          <p className="text-2xl">
            But I can help you tell your story wherever you are.
          </p>
        </div>
        <Image src={setupCris} alt="Setup of the author" objectFit="cover" />
      </main>
    </div>
  );
};

export default InicialPage;
