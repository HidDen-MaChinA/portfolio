import { SectionTitle } from "../SkillsSection/SkillsSection";
import { ProjectPresentation } from "./ProjectPresentation";

export default function ProjectsSection(){
    return (
      <div id="projects" className="w-full flex flex-col items-center">
        <SectionTitle>My latest works</SectionTitle>
        <div className="max-w-[1100px]">
          <div className="w-full flex justify-center flex-wrap gap-[40]">
            <ProjectPresentation
              name="Darkthunder UI"
              image="/images/dark-thunder-ui.png"
              technos={["React JS", "Tailwind CSS"]}
              description="The User Interface of a realtime messaging application designed to be fluent, intuitive and developer friendly."
              sub="Messaging App"
              url="https://github.com/hidden-machina/dark-thunder-ui.git"
            />
            <ProjectPresentation
              name="Darkthunder Realtime"
              image="/images/dark-thunder-ui.png"
              technos={["Node js"]}
              description="A service that allows data transfert between users to feel realtime."
              sub="Socket server"
              url="https://github.com/hidden-machina/dark-thunder-realtime.git"
            />
            <ProjectPresentation
              name="Darkthunder Backend"
              image="/images/dark-thunder-ui.png"
              technos={["PHP Laravel", "MySQL"]}
              description="the Core of the Darkthunder Application. It's the API that make everything work, from sending messages, creating users, authentification and more."
              sub="API"
              url="https://github.com/hidden-machina/dark-thunder-backend.git"
            />
            <ProjectPresentation
              name="Mindi's APK"
              image="/images/mindi-s-project.png"
              technos={["Expo CLI", "React Native"]}
              description="A Mobile Application to used to ease viewing and ordering products from Mindi's, a Macramé selling business. The application in contrast of other E-commerce application highlight the importance of colors when ordering products."
              sub="E-commerce APP"
              url="https://github.com/hidden-machina/mindi-s-apk.git"
            />
            <ProjectPresentation
              name="Mindi's Dashboard"
              image="/images/mindi-s-project.png"
              technos={["Node JS", "Electron JS", "React JS", "Typescript"]}
              description="A desktop application used a backoffice to manage everything: Products, Orders, facturation, and distribution state."
              sub="Dashboard"
              url="https://github.com/hidden-machina/mindi-s-dashboard.git"
            />
            <ProjectPresentation
              name="Mindi's Backend"
              image="/images/mindi-s-project.png"
              technos={["PHP Laravel", "MySQL"]}
              description="The API that make the whole infrastructure work. Handle the data transfers and persistency of the Backoffice and the users."
              url="https://github.com/hidden-machina/mindi-s-backend.git"
              sub="API"
            />
          </div>
        </div>
      </div>
    );
}
