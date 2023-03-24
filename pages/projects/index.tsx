import type { NextPage } from "next";
import Header from "../../components/Header";
import { api } from "../../lib/axios";
import Card from "../../components/Cards";
import { Category, ElementProps } from "../../models/Category";
import WaterMark from "../../components/Watermark";

const Projects: NextPage<Category> = ({ category }) => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Header />
        <div className="mt-[15vh] h-[85vh] flex items-center justify-center flex-wrap">
          {category ? (
            category.map((element: ElementProps) => (
              <Card
                image={element.attributes.fotoCategoria.data.attributes.url}
                text={element.attributes.category}
                key={element.id}
              />
            ))
          ) : (
            <h1>Não foi possível carregar as categorias.</h1>
          )}
        </div>
        <WaterMark />
      </div>
    </>
  );
};

export default Projects;

export const getServerSideProps = async () => {
  const response = await api.get("categories?populate=*", {
    headers: {
      Accept: "application/json",
    },
  });

  const data1 = response.data.data;

  console.log(data1);

  if (!data1) return { notFound: true };

  return {
    props: {
      category: data1,
    },
  };
};
