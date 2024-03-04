import Image from "next/image"

export default function Plans() {
    return (
        <div className="flex justify-center gap-8 mt-10">
            <div className="flex flex-col mt-[36px] px-7 pt-4 pb-5 text-white bg-[#0c160b] bg-opacity-35 border-solid border-[2px] border-white border-opacity-[15%] rounded-[13px]">
                <span className="text-[26px] font-medium">Free</span>
                <span className="text-[#586457]">Includes only free trial tokens.</span>
                <span className="text-[29px] font-bold">$0 <span className="text-[18px] font-normal">/ month</span></span>

                <button className="mt-3 mb-4 pt-1 pb-1 border-solid border-2 border-[#1f7425] hover:bg-[#1f7425] rounded-[9px]"> Sing Up <span>&gt;</span></button>

                <div className="w-[250px]">
                    <ul className="font-light">
                        <li className="flex">
                            <Image src={"/img/check.svg"} alt='check' width={15} height={15} className="mr-2" />
                            Export to PNG and JPG
                        </li>
                        <li className="flex mt-1">
                            <Image src={"/img/check.svg"} alt='check' width={15} height={15} className="mr-2" />
                            Limited to 10 trial tokens
                        </li>
                        <li className="flex mt-1">
                            <Image src={"/img/check.svg"} alt='check' width={15} height={15} className="mr-2" />
                            Basic upscaling features
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <div className="pt-1 pb-1 bg-[#02931c] text-white text-center rounded-t-[13px]">Most popular</div>
                <div className="flex flex-col px-7 pt-4 pb-5  text-white bg-[#0c160b] bg-opacity-35 border-solid border-2 border-[#02931c] rounded-b-[13px]">
                    <span className="text-[26px] text-[#dbf8d6] font-medium">Standard</span>
                    <span className="text-[#586457]">Access to all essential tools.</span>
                    <span className="text-[29px] font-bold">$19 <span className="text-[18px] font-normal">/ month</span></span>

                    <button className="mt-3 mb-4 pt-1 pb-1 bg-[#02931c] hover:bg-[#19c538] border-solid border-2 border-[#02931c] rounded-[9px]"> Get Started <span>&gt;</span></button>

                    <div className="w-[250px]">
                        <ul className="font-light">
                            <li className="flex">
                                <Image src={"/img/check.svg"} alt='check' width={15} height={15} className="mr-2" />
                                Export to various formats
                            </li>
                            <li className="flex mt-1">
                                <Image src={"/img/check.svg"} alt='check' width={15} height={15} className="mr-2" />
                                200 monthly tokens
                            </li>
                            <li className="flex mt-1">
                                <Image src={"/img/check.svg"} alt='check' width={15} height={15} className="mr-2" />
                                Access to various upscaling algorithms
                            </li>
                            <li className="flex mt-1">
                                <Image src={"/img/check.svg"} alt='check' width={15} height={15} className="mr-2" />
                                Faster processing
                            </li>
                            <li className="flex mt-1">
                                <Image src={"/img/check.svg"} alt='check' width={15} height={15} className="mr-2" />
                                Priority support
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-[36px] px-7 pt-4 pb-5 text-white bg-[#0c160b] bg-opacity-35 border-solid border-2 border-[#d1a334] border-opacity-[55%] rounded-[13px]">
                <span className="text-[26px] font-medium">Business</span>
                <span className="text-[#586457]">Provides advanced features.</span>
                <span className="text-[29px] font-bold">$89 <span className="text-[18px] font-normal">/ month</span></span>

                <button className="mt-3 mb-4 pt-1 pb-1 bg-[#d1a334] hover:bg-[#ffca4b] border-solid border-2 border-[#d1a334] rounded-[9px]"> Get Started <span>&gt;</span></button>

                <div className="w-[250px]">
                    <ul className="font-light">
                        <li className="flex">
                            <Image src={"/img/check.svg"} alt='check' width={15} height={15} className="mr-2" />
                            All features from Standard
                        </li>
                        <li className="flex mt-1">
                            <Image src={"/img/check.svg"} alt='check' width={15} height={15} className="mr-2" />
                            1000 monthly tokens
                        </li>
                        <li className="flex mt-1">
                            <Image src={"/img/check.svg"} alt='check' width={15} height={15} className="mr-2" />
                            API access
                        </li>
                        <li className="flex mt-1">
                            <Image src={"/img/check.svg"} alt='check' width={15} height={15} className="mr-2" />
                            Batch processing
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}