import AboutMeSection from "@/components/app/portfolio/AboutMeSection";
import AchievementsSection from "@/components/app/portfolio/AchievementsSection/AchievementsSection";
import HeroSection from "@/components/app/portfolio/HeroSection";
import ProjectsSection from "@/components/app/portfolio/ProjectsSection/ProjectsSection";
import SkillsSection from "@/components/app/portfolio/SkillsSection/SkillsSection";
import Image from "next/image";

export default function Portfolio(){
    return (
        <div>
            <HeroSection />
            <div className="flex flex-col gap-[90px]">
                <AboutMeSection />
                <SkillsSection />
                <ProjectsSection />
                <AchievementsSection />
            </div>
        </div>
    )
}