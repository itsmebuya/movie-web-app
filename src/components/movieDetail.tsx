"use client"

import { getDetailMovie, getMovieActor } from "@/utils/requests"
import { useEffect, useState } from "react"
import { Movie, MovieId, Genres } from "@/type"
import { getIsAdult, getMovieDuration, getStringToDate } from "@/utils/getData"
import StarIcon from "@/assets/icons/starIcon"

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
                const movieActor = await getMovieActor(movieId);

                console.log(movieActor);
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
                <div className="flex flex-col gap-1 justify-start items-center">
                    <p className="font-medium text-xs">Rating</p>
                    <div className="flex gap-1 items-center justify-start">
                        <StarIcon />
                        <div className="flex flex-col">
                            <p className="text-sm font-medium text-[#09090B] dark:text-white">{Math.round(movie.vote_average * 10) / 10}<span className="text-[#71717A] text-xs font-normal">/10</span></p>
                            <p className="text-[#71717A] text-xs">{movie.vote_count}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-8 mb-[30px]">
                <div className="w-30%">
                    
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="w-full object-cover rounded" />
                </div>
                <div className="w-70%">

                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} className="w-full h-full object-cover rounded" />
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-start gap-3">
                    {movie.genres.map((genre: Genres) => (
                        <div key={genre.id} className="py-0.5 px-2.5 rounded-full border border-[#E4E4E7]">{genre.name}</div>
                    ))}
                </div>
                <p className="text-base leading-6">{movie.overview}</p>
            </div>
        </div>
    )
}