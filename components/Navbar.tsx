import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="h-[10vh]">
            <div className="flex flex-row items-center w-full justify-center p-4">
                <Link href={"/"} className="font-extrabold text-3xl text-[#2026D2]">ETL</Link>
                <span className="w-full basis-1/2 ml-auto font-semibold text-center text-lg text-[#2026D2]">Contact</span>
            </div>            
        </nav>
    )
}