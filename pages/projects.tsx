import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { api } from "../lib/axios";
import Card from "../components/Cards";
import { Category, CategoryMeta } from "../models/Category";

const Projects: NextPage<Category> = ({ data1 }) => {
  return (
    <>
      <div className="h-screen">
        <Header />
        {/*TODO: Agora preciso criar o componente que vai ficar as categorias */}
        <div className="h-5/6 flex justify-center flex-wrap">
          {data1.map((element) => (
            <Card text={element.attributes.category} key={element.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/categories", {
    headers: {
      Accept: "application/json",
    },
  });

  const data1: Category = response.data.data;

  return {
    props: {
      data1,
    },
  };
};
