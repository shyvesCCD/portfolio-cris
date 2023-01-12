import type { NextPage } from "next";
import Header from "../components/Header";

const About: NextPage = () => {
  return (
    <>
      <div className="h-screen flex flex-col snap-y snap-mandatory overflow-y-scroll">
        <Header />
        <section className="h-[85vh] mt-[15vh] lg:grid lg:grid-cols-[40%_60%] flex flex-col snap-center shrink-0">
          <div className="flex justify-center items-center">
            <div className="relative h-0 overflow-hidden max-w-full w-full pb-aspect mx-10">
              <iframe
                src="https://www.youtube.com/embed/jfKfPfyJRdk"
                className="absolute top-0 left-0 w-full h-full mx-auto "
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-9 mx-10">
            <h1 className="lg:mt-0 mt-10 text-3xl font-bold">
              Here’s a little bit about me.
            </h1>
            <p className="text-xl">
              You can watch this video to get all the info. (including some fun
              stuff)
            </p>
            <p className="text-xl">…or scroll down to read the essentials.</p>
            <p className="text-xl">
              It’s up to you. But isn’t making videos the reason you’re here
              after all?
            </p>
          </div>
        </section>
        <section className="h-[85vh] mt-[15vh] snap-center shrink-0 flex items-center">
          <div className="flex justify-between h-fit">
            <nav className="flex flex-col justify-center items-center">
              <ul>
                <li>skills & tools</li>
                <li>experience</li>
                <li>education</li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
