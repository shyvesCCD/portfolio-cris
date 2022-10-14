import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header className="flex p-8 justify-around">
      <Link href="/home" passHref>
        <a className="text-xl">Cris Aldreyn | video editor services</a>
      </Link>
      <ul>
        <Link href="/home" passHref>
          <a
            className={
              router.pathname == "/home"
                ? "font-bold hover:brightness-80 text-xl"
                : "hover:brightness-80 text-xl"
            }
          >
            home
          </a>
        </Link>
        <Link href="/about" passHref>
          <a
            className={
              router.pathname == "/about"
                ? "font-bold ml-8 hover:brightness-80 text-xl"
                : "ml-8 hover:brightness-80 text-xl"
            }
          >
            about
          </a>
        </Link>
        <Link href="projects" passHref>
          <a
            className={
              router.pathname == "/projects"
                ? "font-bold ml-8 hover:brightness-80 text-xl"
                : "ml-8 hover:brightness-80 text-xl"
            }
          >
            projects
          </a>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
