import Image from "next/image"
import { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, HtmlHTMLAttributes } from "react"

export default function HeroSection(){
    return (
        <div id="hero" className="w-full flex relative justify-center items-center h-[600px] bg-gray-500">
            <div style={{
                backgroundImage: "url(/images/about-me-backdrop.png)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPositionX: "center",
                backgroundSize: "1900px 1100px"
            }} className="absolute flex overflow-hidden justify-center bg-blue-200 w-full h-full z-10">
                <div style={{backdropFilter: "blur(7px)"}} className="absolute z-20 w-full h-full bg-[#203b37b0]"></div>
            </div>
            <div className="w-full z-20">
                <h1 className="text-3xl w-full text-white text-center">Bonjour, Hello, Manaona, je suis Niaina Franco</h1>
                <h2 className="text-3xl w-full font-bold text-gold text-center">Software Developeur</h2>
                <div className="w-full mt-6 gap-3 flex justify-center">
                    <CTA2 href="#projects">Projects</CTA2>
                    <CTA1 href="#contacts">Contact</CTA1>
                </div>
            </div>
        </div>
    )
}

export function CTA1(props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>){
    return(
        <a {...props} className="block bg-gold text-jade-black py-2 px-7 shadow-lg rounded-full" />
    )
}

export function CTA2(props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>){
    return(
        <a {...props} className="block bg-jade-standard text-white shadow-lg py-2 px-7 rounded-full" />
    )
}