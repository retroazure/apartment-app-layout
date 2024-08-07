import Image from "next/image";
import Search from "./components/Search";
import Tags from "./components/Tags";
import Visualizer from "./components/Visualizer";
import { properties } from "./dummyData";
import Apartments from "./components/Apartments";

export default function Home() {
  return (
    <main className="sm:pt-10">
       <div class=" h-full lg:h-max bg-gradient-to-r from-blue-50 to-blue-50 text-sm text-black border border-gray-300 md:p-0 lg:rounded-3xl dark:bg-gray-300 dark:border-gray-300 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-0">
        <Search />
        <Tags />
        <Visualizer />
        <Apartments />
      </div>
    </main>
  );
}
