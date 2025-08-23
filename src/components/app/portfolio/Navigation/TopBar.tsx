"use client"
import { useEffect, useState } from "react"
import { CTA1 } from "../HeroSection";

export default function TopBar(){
    const [oldScrollPos, setOldScrollPos] = useState({value: 0});
    const [newScrollPos, setNewScrollPos] = useState({value: 0});
    const [show, setShow] = useState(true);
    useEffect(()=>{
        window.addEventListener("scrollend", ((e)=>{
            setNewScrollPos({value: window.scrollY})
        }))
    }, [])
    useEffect(()=>{
        if(newScrollPos.value <= 200){
            setShow(false);
            return
        }
        if(newScrollPos.value < oldScrollPos.value){
            setOldScrollPos({value: newScrollPos.value})
            setShow(true);
        }else{
            setOldScrollPos({value: newScrollPos.value})
            setShow(false);
        }
    },[newScrollPos])
    return (
      <nav
        style={{ marginTop: show ? 0 : "-100px" }}
        className="shadow-lg duration-[500ms] fixed z-40 w-full text-white bg-jade-standard top-0"
      >
        <div className="flex flex-row justify-end w-full">
          <a className="p-3 w-[fit-content] relative block" href="#hero">
            Home
          </a>
          <a className="p-3 w-[fit-content] relative block" href="#about-me">
            About Me
          </a>
          <a className="p-3 w-[fit-content] relative block" href="#projects">
            Projects
          </a>
          <a className="p-3 w-[fit-content] relative block" href="#achievements">
            Achievements
          </a>
          <a
            className="m-1 px-3 rounded-full items-center w-[fit-content] relative bg-gold text-jade-standard flex"
            href="#footer"
          >
            <span className="w-full">Contacts</span>
          </a>
        </div>
      </nav>
    );
}