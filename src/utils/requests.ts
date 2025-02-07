import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const IMAGE_URL = process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL;

const instance = axios.create({ baseURL: BASE_URL });

export const getCategoryMovies = async (type: string, page: number) => {
    const { data } = await instance.get(`movie/${type}?language=en-US&page=${page || 1}&api_key=${API_KEY}`);
    return data;
};

export const getSectionTitle = (str: string) => {
    return str.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

export const getDetailMovie = async (movieId: string, page: number) => {
    const { data } = await instance.get(`/movie/${movieId}?language=en-US&page=${page || 1}&api_key=${API_KEY}`);
    return data
}

export const getMovieActor = async (movieId: string) => {
    const {data} = await instance.get(`movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`);
    return data
}