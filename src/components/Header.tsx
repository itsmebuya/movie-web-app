type HeaderProps = {
    color: string
}

import FilmSvg from "@/assets/svg/filmSvg"
import Search from "./ui/Search"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import { ModeToggle } from "./ui/themeButton"
import { GenreButton } from "./ui/genreButton"

export const Header = (props: HeaderProps) => {
    const { color } = props

    return (
        <div className="flex justify-between items-center px-4 h-[59px] shrink-0 max-w-7xl w-full mb-2">
            <div className="flex gap-2 items-center cursor-pointer">
                <FilmSvg color={color} />
                <p className={`text-[#4338CA] italic font-bold text-base`}>Movie Z</p>
            </div>
            <div className="flex gap-3">
                <GenreButton/>
                <Search />
            </div>
            <ModeToggle />

        </div>
    )
}