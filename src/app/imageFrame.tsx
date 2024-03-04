import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Image from 'next/image'

export default function ImageFrame() {
  const CustomHandle =
    <div className='flex items-center justify-center'>
      <div className='px-[1px] h-[520px] bg-white'></div>
      <div className='absolute bg-white rounded-full text-gray-500'>&lt;&gt;</div>
    </div>

  return (
    <div className="w-1/2">
      <div className="girlImageBackground relative flex justify-center items-center border-solid border-[2px] border-[#27351f] rounded-[24px] ">
        <ReactCompareSlider
          handle={CustomHandle}
          itemOne={<Image className='select-none' src={"/img/girlImage.png"} alt='girlImage' width={403} height={518} />}
          itemTwo={<Image className='select-none' src={"/img/girlUpScaledImage.png"} alt='girlImage' width={403} height={518} />}
        />
      </div>
    </div>
  )
}
