import React from "react";

export default function Section1() {
    return (
        <div className="bg-[url('/images/Frame107.svg')] bg-fixed bg-no-repeat bg-center bg-cover min-h-screen min-w-screen flex flex-col items-center justify-center text-center gap-10" id="home">
            <p className="md:text-[64px] text-[50px] font-bold">
                Track Your Client Progress And
                <br />
                Identify Area For Improvement
            </p>
            <p className="md:text-[20px] text-[16px] font-thin note">
                Ensure clients feel confident by measuring progress and providing clarity on next steps
                <br />
                to avoid frustration and uncertainty in the coaching journey.
            </p>
            <form id="email-form" className="relative inline-block w-1/2">
                <input type="email" id="email-input" className="p-[10px] border text-[16px] w-[100%] bg-transparent" placeholder="Enter your email" required />
                <button type="submit" className="absolute right-0 top-0 h-9 m-1 bg-[#733DFF] text-white md:text-[16px] text-[10px] border border-white w-[35%]">Join waitlist</button>
            </form>
        </div>
    )
}