import type { NextPage } from "next";
import Header from "../components/Header";
import Image from "next/image";
import BOTTLE from "../public/BOTTLE.svg";
import TWOHANDS from "../public/TWOHANDS.svg";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { parseCookies } from "nookies";

const InicialPage: NextPage = () => {
    const router = useRouter();
    const { theme } = useTheme();

    const content = {
        es: {
            first: "Hola, soy Cris",
            second: "Soy un editor de video que vive en Oporto, Portugal.",
            third: "Hagamos que tu historia cobre vida.",
            fourth: "Donde quiera que estés.",
            fifth: "Reserva una charla",
        },
        en: {
            first: "Hi, I’m Cris.",
            second: "I’m a video editor based in Porto, Portugal.",
            third: "Let’s bring your story to life.",
            fourth: "Wherever you are.",
            fifth: "Book a chat",
        },
        pt: {
            first: "Olá, me chamo Cris",
            second: "Sou uma editora de vídeo que mora em Porto, Portugal",
            third: "Vou dar vida à sua história.",
            fourth: "Independente onde você esteja.",
            fifth: "Reserve um chat",
        },
        koKR: {
            first: "안녕하세요, 크리스입니다.",
            second: "저는 포르투갈 포르투에 거주하는 비디오 편집자입니다.",
            third: "당신의 이야기에 생명을 불어넣자.",
            fourth: "네가 어디에 있든.",
            fifth: "채팅 예약",
        },
    };

    const cookies = parseCookies();

    const currentContent = content[cookies.locale as keyof typeof content];

    console.log(currentContent);

    return (
        <>
            <div className="h-screen w-full flex flex-col">
                <Header />
                <main className="lg:grid lg:grid-cols-3 flex flex-col justify-center mt-[15vh] h-[85vh] w-full">
                    {theme == "light" ? (
                        <div className="m-10">
                            <Image
                                className="lg:visible invisible"
                                src={TWOHANDS}
                                alt="Setup of the author"
                                objectFit="cover"
                            />
                        </div>
                    ) : (
                        <div className="m-10">
                            <Image
                                className="lg:visible invisible invert"
                                src={TWOHANDS}
                                alt="Setup of the author"
                                objectFit="cover"
                            />
                        </div>
                    )}
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="lg:text-4xl text-5xl font-bold mb-8">
                            {currentContent?.first}
                        </h1>
                        <p className="lg:text-2xl lg:mx-5 text-xl mb-4 mx-5 text-center">
                            {currentContent?.second}
                        </p>
                        <p className="lg:text-2xl lg:mx-5 text-xl mb-4 mx-5 text-center">
                            {currentContent?.third}
                        </p>
                        <p className="lg:text-2xl lg:mx-5 font-bold mb-4 text-xl mx-5 text-center">
                            {currentContent?.fourth}
                        </p>
                        {theme == "light" ? (
                            <button
                                className="font-bold text-2xl p-2 border-4 rounded-sm border-black hover:shadow-lg"
                                onClick={() => router.push("/services")}
                            >
                                {currentContent?.fifth}
                            </button>
                        ) : (
                            <button
                                className="font-bold text-2xl p-2 border-4 rounded-sm"
                                onClick={() => router.push("/services")}
                            >
                                {currentContent?.fifth}
                            </button>
                        )}
                    </div>
                    {theme == "light" ? (
                        <div className="m-10">
                            <Image
                                className="lg:visible invisible"
                                src={BOTTLE}
                                alt="Setup of the author"
                                objectFit="cover"
                            />
                        </div>
                    ) : (
                        <div className="m-10">
                            <Image
                                className="lg:visible invisible invert"
                                src={BOTTLE}
                                alt="Setup of the author"
                                objectFit="cover"
                            />
                        </div>
                    )}
                </main>
            </div>
        </>
    );
};

export default InicialPage;
