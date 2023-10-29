'use client'

import {RiAdminLine} from "react-icons/ri"
import {AiOutlinePlayCircle} from "react-icons/ai"
import {PiCompassLight} from "react-icons/pi"
import { useState } from "react"

export default function SideDrawer() {

    const [activeTab,setActiveTab] = useState(false)

    return (
        <div className={`relative shadow-2xl left-0 h-[90vh] overflow-y-auto ${activeTab ? "w-[15%]" : "xl:w-[5%]"}`}>            
            <div onMouseOver={()=>{setActiveTab(true)}} onMouseOut={()=>{setActiveTab(false)}} className="flex flex-col justify-end h-full max-xl:gap-2 max-xl:items-center mt-auto max-xl:justify-center max-xl:p-1 gap-2 p-4 max-xl:fixed max-xl:w-[100vw] max-xl:h-[8%] max-xl:bottom-0 max-xl:flex-row">                    
                <button className={`flex max-xl:p-1 items-center xl:px-[10%] w-full gap-2 rounded-lg xl:p-1 max-xl:flex-col hover:text-[#0A4BFF] hover:font-bold border-l-[3px] border-white xl:hover:border-[#0A4BFF]`}><PiCompassLight /><span className={`${activeTab ? "" : "xl:hidden"} max-md:text-xs md:max-xl:text-2xl`}>Assets</span></button>
                <button className={`flex max-xl:p-1 items-center xl:px-[10%] w-full gap-2 rounded-lg xl:p-1 max-xl:flex-col hover:text-[#0A4BFF] hover:font-bold border-l-[3px] border-white xl:hover:border-[#0A4BFF]`}><AiOutlinePlayCircle /><span className={`${activeTab ? "" : "xl:hidden"} max-md:text-xs md:max-xl:text-2xl`}>Workflow</span></button>
                <button className={`flex max-xl:p-1 items-center xl:px-[10%] w-full gap-2 rounded-lg xl:p-1 max-xl:flex-col hover:text-[#0A4BFF] hover:font-bold border-l-[3px] border-white xl:hover:border-[#0A4BFF]`}><RiAdminLine /><span className={`${activeTab ? "" : "xl:hidden"} max-md:text-xs md:max-xl:text-2xl`}>Admin</span></button>                
            </div>
        </div>
    )
}