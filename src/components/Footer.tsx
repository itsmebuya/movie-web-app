import MessageIcon from "@/assets/icons/messageIcon"
import PhoneIcon from "@/assets/icons/phoneIcon"
import FilmSvg from "@/assets/svg/filmSvg"
import { Color } from "@/type"
import Link from "next/link"

export const Footer = (props: Color) => {
    const { color } = props

    return <div className="flex justify-center w-full py-10 px-5 bg-[#4338CA] ">
        <div className="flex justify-between w-full gap-32 mx-[10%]">
            <div className="flex flex-col gap-3">
                <Link href={"/"}>
                    <div className="flex gap-2 items-center cursor-pointer">
                        <FilmSvg color={color} />
                        <p className={`text-[${color}] text-base italic font-bold`}>Movie Z</p>
                    </div>
                </Link>

                <div className="text-[#FAFAFA]">© 2024 Movie Z. All Rights Reserved.</div>
            </div>
            <div className="flex gap-24 ">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        <p className="text-[#FAFAFA] text-sm font-normal">Contact Information</p>
                        <div className="flex gap-3">
                            <MessageIcon />
                            <div className="flex flex-col">
                                <p className="text-sm font-medium text-[#FAFAFA]">Email:</p>
                                <p className="text-[#FAFAFA] text-sm font-normal">support@movieZ.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <PhoneIcon />
                        <div className="flex flex-col">
                            <p className="text-sm font-medium text-[#FAFAFA]">Phone:</p>
                            <p className="text-[#FAFAFA] text-sm font-normal">+976 (11) 123-4567</p>
                        </div>
                    </div>
                </div>
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
    </div>
}