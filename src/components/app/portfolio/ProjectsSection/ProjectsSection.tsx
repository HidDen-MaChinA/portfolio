import { SectionTitle } from "../SkillsSection/SkillsSection";
import { ProjectPresentation } from "./ProjectPresentation";

export default function ProjectsSection(){
    return (
      <div id="projects" className="w-full flex flex-col items-center">
        <SectionTitle>My latest works</SectionTitle>
        <div className="max-w-[1100px]">
          <div className="w-full flex flex-wrap gap-[40]">
            <ProjectPresentation
              name="Darkthunder UI"
              technos={[]}
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique eos officia eum inventore fuga placeat, aspernatur, iusto natus iure vitae, maxime tempore. Natus non enim inventore incidunt hic! Ab, porro?"
              sub="Messaging App"
            />
            <ProjectPresentation
              name="Darkthunder UI"
              technos={[]}
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique eos officia eum inventore fuga placeat, aspernatur, iusto natus iure vitae, maxime tempore. Natus non enim inventore incidunt hic! Ab, porro?"
              sub="Messaging App"
            />
          </div>
        </div>
      </div>
    );
}
