'use client'

import { useEffect, useState } from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "./button"


type Genres = {
    id: number
    name: string
}

export const GenreButton = () => {
    const [genre, setGenre] = useState<Genres[]>([])

    const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const TMDB_BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
    const TMDB_IMAGE_URL = process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL;

    const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=db430a8098715f8fab36009f57dff9fb`

    useEffect(() => {
        const fetchGenre = async () => {
            try {
                const response = await fetch(genreUrl);

                if (!response.ok) {
                    throw new Error("Failed to fetch genre");
                }
                const data = await response.json();
                setGenre(data.genres)

            } catch (error) {

            }
        }
        fetchGenre();
    }, [])

    console.log(genre)

    return (
        <div>

            <DropdownMenu>
                <DropdownMenuTrigger>Genre</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>
                        <h1>Genres</h1>
                        <p>See lists of movies by genre</p>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        {genre.map((el) => (
                            <div key={el.id} className="">
                                <Button>
                                {el.name}
                                </Button>
                            
                            
                            </div>
                        ))}
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

    )
}