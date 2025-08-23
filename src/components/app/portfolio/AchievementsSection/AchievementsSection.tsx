import { SectionTitle } from "../SkillsSection/SkillsSection";

export default function AchievementsSection(){
    const achievements: AchievementLinePropsType[] = [
      {
        date: "13 juillets 2025",
        name: "Graduated from HEI",
        sub: "Three years learning CS at HEI Ivandry",
      },
      {
        date: "18 juillets 2025",
        name: "Finished project",
        sub: "Rhree years learning CS at HEI Ivandry",
      },
    ];
    return (
      <div id="achievements" className="w-full">
        <SectionTitle>Achievements</SectionTitle>
        <div className="w-full flex justify-center">
            <div className="max-w-[1100px] w-[800px] flex flex-col gap-2">
              {achievements.map((achievement, index) => (
                <AchievementLine
                  date={achievement.date}
                  name={achievement.name}
                  sub={achievement.sub}
                  key={"achievements-section-list-" + index}
                  overcolor={index % 2 == 0}
                />
              ))}                
            </div>
        </div>
      </div>
    );
}


export type AchievementLinePropsType = {
   name: string
   date: string
   sub?: string
   overcolor?: boolean
}

export function AchievementLine(props: AchievementLinePropsType){
    const {name, sub, date, overcolor} = props
    return (
        <div className="w-full py-3 px-5 rounded-xl" style={{backgroundColor: overcolor ? "#00000010" : "var(--background)"}}>
            <h1 className="text-3xl text-jade-standard">{name}</h1>
            <h2 className="text-xl">{date}</h2>
            <p className="pt-2">{sub}</p>
        </div>
    )
} 
