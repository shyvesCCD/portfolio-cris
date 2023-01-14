import Link from "next/link";
import { useRouter } from "next/router";

interface SideBarProps {
  handleClickClear: (e: any, href: string) => void;
}

const SideBar = ({ handleClickClear }: SideBarProps) => {
  const router = useRouter();

  return (
    <nav className="flex justify-center">
      <div className="h-full flex flex-col place-content-center">
        <Link href="/about" passHref>
          <a
            onClick={(e) => handleClickClear(e, "/about")}
            className={
              router.asPath == "/about"
                ? "mb-9 font-bold hover:brightness-90 text-xl"
                : "mb-9 hover:brightness-90 text-xl"
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
                ? "mb-9 font-bold hover:brightness-90 text-xl"
                : "mb-9 hover:brightness-90 text-xl"
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
                ? "font-bold hover:brightness-90 text-xl"
                : "hover:brightness-90 text-xl"
            }
          >
            education
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default SideBar;
