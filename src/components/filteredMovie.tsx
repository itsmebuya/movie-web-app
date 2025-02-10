'use client'

import { Movie } from "@/type";
import { getFilteredMovies } from "@/utils/requests";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const FilteredMovie = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const count = 1
    const searchParams = useSearchParams()

   const selectedGenreIds =  searchParams.get("genreslds") || [""]
   console.log({selectedGenreIds});
   
    const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const TMDB_BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

    useEffect(() => {
        const fetchFiltered = async (page = 1) => {
            setLoading(true);

            try {
                const fetchFilteredMovie = await getFilteredMovies(page, selectedGenreIds);
                console.log(fetchFilteredMovie);
                

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
    }, [API_KEY, TMDB_BASE_URL])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <p>{count} titles</p>
            <ul>
                {movies.map((movie) => (
                    <div key={movie.id}>

                    </div>
                ))}
            </ul>
        </div>
    )
}