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
      </div>
        <div className="md:w-[734px] h-11 flex items-center mb-7 m-auto ml-12 text-nowrap">
          <button className="w-[156px] h-11 bg-[#3563E9] text-white rounded md:ml-72 lg:ml-[500px] hover:bg-[#3159d1] m-auto lg:px-2 xl:ml-[700px]">
            Show More Car
          </button>
          <p className="text-[#90A3BF]  mr-7 md:mr-32 lg:ml-60 cursor-context-menu hover:text-[#78a3a3] xl:ml-96">
            120 Car
          </p>
        </div>
      
    </section>
  );
}

