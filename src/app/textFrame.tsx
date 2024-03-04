import RightArrow from "./rightArrow"

export default function TextFrame() {
    return (
        <div className="w-1/2 flex items-center text-white">
            <div className="flex flex-col gap-2 font-semibold">
                <span className="text-[34px]">
                    Give new life to your photos <br />
                    with <span className="font-bold text-gradinet">Upscale Images</span>
                </span>

                <span className="text-[17px] font-medium text-[#a8d2ac]">
                    First 10 upscalings completely <span className="underline">for free</span>
                </span>
                <div className="flex gap-5 mt-1">
                    <button className="bg-[#00941c] hover:bg-[#299f3f] transition-all flex items-center gap-3 px-5 pt-2 pb-2 rounded-[16px]">
                        Upscale now <span className="translate-y-[1.2]"><RightArrow prop="white"/></span>
                    </button>
                    <button className="flex items-center gap-3 text-[#a8d2ac] hover:bg-[#68876f] hover:bg-opacity-25 transition-all border-solid border-[2px] border-[#68876f] px-5 pt-2 pb-2 rounded-[16px]">
                        Read more <span className="translate-y-[1.2]"><RightArrow prop="#a8d2ac"/></span>
                    </button>
                </div>
            </div>
        </div>
    )
}
