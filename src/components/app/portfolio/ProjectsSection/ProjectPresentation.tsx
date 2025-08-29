import Image from "next/image";
import { ReactNode } from "react";
import { keyframes } from "styled-components";
import { ClientSideAutoSlider } from "./ClientSideAutoSlider";

export type ProjectPresentationPropsType = {
  name: string;
  sub?: string;
  description?: string;
  technos: string[];
  url?: string;
};

export function ProjectPresentation(props: ProjectPresentationPropsType) {
  const { name, technos, description, sub } = props;

  return (
    <div className="w-[450px] flex flex-col gap-6 pt-8 p-4 bg-jade-standard rounded-2xl text-white">
      <div>
        <h1 className="text-2xl font-bold text-gold">{name}</h1>
        <h2 className="text-lg text-gray-200">{sub}</h2>
        <p className="pt-2 text-md text-gray-200 text-justify">{description}</p>
      </div>
      <div className="p-3 bg-jade-light rounded-3xl">
        <div className="w-full overflow-hidden rounded-xl shadow-lg flex justify-center h-[200px]">
          <Image
            style={{
              transform: "matrix(1.2,0,0,1.2,1.2,1)",
            }}
            src={"/images/mindi-s-project.png"}
            width={400}
            height={200}
            alt="mindi-s-project"
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-[250px] relative">
          <AutoSlider languages={["Javascript", "Laravel", "Electron js"]} />
        </div>
        <div className="flex-1 text-black flex">
          <div className="w-full flex justify-center items-center">
            <a
              className="rounded-xl py-2 px-4 text-jade-standard shadow-lg shadow-[#5a8f7640] bg-gold"
              href="https:github.com/hidden-machina"
            >
              Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function AutoSlider(props: { languages: string[] }) {
  const { languages } = props;
  return (
    <div className="w-full p-3 overflow-hidden">
      <ClientSideAutoSlider itemNumber={languages.length}>
        {languages.map((language, index) => (
          <span
            className="min-w-[100px] whitespace-nowrap text-ellipsis overflow-hidden p-2 py-1 border rounded-full text-center"
            key={"auto-slider-" + language + "-" + index}
          >
            {language}
          </span>
        ))}
      </ClientSideAutoSlider>
    </div>
  );
}

