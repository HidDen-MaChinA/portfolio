import Image from "next/image"
import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, HtmlHTMLAttributes } from "react"

export default function HeroSection(){
    return (
        <div className="w-full flex relative justify-center items-center h-[550px] bg-gray-500">
            <div className="absolute flex overflow-hidden justify-center bg-blue-200 w-full h-full z-10">
                <div className="absolute z-20 w-full h-full bg-[#00000090]"></div>
                <Image alt="hero" className="z-10" style={{
                    transform: "scale(4,3)",
                    width: 350,
                    height: 600
                }} width={900} height={1200} src={"/images/hero-illustration.jpg"} />
            </div>
            <div className="w-full z-20">
                <h2 className="text-xl w-full text-white text-center">Bonjour, Hello, Manaona, je suis Niaina Franco</h2>
                <h1 className="text-3xl w-full text-white text-center">Developeur</h1>
                <div className="w-full mt-3 gap-3 flex justify-center">
                    <CTA1>Click Me</CTA1>
                    <CTA2>Click Me</CTA2>
                </div>
            </div>
        </div>
    )
}

export function CTA1(props: DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>){
    return(
        <button {...props} className="bg-white py-2 px-7 rounded-full" />
    )
}

export function CTA2(props: DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>){
    return(
        <button {...props} className="bg-black text-white py-2 px-7 rounded-full" />
    )
}