import { ElementProps, ParamsProps } from "../models/Category";
import { api } from "./axios";

export async function loadCategory(params: ParamsProps) {
  const { data } = await api.get("/categories");

  if (!data) return { notFound: true };

  const response = data.data;

  const value = response.filter(
    (element: ElementProps) =>
      element.attributes.category.toLowerCase().replace(/\s/g, "") ==
      params.category
  );

  return { value, response };
}
