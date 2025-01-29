'use client'

import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { CategoryMovies } from "@/components/ui/categoryMovies";

export default function Home() {

  return (
    <div>
      <div className="flex justify-center">
        <Header color={"#4338CA"} />
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
