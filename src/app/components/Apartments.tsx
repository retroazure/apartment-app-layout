import Image from "next/image";
import { properties } from "../dummyData";
import PropertyCard from "./PropertyCard";

export default function Apartments() {
    return (
        <div className="block mt-20 pt-5 w-full h-100 bg-white rounded-3xl max-w-screen-xl mx-auto">
            <h1 className="ml-5 font-semibold text-xl">Apartments</h1>
            <PropertyCard />
            </div>
            );
}
