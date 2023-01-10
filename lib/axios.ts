import axios from "axios";

export const api = axios.create({
    baseURL: "cris-backend-production.up.railway.app/api",
});
