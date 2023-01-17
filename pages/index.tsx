import type { NextPage } from "next";
import { useRouter } from "next/router";
import HeadComponent from "../components/HeadComponent";

const Home: NextPage = () => {
  const languagens = ["PORTUGUÊS", "ESPAÑOL", "ENGLISH", "한국어"];
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <HeadComponent text="Cris Aldreyn" />
      {/*TODO: Aprender i18n para que eu possa fazer multiplas línguas no site:
        https://www.datocms.com/blog/how-to-build-a-multi-language-website-with-next-js-i18n
      */}
      {/*TODO: Após isso comunicar a Cris de como isso será feito.*/}
      {languagens.map((language) => (
        <button
          onClick={() => router.push("/home")}
          key={language}
          className="hover:underline text-4xl mt-4"
        >
          {language}
        </button>
      ))}
    </div>
  );
};
export default Home;
