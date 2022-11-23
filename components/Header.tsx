import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header className="flex justify-between p-8 h-1/6 items-center">
      <Link href="/home" passHref>
        <a className="text-2xl font-medium">Cris Aldreyn | video editor services</a>
      </Link>
      <ul>
        <Link href="/home" passHref>
          <a
            className={
              router.pathname == "/home"
                ? "font-bold hover:brightness-90 text-xl"
                : "hover:brightness-90 text-xl"
            }
          >
            home
          </a>
        </Link>
        <Link href="/about" passHref>
          <a
            className={
              router.pathname == "/about"
                ? "font-bold ml-8 hover:brightness-90 text-xl"
                : "ml-8 hover:brightness-90 text-xl"
            }
          >
            about
          </a>
        </Link>
        <Link href="projects" passHref>
          <a
            className={
              router.pathname == "/projects"
                ? "font-bold ml-8 hover:brightness-90 text-xl"
                : "ml-8 hover:brightness-90 text-xl"
            }
          >
            projects
          </a>
        </Link>
        <Link href="services" passHref>
          <a
            className={
              router.pathname == "/services"
                ? "font-bold ml-8 hover:brightness-90 text-xl"
                : "ml-8 hover:brightness-90 text-xl"
            }
          >
            services
          </a>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
