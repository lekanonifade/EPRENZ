import React from "react";

export default function Header() {
    return (
        <div className="flex justify-between p-5 bg-[#D9D9D9] w-full h-16 sticky top-0 z-10">
            <a href="#home"><img src="../images/eprenz.svg" className="w-24 -mt-1" /></a>
            <p className="text-xl"><a href="#coach-track">COACH TRACK</a></p>
            <p className="text-base"><a href="#pricing">PRICING</a></p>
        </div>
    )
}