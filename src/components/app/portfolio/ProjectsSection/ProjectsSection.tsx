import { SectionTitle } from "../SkillsSection/SkillsSection";
import { ProjectPresentation } from "./ProjectPresentation";

export default function ProjectsSection(){
    return (
      <div id="projects" className="w-full flex flex-col items-center">
        <SectionTitle>Mes projets personnels</SectionTitle>
        <div className="max-w-[1100px]">
          <div className="w-full p-3 flex justify-center flex-wrap gap-[40]">
            <ProjectPresentation
              name="Darkthunder UI"
              image="/images/dark-thunder-ui.png"
              technos={["React JS", "Tailwind CSS"]}
              description="L'interface utilisateur d'une application de chat en temps réel designé pour être fluide, intuitive et axé pour les développeurs"
              sub="Messaging App"
              url="https://github.com/hidden-machina/dark-thunder-ui.git"
            />
            <ProjectPresentation
              name="Darkthunder Realtime"
              image="/images/dark-thunder-ui.png"
              technos={["Node js"]}
              description="Un service qui permet un transfert d'informations entres les utilisateurs en utilisant un websocket pour que ce soit en temps réel."
              sub="Socket server"
              url="https://github.com/hidden-machina/dark-thunder-realtime.git"
            />
            <ProjectPresentation
              name="Darkthunder Backend"
              image="/images/dark-thunder-ui.png"
              technos={["PHP Laravel", "MySQL"]}
              description="L'API qui permet a la solution Darkthunder de marcher."
              sub="API"
              url="https://github.com/hidden-machina/dark-thunder-backend.git"
            />
            <ProjectPresentation
              name="Mindi's APK"
              image="/images/mindi-s-project.png"
              technos={["Expo CLI", "React Native"]}
              description="Une application mobile E-commerce pour faciliter la vie aux clients et aux vendeurs des produits de Mindi's (un business de vente de produit fait en Macramé) en automatisant tout ce qui est commande et publication des produits. La notion de palette de couleur étant importante dans ce business, cela a été mis en valeur dans l'application."
              sub="E-commerce APP"
              url="https://github.com/hidden-machina/mindi-s-apk.git"
            />
            <ProjectPresentation
              name="Mindi's Dashboard"
              image="/images/mindi-s-project.png"
              technos={["Node JS", "Electron JS", "React JS", "Typescript"]}
              description="Une Application Desktop écrit avec node js (electron js) qui servira de backoffice et d'interface utilisateur pour les comptes Administrateur."
              sub="Dashboard"
              url="https://github.com/hidden-machina/mindi-s-dashboard.git"
            />
            <ProjectPresentation
              name="Mindi's Backend"
              image="/images/mindi-s-project.png"
              technos={["PHP Laravel", "MySQL"]}
              description="L'API qui fait que toute l'infrastructure reliant Mindi's APK, Mindi's Dashboard et la Base de donnée marche."
              url="https://github.com/hidden-machina/mindi-s-backend.git"
              sub="API"
            />
          </div>
        </div>
      </div>
    );
}
