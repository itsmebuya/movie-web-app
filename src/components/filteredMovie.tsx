'use client'

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

    const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const TMDB_BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

    useEffect(() => {
        const fetchFiltered = async (page = 1) => {
            setLoading(true);

            try {
                const fetchFilteredMovie = await getFilteredMovies(page, selectedGenreIds);
                console.log(fetchFilteredMovie);
                setTotal(fetchFilteredMovie.total_results)

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
            <ul>
                {movies.map((movie) => (
                    <Link key={movie.id} href={`/detail/${movie.id}`}>
                        <div>
                            {movie.title}
                        </div>
                    </Link>
                ))}
            </ul>
        </div>
    )
}