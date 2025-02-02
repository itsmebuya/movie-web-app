'use client'

import { useState, useEffect } from "react"

export const NowPlaying = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const TMDB_BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
    const TMDB_IMAGE_URL = process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL;

    useEffect(() => {
        
    })

    if(loading) {
        return <div>Loading...</div>
    }
    if(error) {
        return <div>Error: {error}</div>
    }

    return(
        <div>
            
        </div>
    )

}