import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useState } from "react";
import ThemeChanger from "./ThemeChanger";
import { parseCookies } from "nookies";

const Header = () => {
    const router = useRouter();
    const [opened, setOpened] = useState(false);
    const cookies = parseCookies();

    const content = {
        es: {
            logo: "Cris Aldreyn | editor de video",
            home: "hogar",
            about: "sobre",
            projects: "proyectos",
            services: "servicios",
        },
        en: {
            logo: "Cris Aldreyn | video editor",
            home: "home",
            about: "about",
            projects: "projects",
            services: "services",
        },
        "pt-BR": {
            logo: "Cris Aldreyn | editora de vídeo",
            home: "página inicial",
            about: "sobre",
            projects: "projetos",
            services: "serviços",
        },
        "ko-KR": {
            logo: "Cris Aldreyn | 동영상 편집기",
            home: "남성",
            about: "~에 대한",
            projects: "프로젝트",
            services: "서비스",
        },
    };

    const currentContent = content[cookies.locale as keyof typeof content];

    const handleOpenMenu = () => {
        setOpened(!opened);
    };

    return (
        <nav className="absolute w-full h-[15vh] flex justify-between items-center z-10">
            <Link href="/home" passHref>
                <a className="lg:text-2xl text-xl mx-8 font-medium">
                    {currentContent?.logo}
                </a>
            </Link>
            <ul className="hidden md:flex items-center text-base cursor-pointer mx-8">
                <Link href="/home" passHref>
                    <a
                        className={
                            router.asPath.includes("/home")
                                ? "brightness-125 px-6 py-4 hover:brightness-80 text-xl"
                                : "px-6 py-4 hover:brightness-80 text-xl"
                        }
                    >
                        {currentContent?.home}
                    </a>
                </Link>
                <Link href="/about" passHref>
                    <a
                        className={
                            router.asPath.includes("/about")
                                ? "px-6 py-4 brightness-125 hover:brightness-80 text-xl"
                                : "px-6 py-4 hover:brightness-80 text-xl"
                        }
                    >
                        {currentContent?.about}
                    </a>
                </Link>
                <Link href={`/projects`} passHref>
                    <a
                        className={
                            router.asPath.includes("/projects")
                                ? "brightness-125 px-6 py-4 hover:brightness-80 text-xl"
                                : "px-6 py-4 hover:brightness-80 text-xl"
                        }
                    >
                        {currentContent?.projects}
                    </a>
                </Link>
                <Link href={`/services`} passHref>
                    <a
                        className={
                            router.asPath.includes("/services")
                                ? "brightness-125 px-6 py-4 hover:brightness-80 text-xl"
                                : "px-6 py-4 hover:brightness-80 text-xl"
                        }
                    >
                        {currentContent?.services}
                    </a>
                </Link>
                <ThemeChanger />
            </ul>
            <div
                onClick={handleOpenMenu}
                className={classNames(
                    `md:hidden tham tham-e-slider tham-w-6 mr-2`,
                    {
                        "tham-active": opened,
                    }
                )}
            >
                <div className="tham-box">
                    {opened ? (
                        <div className="flex flex-col rounded-lg z-50 bg-gray-600 w-fit h-fit top-10 float-right">
                            <Link href={`/home`} passHref>
                                <a
                                    className={
                                        router.asPath.includes("/home")
                                            ? "mx-6 brightness-125 my-4 hover:brightness-80 text-base"
                                            : "mx-6 my-4 hover:brightness-80 text-base"
                                    }
                                >
                                    {currentContent?.home}
                                </a>
                            </Link>
                            <Link href={`/about`} passHref>
                                <a
                                    className={
                                        router.asPath.includes("/about")
                                            ? "mx-6 my-4 hover:brightness-80 text-base"
                                            : "mx-6 my-4 hover:brightness-80 text-base"
                                    }
                                >
                                    {currentContent?.about}
                                </a>
                            </Link>
                            <Link href={`/projects`} passHref>
                                <a
                                    className={
                                        router.asPath.includes("/projects")
                                            ? "mx-6 my-4 hover:brightness-80 text-base"
                                            : "mx-6 my-4 hover:brightness-80 text-base"
                                    }
                                >
                                    {currentContent?.projects}
                                </a>
                            </Link>
                            <Link href={`/services`} passHref>
                                <a
                                    className={
                                        router.asPath.includes("/services")
                                            ? "mx-6 py-4 hover:brightness-80 text-base"
                                            : "mx-6 my-4 hover:brightness-80 text-base"
                                    }
                                >
                                    {currentContent?.services}
                                </a>
                            </Link>
                        </div>
                    ) : (
                        <></>
                    )}
                    <div className="tham-inner bg-gray-400" />
                </div>
            </div>
        </nav>
    );
};

export async function getServerSideProps() {
    const cookies = parseCookies();
    return {
        props: {
            locale: cookies.locale,
        },
    };
}

export default Header;
