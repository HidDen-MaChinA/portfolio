import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

export default function Footer(){
  return (
    <footer id="footer" className="bg-jade-standard">
      <div className="mt-[80px] flex justify-between flex-wrap text-white">
        <div className="pl-[70] py-8">
          <h1 className="text-3xl">Contacts</h1>
          <div className="pt-[40] flex flex-col gap-3">
            <ContactText label="Gmail">
              niainafrancoroberto@gmail.com
            </ContactText>
            <ContactText label="Phone">038 21 515 48</ContactText>
            <ContactText label="LinkedIn">Niaina Franco Roberto</ContactText>
            <ContactText label="Github">hidden-machina</ContactText>
            <ContactText label="Freelancer">Niaina Franco</ContactText>
          </div>
        </div>
        <div className="w-[500px] flex p-7 flex-col items-center">
          <div className="w-[200px] overflow-hidden h-[200px] rounded-full border border-gold border-2">
            <Image
              alt="hero"
              className=" rounded-2xl z-10"
              style={{
                transform: "matrix(1.8,0,0,1.4,2,-70)",
                width: 250,
                height: 350,
              }}
              width={500}
              height={600}
              src={"/images/hero-illustration.jpg"}
            />
          </div>
          <div className="w-full">
            <h1 className="text-2xl text-center">Niaina Franco</h1>
            <h2 className="text-md text-gray-400 text-center">
              Software developper
            </h2>
          </div>
          <div className="w-full pt-5">
            <p className="text-xl text-center">
              Feel free to send a <span className="text-gold">mail</span> or a{" "}
              <span className="text-gold">message</span>.
            </p>
            <p className="text-xl pt-2 text-center">
              Can't wait to{" "}
              <span className="text-gold text-2xl">work with you</span>.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black text-md px-3 text-white text-right p-1">
        Made by @hidden-machina (niainafrancoroberto@gmail.com) using Next js, Tailwind Css
      </div>
    </footer>
  );
}

function ContactText(props: {label?: string, children?: ReactNode}) {
    const {children, label} = props
    return (
      <div>
        <div>
            <h2 className="text-lg">{label} :</h2>
        </div>
        <div>
            <p className="text-lg text-gray-300">{children}</p>
        </div>
      </div>
    );
}
