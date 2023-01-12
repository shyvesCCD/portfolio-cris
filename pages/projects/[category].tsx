import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import { api } from "../../lib/axios";
import { loadCategory } from "../../lib/load-category";
import { Categoria, CategoryWhenNotArray } from "../../models/Category";

const ProjectsCategory: NextPage<CategoryWhenNotArray> = ({
  category,
  text,
}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen">
      <Header />
      <main className="mt-[15vh] h-[85vh] flex flex-col items-center justify-center lg:flex-row mx-20">
        <div className="w-full lg:w-1/3 lg:mt-0 mt-4 flex items-center justify-center">
          <div className="relative h-0 w-full pb-aspect">
            <iframe
              src={category.attributes.linkURL}
              className="absolute top-0 left-0 w-full h-full mx-auto "
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="flex text-base w-full lg:w-2/3 overflow-y-scroll lg:m-14 my-10 max-h-[38rem]">
          <div
            className="lg:ml-16 ml-0"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </main>
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

  const value = await loadCategory(params);

  const text = value[0].attributes.description.replace(/\n/g, "<br />");

  return {
    props: {
      category: value[0],
      text,
    },
  };
};
