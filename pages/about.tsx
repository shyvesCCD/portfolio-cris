import type { NextPage } from "next";
import Header from "../components/Header";

const About: NextPage = () => {
  return (
    <div className="h-screen">
      <Header />
      <main className="grid grid-cols-[40%_60%] h-5/6">
        <div className="flex justify-center items-center">
          <div className="relative h-0 overflow-hidden max-w-full w-full pb-aspect">
            <iframe src="https://www.youtube.com/embed/jfKfPfyJRdk"
              className="absolute top-0 left-0 w-full h-full mx-auto " allowFullScreen></iframe>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-9">
          <h1 className="text-3xl font-bold">Here’s a little bit about me.</h1>
          <p className="text-xl">
            You can watch this video to get all the info. (including some fun
            stuff)
          </p>
          <p className="text-xl">…or scroll down to read the essentials.</p>
          <p className="text-xl">
            It’s up to you. But isn’t making videos the reason you’re here after
            all?
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
