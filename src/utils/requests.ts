import axios from "axios";

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

const instance = axios.create({baseURL: BASE_URL});

export const getCategoryMovies = async (page?: number) => {
    const {data} = await instance.get(`mo`)
}