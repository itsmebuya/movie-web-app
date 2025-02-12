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
import { ChevronDown, ChevronRight } from "lucide-react"
import { Genres } from "@/type"
import { getGenre } from "@/utils/requests"
import Link from "next/link"


export const GenreButton = () => {
    const [genre, setGenre] = useState<Genres[]>([])
    const [error, setError] = useState("");

    // const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    // const TMDB_BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

    useEffect(() => {
        const fetchGenres = async (page = 1) => {
            try {
                const fetchGenre = await getGenre(page);
                setGenre(fetchGenre.genres);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message || "An unknown error occurred.");
                } else {
                    setError("An unknown error occurred.");
                }
            }
        }
        fetchGenres();
    }, [])

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className="flex py-2 px-4 border rounded-md gap-2 items-center justify-center ">
                    <ChevronDown />
                    <p>Genre</p>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[400px] h-fit">
                    <DropdownMenuLabel>
                        <p className="text-[#09090B] font-semibold text-2xl leading-8 dark:text-white">Genres</p>
                        <p className="text-base text-[#09090B] font-normal leading-6 dark:text-white">See lists of movies by genre</p>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <div className=" flex flex-wrap ">
                        {genre.map((el) => (
                            <DropdownMenuItem key={el.id} className="w-fit">
                                <Link href={`/genres/`} className="w-fit">
                                    <Button className="py-0.5 px-2.5" >
                                        {el.name}
                                        <ChevronRight />
                                    </Button>
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

    )
}