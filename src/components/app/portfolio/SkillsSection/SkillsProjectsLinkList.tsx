export type ProjectsLinkListPropsType = { 
    links: ProjectLinkPropsType[]
}

export function ProjectsLinkList(props: ProjectsLinkListPropsType){
    const { links } = props;
    return(
        <div className="">
            {links.map((link, index)=>{
                return <ProjectLink name={link.name} url={link.url} key={"projects-link-list-" + index} />
            })}            
        </div>
    )
}

export type ProjectLinkPropsType = {
   name: string,
   url: string 
}

function ProjectLink(props: ProjectLinkPropsType){
    const {name, url} = props;
    return (
        <a href={url} className="w-[100] border text-white px-2 py-1 overflow-hidden rounded-full">
            {name}
        </a>
    )
}