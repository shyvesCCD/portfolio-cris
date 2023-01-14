import Link from "next/link";
import { useRouter } from "next/router";

const HeaderCategories = ({ categories }: any) => {
  const router = useRouter();

  return (
    <nav className="h-[15vh] flex items-center justify-between">
      <div className="w-full">
        <ul className="flex flex-wrap items-center justify-center text-base cursor-pointer place-content-center">
          {categories.map((category: string) => (
            <Link key={category} href={category.replace(/\s/g, "")} passHref>
              <a
                className={
                  router.asPath == `/projects/${category.replace(/\s/g, "")}`
                    ? "font-bold px-6 py-4 hover:brightness-90 text-xl"
                    : "px-6 py-4 hover:brightness-90 text-xl"
                }
              >
                {category}
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default HeaderCategories;
