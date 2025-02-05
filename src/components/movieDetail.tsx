"use client"

import { getDetailMovie } from "@/utils/requests"
import { useEffect, useState } from "react"

type Content = {
    movieId: string
}
type Movie = {
    title: string
    vote_average: number

}

export const DetailMovie = (props: Content) => {
    const { movieId } = props;
    const [movie, setMovie] = useState<Movie[]>([]);
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
        <div>detail</div>
    )
}