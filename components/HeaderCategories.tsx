import Link from "next/link";
import { useRouter } from "next/router";

const HeaderCategories = ({ categories }: any) => {
    const router = useRouter();

    return (
        <nav className="h-[15vh] flex items-center justify-between">
            <div className="w-full">
                <ul className="flex flex-wrap lg:items-center lg:justify-center text-base place-content-center">
                    {categories.map((category: string, index: number) => (
                        <Link
                            key={index}
                            href={category.replace(/\s/g, "")}
                            passHref
                        >
                            <a
                                className={
                                    router.asPath ==
                                    `/projects/${category.replace(/\s/g, "")}`
                                        ? "font-bold lg:mx-6 lg:my-4 mr-4 hover:brightness-90 text-xl"
                                        : "lg:mx-6 lg:mr-4 mx-4 hover:brightness-90 text-xl"
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
