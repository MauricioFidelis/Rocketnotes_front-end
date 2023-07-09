import axios from "axios";

export const api = axios.create({
    baseURL:"https://rocketnotes-api-t3b0.onrender.com"
});