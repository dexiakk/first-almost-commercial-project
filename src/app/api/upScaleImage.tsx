'use client'
import { useEffect, useState } from "react";
import Image from "next/image"

export default function UpScaleImage() {

    useEffect(() => {
        const inputSlider = document.querySelector("#slider") as HTMLInputElement;

        let value = inputSlider.value
        inputSlider.style.background = `linear-gradient(to right, #6dd981 ${value}%, #ffffff ${value}%)`;

        inputSlider.oninput = (() => {
            let value = inputSlider.value

            inputSlider.style.background = `linear-gradient(to right, #6dd981 ${value}%, #ffffff ${value}%)`;
        })
    }, [])

    const turnedOff = "w-[45px] flex justify-start items-center pl-1 rounded-[40px] bg-[#2a522d] transition-all"
    const turnedOn = "w-[45px] flex justify-end items-center pr-1 rounded-[40px] bg-[#3b9e45] transition-all"
    const circleTurnedOff = "bg-[#1a3121] w-[20px] h-[20px] rounded-full transition-all"
    const circleTurnedOn = "bg-[#6dd981] w-[20px] h-[20px] rounded-full transition-all"

    const [buttonState, setButtonState] = useState(turnedOff)
    const [buttonCircleState, setbuttonCircleState] = useState(circleTurnedOff)

    const turningButton = () => {
        buttonState === turnedOff
            ? setButtonState(turnedOn)
            : setButtonState(turnedOff)

        buttonCircleState === circleTurnedOff
            ? setbuttonCircleState(circleTurnedOn)
            : setbuttonCircleState(circleTurnedOff)
    }

    const [uploadedImage, setUploadedImage] = useState("")
    const [uploadImageFieldVisiblility, setUploadImageFieldVisiblility] = useState("block")
    const [afterUpload, setAfterUpload] = useState("hidden")

    const handleChange = (image) => {
        setUploadedImage(URL.createObjectURL(image.target.files[0]))
        console.log(image.target.files[0].name)

        uploadImageFieldVisiblility === "block" ? setUploadImageFieldVisiblility("hidden") : setUploadImageFieldVisiblility("block")

        document.getElementById("uploadedImageText").innerHTML = '<span>' + image.target.files[0].name + '</span>'

        afterUpload === "hidden" ? setAfterUpload("block") : setAfterUpload("hidden")
    }

    return (
        <div className="w-full">
            <h1 className="mt-[32px] mb-[32px] text-white text-[34px] font-bold">Upscale image</h1>
            <div className="flex justify-between">
                <div className="flex flex-col px-8 pt-5 bg-black bg-opacity-35 border-solid border-2 border-white border-opacity-[15%] rounded-[17px]">
                    <span className="text-white text-[18px] font-semibold">Scale</span>

                    <form className="flex flex-col justify-center">
                        <div className="field pt-3 w-full flex justify-center">
                            <div className="sliderValue w-full flex justify-center">
                                <input id="slider" name="slider" type="range" min={0} max={100} step={25} />
                            </div>
                        </div>

                        <div className="flex gap-12 px-1 pt-4 text-white text-[16px] font-semibold">
                            <span>x1</span>
                            <span>x2</span>
                            <span>x4</span>
                            <span>x8</span>
                            <span>x16</span>
                        </div>
                        <div className="flex justify-center">
                            <div className="flex justify-between w-full mt-4 px-4 pt-2 pb-2 text-[#99a098] bg-[#0c160b] bg-opacity-35 border-solid border-2 border-white border-opacity-[15%] rounded-[13px]">
                                <span>Upscale model</span>
                                <select className="bg-transparent text-white">
                                    <option>ESRGAN</option>
                                    <option>DSAWDB</option>
                                    <option>AWQSDT</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="flex justify-between w-full mt-4 px-4 pt-2 pb-2 text-[#99a098] bg-[#0c160b] bg-opacity-35 border-solid border-2 border-white border-opacity-[15%] rounded-[13px]">
                                <span>Output format</span>
                                <select className="bg-transparent text-white">
                                    <option>PNG</option>
                                    <option>JPG</option>
                                    <option>BMP</option>
                                </select>
                            </div>
                        </div>
                    </form>

                    <div className="flex justify-between ml-2 mt-5 mb-5 text-white text-[18px]">
                        <div className="flex">
                            <Image src={"/img/questionMark.svg"} alt='login' width={18} height={18} className="mr-3" />
                            <span>Enhance</span>
                        </div>
                        <button onClick={turningButton} className={buttonState}>
                            <div id="buttonCircle" className={buttonCircleState}></div>
                        </button>
                    </div>
                </div>
                <input type="file" className="hidden" accept="image/*" id="file_input" onChange={handleChange} />
                <label for="file_input" className="w-[900px] flex flex-col">
                    <div className="w-[900px] h-full flex flex-col px-3 pt-3 pb-3 bg-black bg-opacity-35 border-solid border-2 border-white border-opacity-[15%] rounded-[17px]">
                        <div className={`${uploadImageFieldVisiblility} flex flex-col justify-center items-center bg-[#6dd981] hover:bg-[#9ae5a7] hover:bg-opacity-10 bg-opacity-10 w-full h-full border-2 border-dashed border-white border-opacity-[15%] rounded-[17px]`}>
                            <Image src={"/img/uploadCloud.svg"} alt='login' width={35} height={35} className="mb-2" />
                            <span className="text-white pt-[2px]">Drag and drop image or <span className="text-[#6dd981]">browse</span></span>
                            <span className="text-[#a3ada3] text-[14px] pt-[1px]">Max file size 50MB</span>
                        </div>

                        <div className={`${afterUpload} flex flex-col items-center my-auto`}>
                            <div className="flex">
                                <div id="uploadedImageText" className="text-[17px] text-[#6dd981] font-medium"></div><span className="text-[17px] text-white font-medium">&nbsp;has been uploaded!</span>
                            </div>
                            <Image src={uploadedImage} alt='uploadedImage' width={280} height={187} className="mt-2 rounded-[17px]" />
                            <button className="mt-3 text-white w-[280px] py-2 bg-[#02931c] hover:bg-[#19c538] border-solid border-2 border-[#02931c] rounded-[17px]">Upgrade Now <span>&gt;</span></button>
                        </div>
                    </div>
                </label>

            </div>

            <div className={`${afterUpload}`}>
                <h1 className="mt-[32px] mb-[32px] text-white text-[34px] font-bold">Result</h1>
                <div className="flex justify-center">
                    <div className="w-[900px] h-full flex justify-center px-3 pt-3 pb-3 bg-black bg-opacity-35 border-solid border-2 border-white border-opacity-[15%] rounded-[17px]">
                        <Image src={uploadedImage} alt='uploadedImage' width={800} height={10} className="my-2 rounded-[17px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}