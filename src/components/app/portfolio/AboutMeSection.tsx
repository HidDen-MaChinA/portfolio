import Image from "next/image";
import { SectionTitle } from "./SkillsSection/SkillsSection";

export default function AboutMeSection() {
  return (
    <div id="about-me" className="w-full">
      <div className="px-[100]">
        <SectionTitle className="text-jade-standard">A propos de moi !</SectionTitle>
        <div className="flex gap-9 justify-center w-full">
          <div className="relative rounded-2xl">
            <div className="w-[300] h-[300]">
              <div className="w-full absolute h-full rounded-2xl shadow-lg bg-jade-light mt-[15px] ml-[20px]"></div>
              <div className="overflow-hidden shadow-lg w-[300] rounded-2xl h-[300]">
                <Image
                  alt="hero"
                  className=" rounded-2xl z-10"
                  style={{
                    transform: "matrix(2,0,0,1.9,20,-30)",
                    width: 250,
                    height: 350,
                  }}
                  width={500}
                  height={600}
                  src={"/images/hero-illustration.jpg"}
                />
              </div>
            </div>
          </div>
          <div className="max-w-[600px] flex flex-col">
            <div className="w-full">
              <h3 className="text-xl font-bold text-jade-standard mb-3">
                Qui est {" "}
                <span className="italic text-2xl font-normal text-gold">
                  Niaina Franco
                </span>{" "}
                ?
              </h3>
              <div className="text-xl text-justify">
                Je suis un developper fullstack localiser à{" "}
                <span className="text-jade-light">
                  Madagascar, Antananarivo
                </span>{" "}
                et je travaille surtout avec{" "}
                <span className="text-jade-light">Javascript</span> 
                comme language de programmation.
              </div>
              <div className="text-xl pt-4">
                Je suis ouvert a tout type de travail{" "}
                <span className="text-jade-light">
                  freelance (bug fix, ajout de fonctionnaliter)  et contrat a long term.
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
