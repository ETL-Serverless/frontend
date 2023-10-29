import {RiAdminLine} from "react-icons/ri"
import {AiOutlinePlayCircle} from "react-icons/ai"
import {PiCompassLight} from "react-icons/pi"

export default function SideDrawer() {
    return (
        <div className="fixed rounded-lg left-0 top-[61px] h-[82vh] overflow-y-auto w-[20%]">
            <div className="flex flex-col justify-end h-full max-xl:gap-2 max-xl:items-center max-xl:justify-center max-xl:p-1 gap-2 p-4 max-xl:fixed max-xl:w-[100vw] max-xl:h-[8%] max-xl:bottom-0 max-xl:flex-row">                    
                <button className={`flex max-xl:p-1 items-center xl:px-[10%] w-full gap-2 rounded-lg xl:p-1 max-xl:flex-col hover:text-[#0A4BFF] hover:font-bold border-l-[3px] border-white xl:hover:border-[#0A4BFF]`}><PiCompassLight /><span className="max-md:text-xs md:max-xl:text-2xl">Assets</span></button>
                <button className={`flex max-xl:p-1 items-center xl:px-[10%] w-full gap-2 rounded-lg xl:p-1 max-xl:flex-col hover:text-[#0A4BFF] hover:font-bold border-l-[3px] border-white xl:hover:border-[#0A4BFF]`}><AiOutlinePlayCircle /><span className="max-md:text-xs md:max-xl:text-2xl">Workflow</span></button>
                <button className={`flex max-xl:p-1 items-center xl:px-[10%] w-full gap-2 rounded-lg xl:p-1 max-xl:flex-col hover:text-[#0A4BFF] hover:font-bold border-l-[3px] border-white xl:hover:border-[#0A4BFF]`}><RiAdminLine /><span className='max-md:text-xs md:max-xl:text-2xl'>Admin</span></button>                
            </div>
        </div>
    )
}