import Image from 'next/image'

export default function whyUs() {
    return (
        <div>
            <span className="text-white text-[29px] font-bold">Why us?</span>
            <div className="flex justify-center gap-4 [&>div]:text-[#6fd786] [&>div]:text-[19px] mt-6">
                <div className="flex items-center gap-3 bg-black bg-opacity-35 pt-2 pb-2 px-[55px] rounded-[15px]">
                    <Image src={"/img/speedometer.svg"} alt='speedometer' width={20} height={18} />
                    Fast
                </div>
                <div className="flex items-center gap-3 bg-black bg-opacity-35 pt-2 pb-2 px-[55px] rounded-[15px]">
                    <Image src={"/img/dollar.svg"} alt='dollar' width={10} height={18} />
                    Affordable
                </div>
                <div className="flex items-center gap-3 bg-black bg-opacity-35 pt-2 pb-2 px-[55px] rounded-[15px]">
                    <Image src={"/img/imageThumbnail.svg"} alt='imageThumbnail' width={18} height={18} />
                    Excellent Image Quality
                </div>
                <div className="flex items-center gap-3 bg-black bg-opacity-35 pt-2 pb-2 px-[55px] rounded-[15px]">
                    <Image src={"/img/shield.svg"} alt='shield' width={16} height={20} />
                    Secure
                </div>
                <div className="flex items-center gap-3 bg-black bg-opacity-35 pt-2 pb-2 px-[55px] rounded-[15px]">
                    <Image src={"/img/support.svg"} alt='support' width={20} height={18} />
                    Quick Support
                </div>
            </div>
        </div>
    )
}
