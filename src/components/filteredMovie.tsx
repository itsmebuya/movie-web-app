'use client'

import StarIcon from "@/assets/icons/starIcon";
import { Movie } from "@/type";
import { getFilteredMovies } from "@/utils/requests";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const FilteredMovie = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [total, setTotal] = useState(0)
    const searchParams = useSearchParams();
    const selectedGenreIds = searchParams.get("genrelds")?.split(',') || [];
    console.log(selectedGenreIds);

    // const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    // const TMDB_BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

    useEffect(() => {
        const fetchFiltered = async (page = 1) => {
            setLoading(true);

            try {
                const fetchFilteredMovie = await getFilteredMovies(page, selectedGenreIds);
                console.log(fetchFilteredMovie);
                setTotal(fetchFilteredMovie.total_results)
                setMovies(fetchFilteredMovie.results)

            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message || "An unknown error occurred.");
                } else {
                    setError("An unknown error occurred.");
                }
            } finally {
                setLoading(false);
            }
        }
        fetchFiltered();
    }, [searchParams])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <p>{total} titles</p>
            <ul className="flex  gap-8  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-8 mb-[52px]">
                {movies.map((movie) => (
                    <Link key={movie.id} href={`/detail/${movie.id}`}>
                        <div className="w-[165px] h-[350px] bg-[#F4F4F5] rounded-lg cursor-pointer gap-1 dark:bg-[#27272A]">
                            <li className="flex flex-col items-start ">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    width={165}
                                    height={244}
                                    className="rounded-lg object-cover"
                                />
                                <div className="p-2">
                                    <div className="flex gap-1 items-center">
                                        <StarIcon />
                                        <p className="text-sm font-medium text-[#09090B] dark:text-white">{Math.round(movie.vote_average * 10) / 10}<span className="text-[#71717A] text-xs font-normal">/10</span></p>
                                    </div>
                                    <p className="text-lg font-normal text-[#09090B] dark:text-white w-full text-ellipsis">{movie.title}</p>
                                </div>
                            </li>
                        </div>
                    </Link>

                ))}
            </ul>
        </div>
    )
}