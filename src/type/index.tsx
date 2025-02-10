export type Movie = {
    title: string
    vote_average: number
    vote_count: number
    id: number
    poster_path: string
    backdrop_path: string
    genres: []
    runtime: number
    release_date: string
    error: string
    overview: string
    adult: boolean
}

export type Content = {
    type: string
    section: string
}

export type MovieId = {
    movieId: string
}
export type Color = {
    color: string
}

export type Genres = {
    id: number
    name: string
}
export type SearchProps = {
    title: string
}