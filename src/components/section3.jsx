import React from "react";

export default function Section3() {
    return (
        <div className="flex">
            <div className="w-1/2">
                <img src="/images/Rectangle2920.svg" />
            </div>
            <div className="bg-[url('/images/Group40.svg')] bg-no-repeat bg-center w-1/2 p-2 lg:p-8">
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-10">
                    <p className="font-bold lg:text-6xl md:text-4xl text-xl">
                        Identify Areas For Improvement
                    </p>
                    <p className="text-sm lg:text-lg md:text-base font-thin note">
                        Our software helps you measure success, identify areas for improvement, maintain accountability, and efficiently use your time.
                    </p>
                    <button className="border border-white w-[35%] p-2 text-[8px] md:text-sm lg:text-base">Join the waitlist</button>
                </div>
            </div>
        </div>
    )
}