'use client'

import { Movie } from "@/type";
import { useEffect, useState } from "react";

export const FilteredMovie = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const TMDB_BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

    useEffect(() => {
        const fetchFiltered = async () => {
            setLoading(true);

            try {
                // const fetchFilteredMovie = await 

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

        </div>
    )
}