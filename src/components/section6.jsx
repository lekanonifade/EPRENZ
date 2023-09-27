import React from "react";

export default function Section6() {
    return (
        <div className="bg-[url('/images/Frame78.svg')] bg-auto bg-no-repeat bg-center min-h-[85vh] flex flex-col items-center justify-center text-center" id="pricing">
            <div className="-mt-32 flex flex-col gap-10 p-1">
                <p className="font-bold text-[40px]">
                    Track your client progress with CoachTrack
                </p>
                <p className="text-[18px] font-thin note">
                    Don't miss this opportunity to transform your coaching and change your clients' lives
                </p>
                <form id="email-form" className="relative inline-block w-3/4 self-center">
                    <input type="email" id="email-input" className="p-[10px] border border-[#733DFF] text-[16px] w-[100%] bg-transparent" placeholder="Enter your email" required />
                    <button type="submit" className="absolute right-0 top-0 h-9 m-1 bg-[#733DFF] text-white text-[16px] w-[35%]">Join waitlist</button>
                </form>
            </div>
        </div>
    )
}