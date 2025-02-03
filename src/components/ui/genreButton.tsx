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
import { ChevronDown } from "lucide-react"


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

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className="flex py-2 px-4 border rounded-md gap-2 items-center justify-center ">
                    <ChevronDown/>
                    <p>Genre</p>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[400px] h-fit">
                    <DropdownMenuLabel>
                        <p className="text-[#09090B] font-semibold text-2xl leading-8 dark:text-white">Genres</p>
                        <p className="text-base text-[#09090B] font-normal leading-6 dark:text-white">See lists of movies by genre</p>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex flex-wrap ">
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