import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { api } from "../lib/axios";
import { loadAbout } from "../lib/load-about";
import { AboutProps } from "../models/Category";
import { mdBoldToStrong } from "../lib/md-bold-strong";

import WaterMark from "../components/Watermark";
import AboutPageComponent from "../components/About";

const About: NextPage<AboutProps> = ({ data, textArray, textArray2 }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="overflow-auto h-screen flex flex-col shrink-0 snap-y snap-mandatory overflow-y-scroll">
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
              Got 2 minutes?
            </h1>
            <p className="text-xl">
              <strong>Press Play</strong>
            </p>
            <p className="text-xl">…or scroll down to read the essentials.</p>
          </div>
        </section>
        {data.map((element: any, index: any) => (
          <section
            key={index}
            className="h-[85vh] mt-[15vh] lg:grid lg:grid-cols-[40%_60%] flex flex-col snap-center shrink-0"
          >
            <AboutPageComponent
              key={index}
              image={element.attributes.foto.data.attributes.url}
              description={textArray[index]}
              description2={textArray2[index]}
              image2={element.attributes.tools}
            />
          </section>
        ))}
        <WaterMark />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get("/abouts?populate=*");
  const response = data.data;

  const paths = response.map(({ attributes }: any) => ({
    params: { title: attributes.title.toLowerCase() },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params!;

  const data = await loadAbout(params);

  let textArray: any = [];
  let textArray2: any = [];
  data.map((element: any) => {
    textArray2.push(mdBoldToStrong(element.attributes.description2));
    textArray.push(mdBoldToStrong(element.attributes.description));
  });

  return {
    props: {
      data,
      textArray,
      textArray2,
    },
  };
};

export default About;
