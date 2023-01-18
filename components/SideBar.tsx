import Link from "next/link";
import { useRouter } from "next/router";

interface SideBarProps {
  handleClickClear: (e: any, href: string) => void;
}

const SideBar = ({ handleClickClear }: SideBarProps) => {
  const router = useRouter();

  return (
    <div className="h-full flex lg:flex-col flex-row items-center lg:justify-center">
      <Link href="/about" passHref>
        <a
          onClick={(e) => handleClickClear(e, "/about")}
          className={
            router.asPath == "/about"
              ? "lg:mb-9 lg:mx-0 mx-6 font-bold hover:brightness-90 text-xl"
              : "lg:mb-9 lg:mx-0 mx-6 hover:brightness-90 text-xl"
          }
        >
          skills & tools
        </a>
      </Link>
      <Link href="/experience" passHref>
        <a
          onClick={(e) => handleClickClear(e, "/experience")}
          className={
            router.asPath == "/experience"
              ? "lg:mb-9 lg:mx-0 mx-6 font-bold hover:brightness-90 text-xl"
              : "lg:mb-9 lg:mx-0 mx-6 hover:brightness-90 text-xl"
          }
        >
          experience
        </a>
      </Link>
      <Link href="/education" passHref>
        <a
          onClick={(e) => handleClickClear(e, "/education")}
          className={
            router.asPath == "/education"
              ? "lg:mb-9 lg:mx-0 mx-6 font-bold hover:brightness-90 text-xl"
              : "lg:mb-9 lg:mx-0 mx-6 hover:brightness-90 text-xl"
          }
        >
          education
        </a>
      </Link>
    </div>
  );
};

export default SideBar;
