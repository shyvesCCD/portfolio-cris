import type { NextPage } from "next";
import HeadComponent from "../components/HeadComponent";
import Header from "../components/Header";

const About: NextPage = () => {
  return (
    <div className="h-screen">
      <HeadComponent text="Cris Aldreyn" />
      <Header />
      <main className="grid grid-cols-[40%_60%] h-4/5">
        <div className="flex flex-grow justify-center items-center">
          Aqui vai será o vídeo
        </div>
        <div className="flex flex-grow flex-col items-center justify-center gap-4">
          <h1>Here’s a little bit about me.</h1>
          <p>
            You can watch this video to get all the info. (including some fun
            stuff)
          </p>
          <p>…or scroll down to read the essentials.</p>
          <p>
            It’s up to you. But isn’t making videos the reason you’re here after
            all?
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
