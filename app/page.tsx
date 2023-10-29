'use client'

import { Poppins, Raleway } from "next/font/google"

import { useState } from "react";
const poppins = Poppins({
  weight : "600",
  display: "swap",
  preload: false
});

export default function Home() {
  
  const [activeTab,setActiveTab] = useState(1)

  return (
    <main className="h-full flex flex-col">      
      <span className={`${poppins.className} text-center text-xl font-semibold`}>Relevant to You</span>
      <div className='bg-white h-full rounded-lg flex flex-col p-4 mt-4'>
        <div className="flex flex-row w-full justify-evenly">
          <button className={`border-b-[1px] ${activeTab===1 ? "border-b-[#0A4BFF] text-[#0A4BFF]" : ""} p-4 font-medium text-lg`} onClick={() => {setActiveTab(1)}}>Recently Verified Assets</button>
          <button className={`border-b-[1px] ${activeTab===2 ? "border-b-[#0A4BFF] text-[#0A4BFF]" : ""} p-4 font-medium text-lg`} onClick={() => {setActiveTab(2)}}>Starred Assets</button>
          <button className={`border-b-[1px] ${activeTab===3 ? "border-b-[#0A4BFF] text-[#0A4BFF]" : ""} p-4 font-medium text-lg`} onClick={() => {setActiveTab(3)}}>My Drafts</button>
        </div>
      </div>
    </main>
  )
}
