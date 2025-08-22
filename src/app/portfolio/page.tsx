import AboutMeSection from "@/components/app/portfolio/AboutMeSection";
import HeroSection from "@/components/app/portfolio/HeroSection";
import SkillsSection from "@/components/app/portfolio/SkillsSection/SkillsSection";
import Image from "next/image";

export default function Portfolio(){
    return (
        <div>
            <HeroSection />
            <div className="flex flex-col gap-[90px]">
                <AboutMeSection />
                <SkillsSection />
            </div>
        </div>
    )
}