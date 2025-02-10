'use client'

import { useState, useEffect } from "react"
import { getCategoryMovies } from "@/utils/requests";
import StarIcon from "@/assets/icons/starIcon";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { Content, Movie } from "@/type";

export const NowPlaying = (props: Content) => {
    const { section, type } = props;
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchMovies = async (page = 1) => {
            setLoading(true)
            try {
                const getMovie = await getCategoryMovies(type, page);
                setMovies(getMovie.results)
                // console.log(getMovie);
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
        }

        fetchMovies();
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div className="w-full h-[600px] mb-5">
            <Carousel className="w-screen relative">
                <CarouselContent>
                    {
                        movies.map((movie) => (
                            <CarouselItem key={movie.id} className="relative ">
                                <img
                                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                    alt={movie.title}
                                    className="w-[100%] h-[600px] object-cover"
                                />
                                <div className="flex flex-col absolute left-[200px] top-[150px] gap-1 w-[300px]">
                                    <p className="text-base leading-6 text-white">Now Playing:</p>
                                    <p className="text-4xl leading-10 font-bold text-white">{movie.title}</p>
                                    <div className="flex gap-1 items-center">
                                        <StarIcon />
                                        <p className="text-sm font-medium text-white">{Math.round(movie.vote_average * 10) / 10}<span className="text-[#71717A] text-xs font-normal">/10</span></p>
                                    </div>
                                    <p className="text-xs mb-4 text-white">{movie.overview}</p>
                                    <Button className="w-[150px]">
                                        <Play />
                                        Watch Trailer
                                    </Button>
                                </div>

                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious className="left-[50px] absolute" />
                <CarouselNext className="right-[50px] absolute" />
            </Carousel>
        </div>
    )

}