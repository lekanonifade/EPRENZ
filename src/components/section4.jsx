import React from "react";

export default function Section4() {
    return (
        <div className="flex">
            <div className="bg-[url('/images/Group41.svg')] bg-no-repeat bg-center w-1/2 p-2 lg:p-8">
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-10">
                    <p className="font-bold lg:text-6xl md:text-4xl text-xl">
                        Maintain Accountability In Your Coaching Process
                    </p>
                    <p className="text-sm lg:text-lg md:text-base font-thin note">
                        Don't let a lack of progress tracking hold you back - with our software, you can provide a more effective coaching experience and help your clients succeed.
                    </p>
                    <button className="border border-white w-[35%] p-2 text-[8px] md:text-sm lg:text-base">Join the waitlist</button>
                </div>
            </div>
            <div className="w-1/2">
                <img src="/images/Rectangle107.svg" />
            </div>
        </div>
    )
}