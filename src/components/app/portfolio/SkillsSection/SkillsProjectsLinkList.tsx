import { ClientSideAutoSlider } from "../ProjectsSection/ClientSideAutoSlider";

export type ProjectsLinkListPropsType = { 
    links?: ProjectLinkPropsType[]
}

export function ProjectsLinkList(props: ProjectsLinkListPropsType) {
  const { links } = props;
  return (
    <div className="w-full gap-1 flex flex-row p-1 overflow-hidden">
      {links ? (
        <ClientSideAutoSlider itemNumber={links.length}>
          {links.map((link, index) => {
            return (
              <ProjectLink
                name={link.name}
                url={link.url}
                key={"projects-link-list-" + index}
              />
            );
          })}
        </ClientSideAutoSlider>
      ) : (
        <div>No projects</div>
      )}
    </div>
  );
}

export type ProjectLinkPropsType = {
  name: string;
  url: string;
};

function ProjectLink(props: ProjectLinkPropsType) {
  const { name, url } = props;
  return (
    <a
      href={url}
      className="min-w-[100px] bg-jade-standard text-center whitespace-nowrap border text-ellipsis text-white px-2 overflow-hidden rounded-full"
    >
      {name}
    </a>
  );
}