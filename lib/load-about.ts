import { ParamsPropsAbout } from "../models/Category";
import { api } from "./axios";

export async function loadAbout(params: ParamsPropsAbout) {
    const { data } = await api.get("/abouts?populate=*");

    const response = data.data;

    const value = response.filter(
        (element: any) =>
            element.attributes.title.toLowerCase().replace(/\s/g, "") ===
            params.title
    );

    return value;
}
