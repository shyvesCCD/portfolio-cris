import { GetStaticPaths, NextPage } from "next";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import { api } from "../../lib/axios";
import { Categoria, Category } from "../../models/Category";

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
      <main className="flex flex-wrap h-5/6">
        <div
          className="text-xl leading-6 m-auto"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <div className="flex justify-center items-center">
          <div className="relative h-0 overflow-hidden max-w-full w-full pb-aspect">
            <iframe
              src={category.attributes.linkURL}
              className="absolute top-0 left-0 w-full h-full mx-auto "
              allowFullScreen
            ></iframe>
          </div>
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
    (element) => element.attributes.category.toLowerCase() == params.category
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
