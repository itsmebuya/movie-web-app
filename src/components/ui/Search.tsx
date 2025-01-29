import SearchIcon from "@/assets/icons/SearchIcon"

type SearchProps = {

}

const Search = (props: SearchProps) => {
    const {} = props

    return (
        <div className="flex items-center gap-2.5 border border-gray-200 rounded-lg px-3 w-[379px]">
            <SearchIcon/>
            <input type="text" placeholder="Search.." className="py-2 w-full outline-none" />
        </div>
    )
}
export default Search