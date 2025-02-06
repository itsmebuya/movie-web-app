'use client'

import { getCategoryMovies, getSectionTitle } from "@/utils/requests"
import { useEffect, useState } from "react"
import StarIcon from "@/assets/icons/starIcon"
import { Content, Movie } from "@/type"


export const CategorySection = (props: Content) => {
    const { type } = props;
    const sectionTitle = getSectionTitle(type);
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const TMDB_BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

    useEffect(() => {
        const fetchMovies = async (page = 1) => {
            setLoading(true);

            try {
                const fetchSection = await getCategoryMovies(type, page);
                console.log(fetchSection);

                setMovies(fetchSection.results);

            } catch (error) {
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
    }, [API_KEY, TMDB_BASE_URL])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <div className="max-w-7xl">
            <p className="#09090B text-3xl font-semibold">{sectionTitle}</p>
            <ul className="flex  gap-8  grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 mt-8 mb-[52px]">
                {
                    movies.map((movie) => (
                        <div key={movie.id} className="w-fit h-[440px] bg-[#F4F4F5] rounded-lg cursor-pointer gap-1 dark:bg-[#27272A]">
                            <li className="flex flex-col items-start ">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    width={230}
                                    height={240}
                                    className="rounded-lg object-cover"
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
                    ))
                }

            </ul>
        </div>
    )
}