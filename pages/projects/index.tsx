import type { NextPage } from "next";
import Header from "../../components/Header";
import { api } from "../../lib/axios";
import Card from "../../components/Cards";
import { Category } from "../../models/Category";

const Projects: NextPage<Category> = ({ category }) => {
  return (
    <>
      <div className="h-screen">
        <Header />
        {/*TODO: Agora preciso criar o componente que vai ficar as categorias */}
        <div className="h-5/6 flex justify-center flex-wrap">
          {category ? (
            category.map((element) => (
              <Card text={element.attributes.category} key={element.id} />
            ))
          ) : (
            <h1>Não foi possível carregar as categorias.</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;

export const getServerSideProps = async () => {
  const response = await api.get("categories", {
    headers: {
      Accept: "application/json",
    },
  });

  const data1 = response.data.data;

  if (!data1) return { notFound: true };

  return {
    props: {
      category: data1,
    },
  };
};
