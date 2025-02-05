"use client"

import { useParams } from "next/navigation"
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DetailMovie } from "@/components/movieDetail";


export default function Category() {
    const params = useParams();
    console.log(params);

    return (
        <div>
            <div className="flex justify-center">
                <Header color={"#4338CA"} />
            </div>
            <div className="flex justify-center items-center">
                <DetailMovie movieId={params.movieId as string} />
            </div>
            <Footer color={"#FAFAFA"} />
        </div>
    )
}