import Image from "next/image";


export default function Tags() {
    return (
        <div>
            <div className="relative m-5 font-semibold text-lg">
                <h1>Property</h1>
            </div>
            <div className="flex flex-row  md:m-auto lg:m-5 font-semibold justify-evenly md:gap-5 lg:gap-5">
                <button className="bg-white rounded-2xl p-4 hover:bg-blue-100 hover:text-blue-400">House</button>
                <button className="bg-white rounded-2xl p-4 hover:bg-blue-100 hover:text-blue-400">Apartment</button>
                <button className="bg-white rounded-2xl p-4 hover:bg-blue-100 hover:text-blue-400">Room</button>
            </div>
        </div>


    );
}