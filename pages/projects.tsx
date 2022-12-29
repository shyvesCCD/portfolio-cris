import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { api } from "../lib/axios";

const Projects: NextPage = () => {
  const [categories, setCategories] = useState([""]);
  const [pagination, setPagination] = useState();

  useEffect(() => {
    try {
      api.get("/categories").then((response) => {
        setCategories(response.data.data);
        setPagination(response.data.meta);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(categories);
  console.log(pagination);

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
