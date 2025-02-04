'use client'

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NowPlaying } from "@/components/NowPlaying";
import { CategoryMovies } from "@/components/categoryMovies";

export default function Home() {

  return (
    <div>
      <div className="flex justify-center">
        <Header color={"#4338CA"} />
      </div>
      <div className="w-full ">
        <NowPlaying section="Now Playing" type="now_playing" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <CategoryMovies section="Upcoming" type="upcoming" />
        <CategoryMovies section="Popular" type="popular" />
        <CategoryMovies section="Top Rated" type="top_rated" />
      </div>

      <Footer color={"#FAFAFA"} />
    </div>
  );
}
