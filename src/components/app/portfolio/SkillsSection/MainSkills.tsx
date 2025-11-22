import { ProjectLinkPropsType, ProjectsLinkList, ProjectsLinkListPropsType } from "./SkillsProjectsLinkList"

export type MainSkillsPropsType = {
   languages: MainSkillsLanguge[]
}

export type MainSkillsLanguge = {
    language?: string
    name: string,
    level: number
    projects?: ProjectLinkPropsType[]
}

export function MainSkills(props: MainSkillsPropsType){
    const {languages} = props;
    return(
        <div className="rounded-3xl relative rounded-3xl">
          <div className="w-full absolute rounded-xl h-full bg-jade-light"></div>
          <div className="flex flex-wrap justify-center gap-8 py-8 rounded-3xl px-3">
              {
                  languages.map((language, index)=>{
                      return (
                        <MainSkillsItem
                          projects={language.projects}
                          key={"slide-show-item-" + index + "-" + language.name}
                          level={language.level}
                          language={language.language}
                          name={language.name}
                        />
                      );
                  })
              }
          </div>
        </div>
    )
}

export function MainSkillsItem(props: MainSkillsLanguge){
    const { name, level, language, projects } = props
    return (
      <div
        className="rounded-2xl duration-[500ms] shadow-lg shadow-[#44444460] bg-jade-standard text-[#ededed] relative sm:w-[200] w-full"
      >
        <div className="absolute top-1 right-2 font-bold">{language}</div>
        <div className="flex-col relative flex w-full h-full pt-4 pb-3 px-3">
            <h2 className="w-full text-lg">{name}</h2>
            <div>
                <h3 className="px-1">Level</h3>
                <LevelMeter meter={level} />
            </div>
            <div className="mt-2">
                <h3 className="px-1">Projects</h3>
                  <ProjectsLinkList links={projects} />
            </div>
        </div>
      </div>
    );
}


function LevelMeter(props: {meter: number} = {meter: 0}){
    const {meter} = props;
    return (
    <div className="rounded-full flex bg-gray-300 flex-row overflow-hidden w-full items-center relative">
        <div className="h-[23px] bg-jade-light" style={{ width: meter + "%" }}></div>
        <div className="absolute right-2 text-sm rounded-xl bg-[#00000080] px-1">{meter} %</div>
      </div>
    );
}