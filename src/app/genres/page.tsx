'use client'

import { FilteredMovie } from "@/components/filteredMovie";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SearchGenre } from "@/components/searchGenre";
import { useParams, useRouter, useSearchParams } from "next/navigation"

export default function Genre() {
    
    // const params = useParams();
    // console.log(params);

    // const router = useRouter()
    // const searchParams = useSearchParams()
    // const rawGenres = searchParams.get('genres')
    // const genres = rawGenres ? rawGenres.split(',') : []

    // const newGenres = () => {
    //     const newParams = new URLSearchParams(searchParams);
    //     newParams.set('genres', genres.join(','))

    //     router.push(`?${newParams.toString()}`)
    // }

    return (
        <div>
            <div className="flex justify-center">
                <Header color={"#4338CA"} />
            </div>
            
            <div className="flex flex-col gap-8 max-w-7xl w-full justify-center m-auto">
                <p className="text-3xl font-semibold leading-9">Search Filter</p>
                <div className="flex justify-between max-w-7xl">
                    <SearchGenre />
                    <div className="border h-screen w-[1px]"></div>
                    <FilteredMovie/>
                </div>
            </div>


            <Footer color={"#FAFAFA"} />
        </div>
    )
}