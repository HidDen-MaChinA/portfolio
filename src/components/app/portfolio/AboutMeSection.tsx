import Image from "next/image";
import { CTA2 } from "./HeroSection";

export default function AboutMeSection(){
    return (
      <div className="w-full">
        <div className="p-7">
          <h2 className="pb-5 px-2 w-full text-2xl">About Me</h2>
          <div className="flex gap-4 w-full">
            <div className="overflow-hidden shadow-lg w-[200] rounded-2xl h-[200]">
              <Image
                alt="hero"
                className=" rounded-2xl z-10"
                style={{
                  transform: "matrix(2.5,0,0,1.7,1,-120)",
                  width: 300,
                  height: 400,
                }}
                width={500}
                height={600}
                src={"/images/hero-illustration.jpg"}
              />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div className="w-full">
                  <div className="text-xl">
                    I'm a sotware developper located at{" "}
                    <span className="text-blue-400">Madagascar, Antananarivo</span>{" "}
                    and i'm working mostly with{" "}
                    <span className="text-blue-500">Javascript</span> for any type of
                    applications that you would need to achieve your goals.
                  </div>
                  <div className="text-xl pt-4">
                    I'm open to any <span className="text-blue-600">freelance, bug fix, and feature addon</span>{" "}
                    jobs of your needs and all that from remote.
                  </div>
              </div>
              <div className="w-full flex">
                <div className="mb-2">
                    <CTA2>Contacts</CTA2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}