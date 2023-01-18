import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { api } from "../lib/axios";
import { loadAbout } from "../lib/load-about";
import { AboutProps } from "../models/Category";
import { mdBoldToStrong } from "../lib/md-bold-strong";
import { useState } from "react";
import Image from "next/image";

import nextArrow from "../public/next-arrow-icon.svg";
import backArrow from "../public/back-arrow-icon.svg";

const About: NextPage<AboutProps> = ({ textArray }) => {
  const router = useRouter();
  const [counter, setCounter] = useState<number>(0);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  function handleClickNext() {
    if (counter == textArray.length - 1) return;
    setCounter(counter + 1);
  }

  function handleClickBack() {
    if (counter === 0) return;
    setCounter(counter - 1);
  }

  function handleClickClear(e: any, href: string) {
    e.preventDefault();
    router.push(href);
    setCounter(0);
  }

  return (
    <>
      <div className="h-screen flex flex-col shrink-0 snap-y snap-mandatory overflow-y-scroll">
        <Header />
        <section className="h-[85vh] mt-[15vh] lg:grid lg:grid-cols-[40%_60%] flex flex-col snap-center shrink-0">
          <div className="flex justify-center items-center">
            <div className="relative lg:h-0 mt-[8vh] overflow-hidden max-w-full w-full pb-aspect mx-10">
              <iframe
                src="https://www.youtube.com/embed/jfKfPfyJRdk"
                className="absolute top-0 left-0 w-full h-full mx-auto "
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-9 mx-10">
            <h1 className="lg:mt-0 mt-10 lg:text-3xl text-2xl font-bold">
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
        <section className="h-[85vh] mt-[15vh] lg:grid lg:grid-cols-[30%_70%] snap-center shrink-0 flex flex-col items-center justify-center">
          <div className="flex lg:flex-row flex-col lg:justify-center lg:h-full h-[15vh] lg:items-center">
            <SideBar handleClickClear={handleClickClear} />
            <div className="lg:ml-28 lg:h-2/3 lg:flex lg:border lg:rounded-lg lg:border-gray-600 hidden"></div>
          </div>
          <div className="flex items-center lg:ml-10">
            <button
              className={counter === 0 ? "hidden  " : "mx-7 h-8 w-8"}
              onClick={() => handleClickBack()}
            >
              <Image
                className="fill-gray-300"
                src={backArrow}
                alt="Arrow to back"
              />
            </button>
            <div className="flex flex-col justify-center items-center gap-8 lg:w-2/3 w-full text-center overflow-y-scroll">
              <p
                className="leading-8 lg:text-2xl text-xl mx-7"
                dangerouslySetInnerHTML={{ __html: textArray[counter] }}
              ></p>
            </div>
            <button
              className={
                counter === textArray.length - 1 ? "hidden" : "mx-7 h-8 w-8"
              }
              onClick={() => handleClickNext()}
            >
              <Image
                className="fill-gray-300"
                src={nextArrow}
                alt="Arrow to next"
              />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get("/abouts");
  const response = data.data;

  const paths = response.map(({ attributes }: any) => ({
    params: { title: attributes.title.toLowerCase() },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params!;

  const data = await loadAbout(params);

  const textArray = mdBoldToStrong(data[0].attributes.description).split(
    "SLIDE"
  );

  return {
    props: {
      textArray,
    },
  };
};

export default About;
