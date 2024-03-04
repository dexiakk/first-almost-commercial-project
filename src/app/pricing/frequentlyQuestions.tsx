import Image from "next/image"

export default function FrequentlyQuestions() {
    return (
        <div className="text-center mt-[55px]">
            <span className="text-[42px] text-white font-semibold">Frequently Asked Questions</span>
            <div className="flex justify-center">
                <ul className="w-[500px] text-gray-500 text-[18px] font-semibold">
                    <div className="flex justify-between pt-1 pb-2">
                        <li>Pron libero nunc consequat interdum varius sit?</li>
                        <Image src={"/img/arrowDown.svg"} alt="arrowDown" width={20} height={20} />
                    </div>
                    <div className="flex justify-between pt-2 pb-2 border-t-[1px] border-gray-700">
                        <li>Fames ac turpis egestats sed tempus urna?</li>
                        <Image src={"/img/arrowDown.svg"} alt="arrowDown" width={20} height={20} />
                    </div>
                    <div className="flex justify-between pt-2 pb-2 border-t-[1px] border-gray-700">
                        <li>Netus et malesauda fames ac?</li>
                        <Image src={"/img/arrowDown.svg"} alt="arrowDown" width={20} height={20} />
                    </div>
                    <div className="flex justify-between pt-2 pb-2 border-t-[1px] border-gray-700">
                        <li>Duis at tellus at urna condimentum?</li>
                        <Image src={"/img/arrowDown.svg"} alt="arrowDown" width={20} height={20} />
                    </div>
                    <div className="flex justify-between pt-2 pb-2 border-t-[1px] border-gray-700">
                        <li>Adipiscing at in tellus integer?</li>
                        <Image src={"/img/arrowDown.svg"} alt="arrowDown" width={20} height={20} />
                    </div>
                    <div className="flex justify-between">
                        <li>Euismod quis viverra?</li>
                        <Image src={"/img/arrowDown.svg"} alt="arrowDown" width={20} height={20} />
                    </div>
                </ul>
            </div>
        </div>
    )
}