'use client'

import { useState, useEffect } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { useParams } from "next/navigation"
import { CategorySection } from "@/components/categorySection"


export default function Category() {
    const params = useParams()

    return (
        <div>
            <div className="flex justify-center">
                <Header color={"#4338CA"} />
            </div>
            <div className="flex flex-col justify-center items-center">
                <CategorySection type={params.category as string}/>
            </div>
            <Footer color={"#FAFAFA"} />
        </div>
    )
}