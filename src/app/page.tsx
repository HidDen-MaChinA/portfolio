import AboutMeSection from "@/components/app/portfolio/AboutMeSection";
import AchievementsSection from "@/components/app/portfolio/AchievementsSection/AchievementsSection";
import Footer from "@/components/app/portfolio/Footer/Footer";
import HeroSection from "@/components/app/portfolio/HeroSection/HeroSection";
import TopBar from "@/components/app/portfolio/Navigation/TopBar";
import ProjectsSection from "@/components/app/portfolio/ProjectsSection/ProjectsSection";
import SkillsSection from "@/components/app/portfolio/SkillsSection/SkillsSection";

export default function Portfolio(){
    return (
        <div>
            <TopBar />
            <HeroSection />
            <div className="flex flex-col gap-[90px]">
                <AboutMeSection />
                <SkillsSection />
                <ProjectsSection />
                <AchievementsSection />
            </div>
            <Footer />
        </div>
    )
}