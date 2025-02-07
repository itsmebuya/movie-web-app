'use client'

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useParams, useRouter, useSearchParams } from "next/navigation"

export default function Genre() {
    // const params = useParams();
    // console.log(params);

    const router = useRouter()
    const searchParams = useSearchParams()
    const rawGenres = searchParams.get('genres')
    const genres = rawGenres ? rawGenres.split(',') : []

    const newGenres = () => {
        const newParams = new URLSearchParams(searchParams);
        // if (genres.includes('12'))
        //     genres.push('12')
        newParams.set('genres', genres.join(','))

        router.push(`?${newParams.toString()}`)
    }

    console.log(genres)
    return (
        <div>
            <div className="flex justify-center">
                <Header color={"#4338CA"} />
            </div>
            <div>

                <button onClick={newGenres}>click me</button>
            </div>
            <Footer color={"#FAFAFA"} />
        </div>
    )
}