import axios from "axios";

export const api = axios.create({
    baseURL: "https://cris-admin.onrender.com/api",
});
