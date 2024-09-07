'use client'

import { ReactNode } from "react";


type InstructionProps = {
    title: string,
    meal : string,
    cook_duration: string,
    instructions : string
}

// EXAMPLE COMPONENT:
export default function InstructionPopup({title, meal, cook_duration, instructions}: InstructionProps) {
    console.log("running")
    return (
        <div className="w-60 rounded-lg bg-black h-60 flex flex-row p-7 gap-4">
            <div className="text-xl text-black">
                {title}
            </div>
            <div className="uppercase bg-black text-white text-md rounded-xl w-auto p-3">
                {meal}
            </div>
            <div className="text-md text-grey-500">
                Time To Cook:
            </div>

            <div className="text-md text-black">
                {cook_duration}
            </div>

            <div className="text-md text-grey-500">
                Instructions:
            </div>

            <div className="text-md text-black">
                {instructions}
            </div>
        </div>
    );
}
