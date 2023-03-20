import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import HeaderCategories from "../../components/HeaderCategories";
import WaterMark from "../../components/Watermark";
import { api } from "../../lib/axios";
import { loadCategory } from "../../lib/load-category";
import { Categoria, CategoryWhenNotArray } from "../../models/Category";
//import TWOHANDS from "../../public/TWOHANDS.svg";

const ProjectsCategory: NextPage<CategoryWhenNotArray> = ({
  retorno,
  category,
  textArray,
  responseArray,
}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="h-[85vh] mt-[15vh] lg:flex-row mx-10">
        <div className="flex items-center justify-center text-center flex-wrap">
          <HeaderCategories categories={responseArray} />
        </div>
        <div className="flex lg:flex-row flex-col">
          <div className="lg:visible invisible flex items-center">
            <Image
              className="lg:visible invisible invert"
              src={`https://cris-backend-production.up.railway.app${retorno.attributes.fotoCategoria.data.attributes.url}`}
              alt=""
              objectFit="contain"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col text-base w-full lg:w-2/3 overflow-auto lg:mr-10 my-10 max-h-[38rem]">
            <h1 className="text-center mb-9 font-medium text-4xl">
              {category.attributes.category}
            </h1>
            <div className="lg:ml-16 ml-0 max-h-[512px] mr-10">
              {textArray.map((paragraph) => (
                <p
                  key={textArray.indexOf(paragraph)}
                  className="indent-4 mb-4 last:indent-0 last:mb-0 text-justify"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 lg:mt-0 mt-4 flex items-center justify-center">
            <div className="relative h-0 w-full pb-aspect">
              <iframe
                src={category.attributes.linkURL}
                className="absolute top-0 left-0 w-full h-full mx-auto "
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <WaterMark />
    </div>
  );
};

export default ProjectsCategory;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get("/categories");
  const response = data.data;

  const paths = response.map(({ attributes }: Categoria) => ({
    params: { category: attributes.category.replace(/\s/, "").toLowerCase() },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params!;

  const { value, response } = await loadCategory(params);

  const textArray = value[0].attributes.description.split("\n");

  const retorno = value[0];

  const responseArray: string[] = [];

  response.map((element: any) => {
    responseArray.push(element.attributes.category.toLowerCase());
  });

  return {
    props: {
      retorno,
      category: value[0],
      textArray,
      responseArray,
    },
    revalidate: 60,
  };
};
