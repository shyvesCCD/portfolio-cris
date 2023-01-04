import { useRouter } from "next/router";

const ProjectsCategory = () => {
  const router = useRouter();
  const { category } = router.query;

  return <p>Category: {category}</p>;
};

export default ProjectsCategory;
