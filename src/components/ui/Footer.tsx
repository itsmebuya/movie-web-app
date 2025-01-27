import FilmSvg from "@/assets/svg/filmSvg"

export const Footer = () => {
    return <div className="flex justify-between w-full py-10 bg-[#4338CA]">
        <div className="flex flex-col gap-3 mr-30">
            <div className="flex gap-2 items-center">
                <FilmSvg/>
                <p className="text-[#FAFAFA] text-base italic font-bold">Movie Z</p>
            </div>
            <div className="text-[#FAFAFA]">© 2024 Movie Z. All Rights Reserved.</div>
        </div>
        <div className="flex gap-24 ">
            <div></div>
            <div className="flex flex-col gap-3 text-[#FAFAFA]">
                <p className="font-normal text-sm">Follow us</p>
                <div className="flex gap-3">
                    <p className="text-sm font-medium">Facebook</p>
                    <p className="text-sm font-medium">Instagram</p>
                    <p className="text-sm font-medium">Twitter</p>
                    <p className="text-sm font-medium">Youtube</p>
                </div>
            </div>
        </div>
    </div>
}