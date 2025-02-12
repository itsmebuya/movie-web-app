'use client'

import { useEffect, useState } from "react"
import { Genres } from "@/type"
import { Button } from "./ui/button"
import { getGenre } from "@/utils/requests"
import { ChevronRight } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const TMDB_BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

export const SearchGenre = () => {
    const [genre, setGenre] = useState<Genres[]>([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();
    const genres = searchParams.get("genrelds")?.split(',') || [];


    const handleGenreClick = (id: string) => {
        const params = new URLSearchParams(searchParams);
        genres.push(id)
        params.set('genrelds', genres.join(','))
        router.push(`?${params.toString()}`);
    }

    useEffect(() => {
        const fetchGenres = async (page = 1) => {
            setLoading(true);
            try {
                const fetchGenre = await getGenre(page);
                setGenre(fetchGenre.genres);
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
        fetchGenres();
    }, [API_KEY, TMDB_BASE_URL]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="w-[30%] flex flex-col gap-5">
            <div className="flex flex-col">
                <p className="text-2xl font-semibold leading-8">Genres</p>
                <p className="text-base leading-6 font-normal">See lists of movies by genre</p>
            </div>
            <div>
                {genre?.map((el: Genres) => (
                    <Button key={el.id} className="m-1 py-0.5 px-2.5" onClick={() => handleGenreClick(el.id)}>
                        {el.name}
                        <ChevronRight />
                    </Button>
                ))}
            </div>

        </div>

    )
}