import SearchIcon from "@/assets/icons/SearchIcon"
import StarIcon from "@/assets/icons/starIcon"
import { Movie } from "@/type"
import { getMovieYear } from "@/utils/getData"
import { getSearchMovies } from "@/utils/requests"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const Search = () => {
    const [searchValue, setSearchValue] = useState<string>("")
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        if (!searchValue) return setMovies([]);

        const fetchMovies = async () => {

            const searchedMovies = await getSearchMovies(searchValue);
            setMovies(searchedMovies.results)
        }
        fetchMovies()
    }, [searchValue]);

    return (
        <div className="relative">
            <div className="flex items-center gap-2.5 border border-gray-200 rounded-lg px-3 w-[379px]">
                <SearchIcon />
                <input type="text" placeholder="Search.." className="py-2 w-full outline-none" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            </div>
            <div className="absolute top-[50px] left-1/3 -translate-x-1/2 z-50">
                {movies.length > 0 && (
                    <div className="w-[600px] rounded border bg-white p-3">
                        {movies.slice(0, 5).map((el) => (
                            <Link key={el.id} href={`/detail/${el.id}`} className="w-full">
                                <div className="flex gap-4 p-2">
                                    <div className="h-[100px] w-[67px]">
                                        <img src={`https://image.tmdb.org/t/p/original${el.poster_path}`} alt={el.title} className="w-full h-full rounded" />
                                    </div>
                                    <div className="flex flex-col gap-3 w-full">
                                        <div className="flex flex-col justify-start">
                                            <p>{el.title}</p>
                                            <div className="flex gap-1 items-center">
                                                <StarIcon />
                                                <p className="text-sm font-medium text-[#09090B] dark:text-white">{Math.round(el.vote_average * 10) / 10}<span className="text-[#71717A] text-xs font-normal">/10</span></p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <p>{getMovieYear(el.release_date)}</p>
                                            <Link href={`/detail/${el.id}`} className="hover:underline">
                                                <div className="flex gap-2 py-2 px-4 cursor-pointer items-center justify-center">
                                                    <p className="font-medium text-sm">See more</p>
                                                    <ArrowRight />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        ))}
                    </div>
                )}
            </div>

        </div>


    )
}
export default Search