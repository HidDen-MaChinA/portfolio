import { ProjectsLinkList } from "./SkillsProjectsLinkList"

export type MainSkillsPropsType = {
   languages: MainSkillsLanguge[]
}

export type MainSkillsLanguge = {
    language?: string
    name: string,
    level: number
}

export function MainSkills(props: MainSkillsPropsType){
    const {languages} = props;
    return(
        <div className="flex flex-wrap justify-center gap-8 bg-jade-light py-8 rounded-3xl">
            {
                languages.map((language, index)=>{
                    return (
                      <MainSkillsItem
                        key={"slide-show-item-" + index + "-" + language.name}
                        level={language.level}
                        language={language.language}
                        name={language.name}
                      />
                    );
                })
            }
        </div>
    )
}

export function MainSkillsItem(props: MainSkillsLanguge){
    const { name, level, language } = props
    return (
      <div
        className="rounded-2xl duration-[500ms] shadow-lg shadow-[#44444460] bg-jade-standard text-[#ededed] relative w-[200]"
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
                <ProjectsLinkList links={[{name: "mindi's", url: "something"}]} />
            </div>
        </div>
      </div>
    );
}


function LevelMeter(props: {meter?: number} = {meter: 0}){
    const {meter} = props;
    return (
    <div className="rounded-full flex bg-gray-300 flex-row w-full items-center relative">
        <div className="h-[23px] rounded-full bg-gold" style={{ width: meter + "%" }}></div>
        <div className="absolute right-2 text-sm rounded-xl bg-[#00000080] px-1">{meter} %</div>
      </div>
    );
}