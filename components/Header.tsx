import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 w-full h-[15vh] flex justify-between items-center z-10">
      <Link href="/home" passHref>
        <a className="text-2xl pl-8 py-4 font-medium">
          Cris Aldreyn | video editor services
        </a>
      </Link>
      <ul className="hidden md:flex items-center text-base cursor-pointer">
        <Link href="/home" passHref>
          <a
            className={
              router.asPath.includes("/home")
                ? "font-bold px-6 py-4 hover:brightness-90 text-xl"
                : "px-6 py-4 hover:brightness-90 text-xl"
            }
          >
            home
          </a>
        </Link>
        <Link href="/about" passHref>
          <a
            className={
              router.asPath.includes("/about")
                ? "font-bold px-6 py-4 hover:brightness-90 text-xl"
                : "px-6 py-4 hover:brightness-90 text-xl"
            }
          >
            about
          </a>
        </Link>
        <Link href="/projects" passHref>
          <a
            className={
              router.asPath.includes("/projects")
                ? "font-bold px-6 py-4 hover:brightness-90 text-xl"
                : "px-6 py-4 hover:brightness-90 text-xl"
            }
          >
            projects
          </a>
        </Link>
        <Link href="/services" passHref>
          <a
            className={
              router.asPath.includes("/services")
                ? "font-bold px-6 py-4 hover:brightness-90 text-xl"
                : "px-6 py-4 hover:brightness-90 text-xl"
            }
          >
            services
          </a>
        </Link>
      </ul>
      <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:brightness-90 group">
        <div className="w-5 h-1 bg-gray-600 mb-1 rounded"></div>
        <div className="w-5 h-1 bg-gray-600 mb-1 rounded"></div>
        <div className="w-5 h-1 bg-gray-600 mb-1 rounded"></div>
        <div className="absolute top-30 -right-full w-2/12 opacity-0 group-focus:right-10 group-focus:opacity-100 transition-all duration-300 bg-zinc-800 rounded-md">
          <ul className="flex flex-col items-center w-full pt-4">
            <Link href="home" passHref>
              <a
                className={
                  router.pathname == "/home"
                    ? "w-full font-bold px-6 pb-4 hover:brightness-90 text-xl"
                    : "w-full px-6 py-4 hover:brightness-90 text-xl"
                }
              >
                home
              </a>
            </Link>
            <Link href="about" passHref>
              <a
                className={
                  router.pathname == "/about"
                    ? "w-full font-bold px-6 py-4 hover:brightness-90 text-xl"
                    : "w-full px-6 py-4 hover:brightness-90 text-xl"
                }
              >
                about
              </a>
            </Link>
            <Link href="projects" passHref>
              <a
                className={
                  router.pathname == "/projects"
                    ? "w-full font-bold px-6 py-4 hover:brightness-90 text-xl"
                    : "w-full px-6 py-4 hover:brightness-90 text-xl"
                }
              >
                projects
              </a>
            </Link>
            <Link href="services" passHref>
              <a
                className={
                  router.pathname == "/services"
                    ? "w-full font-bold px-6 py-4 hover:brightness-90 text-xl"
                    : "w-full px-6 py-4 hover:brightness-90 text-xl"
                }
              >
                services
              </a>
            </Link>
          </ul>
        </div>
      </button>
    </nav>
  );
};

export default Header;
