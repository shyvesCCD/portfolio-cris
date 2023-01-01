import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { api } from "../lib/axios";

interface ProjectsProps {
  data1: {
    id: number;
    attributes: {
      category: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }[];
  data2: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: 6;
    };
  };
}

const Projects: NextPage<ProjectsProps> = ({ data1, data2 }) => {
  console.log(data1);

  return (
    <>
      <div className="h-screen">
        <Header />
        {/*TODO: Agora preciso criar o componente que vai ficar as categorias */}
        {data1.map((element) => (
          <h1 className="font-bold" key={element.id}>
            {element.attributes.category}
          </h1>
        ))}
      </div>
    </>
  );
};

export default Projects;

export const getServerSideProps: GetStaticProps = async () => {
  const data = await api.get("/categories");

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data1: data.data.data,
      data2: data.data.meta,
    },
  };
};
