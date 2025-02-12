import SearchIcon from "@/assets/icons/SearchIcon"
import { Movie } from "@/type"
import { getSearchMovies } from "@/utils/requests"
import { useEffect, useState } from "react"

const Search = () => {
    const [searchValue, setSearchValue] = useState<string>()
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
            <div className="absolute top-[50px] left-1/2 -translate-x-1/2 bg-red-300">
                {movies.length > 0 && (
                    <div className="">
                        {movies.map((el) => (
                            <div key={el.id}>
                                {el.title}
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>


    )
}
export default Search