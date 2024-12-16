import TopBar from "@/components/TopbarCard";
import Navbar from "@/components/Navbar";
import DashboardNavbar from "./DashboardNavbar";
import ResponsiveNavbar from "./DashboardResponsivenavbar";
import Rental from "./Rental";
import Transaction from "./Transaction";

export default function Dashboard() {
  return (
    <section className="w-full bg-[#F6F7F9] overflow-x-hidden">
      {/* TopBar */}
      <TopBar heading="High Fidelity Dashboard - Admin Car Rent" />

      {/* Navbar */}
      <div className="hidden lg:flex">
      <Navbar />
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* SideNavbar */}
        <DashboardNavbar />
        <ResponsiveNavbar/>

        {/* Rental details */}
        <div className="flex mx-3 flex-col lg:flex-row">
        <Rental />
        <Transaction/>
        </div>
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
