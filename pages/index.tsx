import type { NextPage } from "next";
import { useRouter } from "next/router";
import HeadComponent from "../components/HeadComponent";

const Home: NextPage = () => {
    const languages = [
        {
            name: "PORTUGUÊS",
            code: "pt",
        },
        {
            name: "ESPAÑOL",
            code: "es",
        },
        {
            name: "ENGLISH",
            code: "en",
        },
        {
            name: "한국어",
            code: "ko-KR",
        },
    ];

    const router = useRouter();

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <HeadComponent text="Cris Aldreyn" />
            {/*TODO: Aprender i18n para que eu possa fazer multiplas línguas no site:
        https://www.datocms.com/blog/how-to-build-a-multi-language-website-with-next-js-i18n
      */}
            {/*TODO: Após isso comunicar a Cris de como isso será feito.*/}
            {languages.map((language) => (
                <button
                    onClick={() => {
                        router.push("/home");
                    }}
                    key={language.code}
                    className="hover:underline text-4xl mt-4"
                >
                    {language.name}
                </button>
            ))}
        </div>
    );
};

export default Home;
