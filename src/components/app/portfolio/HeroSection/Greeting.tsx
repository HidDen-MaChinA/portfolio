"use client"
import { useEffect, useState } from "react";

export function Greeting(props: {greetings: string[]}){
    const {greetings} = props;
    const items = greetings.length - 1;
    const [greetingState, setGreetingState] = useState<number>(0);
    useEffect(()=>{
        setInterval(()=>{
            setGreetingState(state => state >= items ? 0 : state + 1 )
        }, 2000)
    }, [greetings])
    return (
        <span className="animate-fade duration-[500ms]">{greetings[greetingState]}</span>
    )
}
