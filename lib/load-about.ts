import { ParamsPropsAbout } from "../models/Category";
import { api } from "./axios";

export async function loadAbout(params: ParamsPropsAbout) {
    if (params.title == "about") {
        params.title = "skills&tools";
    }

    const { data } = await api.get("/abouts");

    const response = data.data;

    const value = response.filter(
        (element: any) =>
            element.attributes.title.toLowerCase().replace(/\s/g, "") ===
            params.title
    );

    return value;
}
