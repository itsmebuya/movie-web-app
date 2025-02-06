import FilmSvg from "@/assets/svg/filmSvg"
import Search from "./ui/Search"
import { ModeToggle } from "./ui/themeButton"
import { GenreButton } from "./ui/genreButton"
import Link from "next/link"
import { Color } from "@/type"

export const Header = (props: Color) => {
    const { color } = props

    return (
        <div className="flex justify-between items-center px-4 h-[59px] shrink-0 max-w-7xl w-full mb-2">
            <Link href={"/"}>
                <div className="flex gap-2 items-center">
                    <FilmSvg color={color} />
                    <p className={`text-[#4338CA] italic font-bold text-base`}>Movie Z</p>
                </div>
            </Link>
            <div className="flex gap-3">
                <GenreButton />
                <Search />
            </div>
            <ModeToggle />
        </div>
    )
}