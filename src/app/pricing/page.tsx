import PlanButton from "./planButton"
import Plans from "./plans"
import PayAsYouGo from "./payAsYouGo"
import FrequentlyQuestions from "./frequentlyQuestions"

export default function page() {
    return (
        <div className="flex justify-center">
            <div className="max-w-[1200px]">
                <div className="flex flex-col items-center text-center mt-[55px]">
                    <span className="text-[42px] text-white font-semibold">Plans & Pricing</span>
                    <span className="text-gray-400 text-[18px] mt-5 mx-[130px]">
                        Unlock the full potential of our AI image upscaler with flexible pricing plans
                        designed to fit your needs. Whether you're a casual user, a profesional
                        photographer, or a business in need of high-quality image upscaling, we've got you covered.
                    </span>
                    <PlanButton />
                </div>
                <Plans />
                <PayAsYouGo />
                <FrequentlyQuestions />
            </div>
        </div>
    )
}