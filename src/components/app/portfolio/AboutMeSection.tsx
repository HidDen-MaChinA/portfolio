import Image from "next/image";
import { CTA2 } from "./HeroSection";
import { SectionTitle } from "./SkillsSection/SkillsSection";

export default function AboutMeSection(){
    return (
      <div className="w-full">
        <div className="px-[100]">
          <SectionTitle className="text-jade-standard">About Me !</SectionTitle>
          <div className="flex gap-4 justify-center w-full">
            <div className="p-[60] bg-jade-standard rounded-xl">
              <div className="overflow-hidden shadow-lg w-[250] rounded-2xl h-[250]">
                <Image
                  alt="hero"
                  className=" rounded-2xl z-10"
                  style={{
                    transform: "matrix(2,0,0,1.9,2,-40)",
                    width: 250,
                    height: 350,
                  }}
                  width={500}
                  height={600}
                  src={"/images/hero-illustration.jpg"}
                />
              </div>
            </div>
            <div className="max-w-[600px] flex flex-col">
              <div className="w-full">
                  <h3 className="text-xl font-bold text-jade-standard mb-3">Who is <span className="italic text-2xl font-normal text-gold">Niaina Franco</span> ?</h3>
                  <div className="text-xl text-justify">
                    A sotware developper located at{" "}
                    <span className="text-jade-light">Madagascar, Antananarivo</span>{" "}
                    and i'm working mostly with{" "}
                    <span className="text-jade-light">Javascript</span> for any type of
                    applications that you would need to achieve your goals.
                  </div>
                  <div className="text-xl pt-4">
                    I'm open to any <span className="text-jade-light">freelance, bug fix, and feature addon</span>{" "}
                    jobs of your needs and all that from remote.
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}