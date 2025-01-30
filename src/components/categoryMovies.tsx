'use client'

import StarIcon from "@/assets/icons/starIcon";
import { useState, useEffect } from "react";

type Movie = {
    title: string
    vote_average: number
    id: number
    poster_path: string
    error: string
}
type Content = {
    section: string
    type: string
}

export const CategoryMovies = (props: Content) => {
    const { section, type } = props;
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const TMDB_BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
    const TMDB_IMAGE_URL = process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL;

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    `${TMDB_BASE_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`
                );

                if (!response.ok) {
                    throw new Error(`Failed to fetch ${section} movies`);
                }
                const data = await response.json();
                setMovies(data.results);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message || "An unknown error occurred.");
                } else {
                    setError("An unknown error occurred.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [API_KEY, TMDB_BASE_URL]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="max-w-7xl mx-20 flex flex-col items-center">
            <div className="flex justify-between w-full">
                <p className="#09090B text-2xl font-semibold">{section}</p>
                <div>see more</div>
            </div>
            <ul className="flex  gap-8  grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 mt-8 mb-[52px]">
                {movies.slice(0, 10).map((movie) => (
                    <div key={movie.id} className="w-fit h-[440px] bg-[#F4F4F5] rounded-lg cursor-pointer gap-1 dark:bg-[#27272A]">
                        <li className="flex flex-col items-start ">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                width={230}
                                height={240}
                                className="rounded-lg"
                            />
                            <div className="p-2">
                                <div className="flex gap-1 items-center">
                                    <StarIcon />
                                    <p className="text-sm font-medium text-[#09090B] dark:text-white">{Math.round(movie.vote_average * 10) / 10}<span className="text-[#71717A] text-xs font-normal">/10</span></p>
                                </div>
                                <p className="text-lg font-normal text-[#09090B] dark:text-white">{movie.title}</p>
                            </div>


                        </li>
                    </div>
                ))}
            </ul>
        </div>
    )

}