'use client'
import { useState } from "react"

export default function PlanButton() {
    const turnedOn = "bg-[#112107] text-[#74ba7b] rounded-[25px] transition-all"
    const turnedOff = "text-[#5f7360] transition-all"
    
    const [monthlyState, setMontlyState] = useState(turnedOn)
    const [yearlyState, setYearlyState] = useState(turnedOff)

    const buttonTurning = () => {
        monthlyState === turnedOn ? setMontlyState(turnedOff) : setMontlyState(turnedOn)
        yearlyState === turnedOff ? setYearlyState(turnedOn) : setYearlyState(turnedOff)
    }

    return (
        <button onClick={buttonTurning} className="w-[380px] flex justify-between mt-8 px-2 pt-2 pb-2 text-[20px] bg-black bg-opacity-35 border-solid border-2 border-white border-opacity-[15%] rounded-[30px]">
            <div className={`px-12 pt-2 pb-2 ${monthlyState}`}>Monthly</div>
            <div className={`flex items-center pl-12 pr-5 pt-2 pb-2 ${yearlyState}`}>
                <div className="pr-3">Yearly</div>
                <div className="bg-[#097919] px-[8px] text-white text-[14px] font-light rounded-[25px]">-10%</div>
            </div>
        </button>
    )
}