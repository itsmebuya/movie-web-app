'use client'

import { getCategoryMovies } from "@/utils/requests"
import { useEffect, useState } from "react"

type Content = {
    section: string
    type: string
}
type Movie = {
    title: string
    vote_average: number
    id: number
    roster_path: string
    error: string
}

export const CategorySection = (props: Content) => {
    const { section, type } = props;
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
            <ul className="flex  gap-8  grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 mt-8 mb-[52px]">
                { }
            </ul>
        </div>
    )
}