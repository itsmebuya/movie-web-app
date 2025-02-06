"use client"

import { getDetailMovie} from "@/utils/requests"
import { useEffect, useState } from "react"
import { Movie, MovieId } from "@/type"
import { getIsAdult, getMovieDuration, getStringToDate } from "@/utils/getData"

export const DetailMovie = (props: MovieId) => {
    const { movieId } = props;
    const [movie, setMovie] = useState<Movie>({} as Movie);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const TMDB_BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

    useEffect(() => {
        const fetchMovie = async (page = 1) => {
            setLoading(true);
            try {
                const fetchDetail = await getDetailMovie(movieId, page);
                console.log(fetchDetail);
                setMovie(fetchDetail);

            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message || "An unknown error occurred.");
                } else {
                    setError("An unknown error occurred.");
                }
            }
            finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [API_KEY, TMDB_BASE_URL])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div className="max-w-7xl">
            <div className="flex justify-between items-center w-full mb-6 mt-[52px]">
                <div className="flex flex-col">
                    <p className="text-4xl font-bold leading-10">{movie.title}</p>
                    <p className="text-lg leading-7 font-normal">{getStringToDate(movie.release_date)} · {getIsAdult(movie.adult)} · {getMovieDuration(movie.runtime)}</p>
                </div>
                <div>
                    <p>Rating</p>
                    <div></div>
                </div>
            </div>
            <div className="flex gap-6">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="w-[288px] object-cover"/>
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} className="w-[760px] object-cover" />
            </div>
        </div>
    )
}