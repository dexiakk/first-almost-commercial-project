import Image from "next/image"

export default function Dashboard() {
    return (
        <div className="w-full mt-[32px]">
            <h1 className="text-white text-[34px] font-bold">Dashboard</h1>
            <div className="flex justify-between mt-[30px]">
                <div className="flex flex-col px-5 pt-5 pb-5 bg-black bg-opacity-35 border-solid border-2 border-white border-opacity-[15%] rounded-[17px]">
                    <span className="text-[#a3ada3] text-[14px]">Current membership plan</span>
                    <span className="text-[#e4ffe0] text-[29px] font-semibold">Standard</span>

                    <div className="flex mt-1 mb-2"><hr className="w-32 border-t-[2px] border-[#e4ffe0] " /><hr className="w-10 border-t-[2px] border-[#a3ada3]" /></div>
                    <div className="flex justify-end">
                        <span className="text-[#e4ffe0] text-[14px] mb-6">154 / 200 tokens</span>
                    </div>
                    
                    <span className="text-[#a3ada3] text-[13px]">Extra tokens</span>
                    <div className="flex mt-1">
                        <Image src={"/img/enhance.svg"} alt='login' width={18} height={18} />
                        <span className="text-white ml-3">539 tokens</span>
                    </div>
                </div>
                <div className="w-[1060px] flex flex-col px-3 pt-3 pb-2 bg-black bg-opacity-35 border-solid border-2 border-white border-opacity-[15%] rounded-[17px]">
                    <span className="text-[#a3ada3] text-[18px]">Upscaling history (5)</span>
                    <div className="flex gap-4 mt-5 mb-1">
                        <Image src={"/img/mlodudu.png"} alt="p1" width={140} height={140} className="rounded-[20px]" />
                        <Image src={"/img/image2.png"} alt="p1" width={140} height={140} className="rounded-[20px]" />
                        <Image src={"/img/image3.png"} alt="p1" width={140} height={140} className="rounded-[20px]" />
                        <Image src={"/img/image4.png"} alt="p1" width={140} height={140} className="rounded-[20px]" />
                        <Image src={"/img/image5.png"} alt="p1" width={140} height={140} className="rounded-[20px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}