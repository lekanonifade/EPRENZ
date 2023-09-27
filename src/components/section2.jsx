import React from "react";

export default function Section2() {
    return (
        <div className="flex" id="coach-track">
            <div className="bg-[url('/images/Group39.svg')] bg-no-repeat bg-center w-1/2 p-2 lg:p-8">
                <div className="flex flex-col gap-5">
                    <div>
                        <p className="text-[#FFA400] font-bold lg:text-xl md:text-lg text-xs">WHAT ARE YOU STRUGGLING WITH?</p>
                        <hr className="w-[40%] h-[1px] bg-[#FFA400] border-none" />
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6 lg:gap-10">
                        <p className="font-bold lg:text-6xl md:text-4xl text-xl">
                            Struggling To Measure Your Client Success?
                        </p>
                        <p className="text-sm lg:text-lg md:text-base font-thin note">
                            With our software, clients can track their progress, feel connected to the coaching process, stay motivated, and have clarity on next steps.
                        </p>
                        <button className="border border-white w-[35%] p-2 text-[8px] md:text-sm lg:text-base">Join the waitlist</button>
                    </div>
                </div>
            </div>
            <div className="w-1/2">
                <img src="/images/Rectangle2919.svg"  />
            </div>
        </div>
    )
}