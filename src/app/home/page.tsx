import TopBar from "../../components/TopbarCard";
import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Catalogue from "./Catalogue";
export default function HomePage() {
  return (
    <section className="max-w-[1440px]  h-[2900px] md:h-[3900px] lg:h-[3600px] xl:h-[2350px] bg-[#F6F7F9]">
      {/* TopBar */}
      <TopBar heading="High Fidelity Dashboard - Home Car Rent" />

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <div className="m-auto">
        <Hero />
      </div>

      {/* Catalogue */}
      <div className="m-auto">
        <Catalogue />
        <div className="md:w-[734px] h-11 flex items-center mt-28 md:mt-[950px] xl:mt-[75px] m-auto ml-12">
          <button className="w-[156px] h-11 bg-[#3563E9] text-white rounded md:ml-72 lg:ml-96 xl:ml-[600px] hover:bg-[#3159d1] m-auto">
            Show More Car
          </button>
          <p className="text-[#90A3BF] xl:ml-auto xl:-pr-[500px] xl:-mr-[500px] mr-7 cursor-context-menu hover:text-[#78a3a3]">
            120 Car
          </p>
        </div>
      </div>
    </section>
  );
}
