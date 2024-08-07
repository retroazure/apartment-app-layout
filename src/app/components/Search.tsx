import Image from "next/image";

export default function Search() {
    return (
        <div className="m-5 font-semibold">
            <h1 className="text-3xl">Find</h1>
            <h2 className="text-2xl font-semibold pt-3">your best stay</h2>
            <h3 className="text-xl pt-3">Location</h3>
            <form className="w-full mx-auto pt-3">
                <div className="relative drop-shadow-md">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-300 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full h-12 p-4 ps-10 text-sm text-black border border-gray-300 rounded-3xl dark:bg-gray-300 dark:border-gray-300 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-0" required />
                </div>
            </form>
        </div>
    );
}
