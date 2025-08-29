import { ReactNode } from "react";
import { MainSkills } from "./MainSkills";

export default function SkillsSection() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1150px]">
        <div className="py-4 w-full relative sm:flex-col justify-center flex lg:flex-row gap-5 px-[80]">
          <div className="max-w-[500px] py-8">
            <h2 className="text-xl mb-3 font-bold text-jade-standard">
              My main tools
            </h2>
            <p className="text-lg text-justify">
              I code to any <span>Platform</span> using javascript's wide
              developement ecosystem to create "THE" solution of your need
              whether it's a <span>Web app, Desktop app or Mobile app</span>.
            </p>
          </div>
          <div className="w-[550px]">
            <div className="pt-5 w-full">
              <MainSkills
                languages={[
                  {
                    name: "React js",
                    language: "JS",
                    level: 90,
                    projects: [{
                      name: "mindi's",
                      url: ""
                    },{
                      name: "Darkthunder UI",
                      url: ""
                    }]
                  },
                  {
                    name: "Next js",
                    language: "JS",
                    level: 75,
                  },
                  {
                    name: "Laravel",
                    language: "PHP",
                    level: 90,
                  },
                  {
                    name: "React Native",
                    language: "JS",
                    level: 90,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SectionTitle(props: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-jade-standard text-center py-[50] px-2 w-full text-3xl ${props.className}`}
    >
      {props.children}
    </h2>
  );
}
