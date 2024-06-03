'use client'

import Image from "next/image";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";

export default function Home() {
    const container = useRef()
    let xPerc = 0;
    let direction = -1;
    let speed = 0.05;

    useGSAP(() => {
        const animationText = () => {
            if(xPerc <= -100) xPerc = 0;
            gsap.set('#firstText', {
                xPercent: xPerc
            })
            gsap.set('#secondText', {
                xPercent: xPerc
            })
            xPerc += speed * direction;
            requestAnimationFrame(animationText)
        }
        requestAnimationFrame(animationText)
        return () => cancelAnimationFrame(animationText);
    }, {scope: container})
  return (
    <main className="p-24 bg-[#000000]" ref={container}>
        <div className="h-[calc(100vh-192px)] relative inline-block">
            <div id='firstText' className='relative'>
                <h2  className='text-[35vh] text-nowrap leading-none'>Lorem ipsum &nbsp;</h2>
                <div className='absolute left-1/3 top-4 w-[400px] rotate-12 overflow-hidden' onMouseEnter={() => speed = 0.02} onMouseLeave={() => speed = 0.05}>
                    <img className='hover:scale-125 transition-all ease-in-out' src="https://images.unsplash.com/photo-1716831320710-5b159b831fdb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                </div>
            </div>
            <h2 id='secondText' className='text-[35vh] text-nowrap leading-none absolute left-full top-0'>Lorem ipsum &nbsp;</h2>
        </div>
    </main>
  );
}
