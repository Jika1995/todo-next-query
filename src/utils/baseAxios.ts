import axios from "axios";
import { API_URL } from "./constants";

export const baseAxios = axios.create({
    baseURL: API_URL
});

// создали базовый путь аксиос, чтобы постоянно не вызывать аксиос