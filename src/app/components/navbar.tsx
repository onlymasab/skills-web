"use client";

import React from 'react'
import Hamburgur from "@/assests/icons/svg/hambergur-icon.svg"
import Search from "@/assests/icons/svg/search-icon.svg"
import Skiills from "@/assests/logos/svg/skiills-logo.svg"
import Image from "next/image"
import Button from "./buttons"

export default function Navbar() {
  return (
    <header className='navbar bg-white'>
      <div className='wrapper w-full px-5 py-4'>
        <div className='contianer flex justify-between items-center'>
          {/* Left Nav Items */}
          <div className='flex'>
            <Image className='mr-2' src={Hamburgur} width={24} height={24}  alt='Hamburgur Icon'/>
            <Image src={Search} width={24} height={24}  alt='Search Icon'/>
          </div>
            {/* Center Nav Items */}
          <div>
            <Image src={Skiills} width={80} height={20}  alt='Skiills Logo'/>
          </div>
            {/* Right Nav Items */}
            <div>
                <Button label={"Sign Up"} onClick={() => alert('Button clicked!')}/>
            </div>
        </div>
      </div>
    </header>
  )
}
