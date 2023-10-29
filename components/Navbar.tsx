import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="">
            <div className="flex flex-row fixed top-0 items-center w-full mb-4 text-white bg-opacity-40 max-sm:justify-start\">
                <div className="text-3xl font-extrabold text-[#0A4BFF] ml-7 basis-3/4 max-sm:ml-2">
                    <Link href="/">ETL</Link>
                </div>
                <div className="flex flex-row items-center justify-center text-lg font-semibold text-center basis-1/4 max-sm:hidden">
                    <Link className="p-4 basis-1/4" href="/Login">
                        <button className="text-lg text-[#0A4BFF] font-semibold">
                            Contact
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}