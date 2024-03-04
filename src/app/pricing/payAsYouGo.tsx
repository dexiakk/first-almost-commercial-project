export default function PayAsYouGo() {
    return (
        <div className="flex flex-col items-center text-center mt-[55px]">
            <span className="text-[42px] text-white font-semibold">Pay-As-You-Go</span>
            <span className="text-gray-400 text-[18px] mt-5 mx-[190px]">
                You don't want to commit to a subscription plan? No prblem!
                With our Pay-As-You-Go option, you have the freedom to upscale
                images without any long-term commitents.</span>

            <div className="flex flex-col mt-[36px] px-7 pt-7 pb-5 text-start text-white bg-[#0c160b] bg-opacity-35 border-solid border-[2px] border-white border-opacity-[15%] rounded-[25px]">
                <span className="pl-1 pb-4 text-[26px] font-medium">Buy Tokens</span>
                <form>
                    <div className="flex justify-between items-center px-3 bg-[#0c160b] bg-opacity-35 border-solid border-[2px] border-white border-opacity-[15%] rounded-[13px]">
                        <div className="flex mr-32 flex-col items-start">
                            <span className="text-gray-400 text-[12px] pt-1">Amount</span>
                            <input type="number" max={999} className="tokensInput pl-[2px] pb-2 w-[100px]" />
                        </div>
                        <span className="text-gray-400">tokens</span>
                    </div>
                </form>
                <span className="pt-3 text-[#586457]">Price</span>
                <span className="pt-1 text-[29px] font-bold">$18.36</span>
                <span className="pt-1 text-[#586457]">$0.12 per token</span>

                <button className="mt-6 mb-4 pt-2 pb-2 bg-[#02931c] hover:bg-[#19c538] border-solid border-2 border-[#02931c] rounded-[9px]"> Buy Tokens <span className="pl-2">&gt;</span></button>
            </div>
        </div>
    )
}