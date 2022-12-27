import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "../components/Header";

const Projects: NextPage = () => {
  const [categories, setCategories] = useState();

  return (
    <>
      <div className="h-screen">
        <Header />
        <h1 className=""></h1>
      </div>
    </>
  );
};

export default Projects;

export const getServerSideProps = () => {
  return {
    props: {
      list: [1, 2, 3],
    },
  };
};
