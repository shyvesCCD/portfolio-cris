import { GetStaticPaths, NextPage } from "next";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import { api } from "../../lib/axios";
import { Categoria, Category, ElementProps } from "../../models/Category";

type Params = {
  params: {
    category: string;
  };
};

const ProjectsCategory: NextPage<Category> = ({ category, text }) => {
  const router = useRouter();

  if (router.isFallback) return null;

  return (
    <>
      <Header />
      <main className="flex flex-col lg:flex-row h-5/6 mx-20">
        <div className="w-full lg:w-1/3 lg:mt-0 mt-4 flex items-center">
          <div className="relative h-0 w-full pb-aspect">
            <iframe
              src={category.attributes.linkURL}
              className="absolute top-0 left-0 w-full h-full mx-auto "
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="flex text-xl leading-6 w-full lg:w-2/3 overflow-y-scroll">
          <div
            className="lg:ml-16 ml-0"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </main>
    </>
  );
};

export default ProjectsCategory;

export async function getStaticPaths() {
  const { data } = await api.get("/categories");
  const response = data.data;

  const paths = response.map(({ attributes }: Categoria) => ({
    params: { category: attributes.category },
  }));

  return { paths, fallback: "blocking" };
}

export const getStaticProps: GetStaticPaths = async ({ params }: Params) => {
  console.log(params);
  const { data } = await api.get("/categories");

  if (!data) return { notFound: true };

  const response = data.data;

  const value = response.filter(
    (element: ElementProps) =>
      element.attributes.category.toLowerCase() == params.category
  );

  const text = value[0].attributes.description.replace(/\n/g, "<br />");

  console.log(value);
  return {
    props: {
      text,
      category: value[0],
    },
  };
};