import { ParamsPropsAbout } from "../models/Category";
import { api } from "./axios";

export async function loadAbout(params: ParamsPropsAbout, locale: any) {
    const { data } = await api.get(`/abouts?locale=${locale}&populate=*`);

    const response = data.data;

    const value = response.filter(
        (element: any) =>
            element.attributes.title.toLowerCase().replace(/\s/g, "") ===
            params.title
    );

    return value;
}
