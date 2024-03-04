'use client'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image'

export default function Navbar() {

    const pathName = usePathname()

    return (
        <nav className="w-full flex justify-center items-center bg-black bg-opacity-35 border-solid border-2 border-white border-opacity-[15%] rounded-[29px] mt-[16px] px-9 pt-4 pb-4 text-white">
            <div className="w-full flex justify-between">
                <div className="flex items-center gap-2">
                    <Image src={"/img/logo.png"} alt='login' width={32} height={32} />
                    <span>Upscale images</span>
                </div>
                <div className='flex items-center'>
                    <ul className='flex gap-12'>
                        <a href='..' ><li className={`${pathName.endsWith("/") ? "text-white" : "text-gray-500"}`}>Home</li></a>
                        <a href='./pricing'><li className={`${pathName.endsWith("/pricing") ? "text-white" : "text-gray-500"}`}>Pricing</li></a>
                        <a href='./api'> <li className={`${pathName.endsWith("/api") ? "text-white" : "text-gray-500"}`}>API</li></a>
                        <a href='' ><li className={`${pathName.endsWith("/aboutus") ? "text-white" : "text-gray-500"}`}>About Us</li></a>
                    </ul>
                </div>
                <div className='flex items-center gap-2'>
                    <span>Login</span>
                    <Image src={"/img/login.svg"} alt='login' width={20} height={20} />
                </div>
            </div>
        </nav>
    );
}