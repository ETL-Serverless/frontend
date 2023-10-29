import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="h-[10vh]">
            <div className="flex flex-row items-center w-full justify-center p-4">
                <Link href={"/"} className="font-extrabold text-3xl text-[#0A4BFF]">ETL</Link>
                <span className="w-full basis-1/2 ml-auto font-semibold text-center text-lg text-[#0A4BFF]">Contact</span>
            </div>            
        </nav>
    )
}