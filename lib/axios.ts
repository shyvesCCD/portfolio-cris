import axios from "axios";

export const api = axios.create({
    baseURL: "https://cris-backend-production.up.railway.app/",
});
