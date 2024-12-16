import TopBar from "@/components/TopbarCard";
import Navbar from "@/components/Navbar";
import CategoryNavbar from "./CategoryNavbar";
import ResponsiveNavbar from "./CategoryResponsiveNavbar";
import CategoryHero from "./CategoryHero";
import CategoryCar from "./CategoryCar";
export default function Category() {
  return (
    <section className="w-full bg-[#F6F7F9] overflow-x-hidden">
      {/* TopBar */}
      <TopBar heading="High Fidelity Dashboard - Category Car Rent" />

      {/* Navbar */}
      <div className="hidden lg:flex">
        <Navbar />
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* SideNavbar */}
        <CategoryNavbar />
        <ResponsiveNavbar />

        <div className="flex flex-col">
          <CategoryHero />
          <CategoryCar />

          <div className="flex items-center mx-auto mt-7 mb-5 lg:mb-0">
            <button className="w-[156px] h-11 bg-[#3563E9] text-white rounded hover:bg-[#3159d1] md:ml-80 lg:ml-44 ml-16">
              Show More Car
            </button>
            <p className="text-[#90A3BF] cursor-context-menu hover:text-[#78a3a3] md:ml-80 lg:ml-44 ml-10">
              120 Car
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
