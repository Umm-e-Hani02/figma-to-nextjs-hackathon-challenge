import TopBar from "@/components/TopbarCard";
import Navbar from "@/components/Navbar";
import DetailNavbar from "./DetailNavbar";
import ResponsiveNavbar from "./DetailResponsiveNavbar";
import DetailHero from "./DetailHero";
import Reviews from "../detail/Reviews";
import CarCategory from "../detail/CarCategory";
export default function Detail() {
  return (
    <section className="w-full max-w-screen bg-[#F6F7F9] overflow-x-hidden">
      <TopBar heading="High Fidelity Dashboard - Detail Car Rent" />
      <div className="hidden lg:flex">
      <Navbar />
      </div>

      <div className="flex flex-col lg:flex-row">
        <DetailNavbar />
        <ResponsiveNavbar/>
        <div className="flex flex-col">
          <DetailHero />
          <Reviews />
          <CarCategory />
        </div>
      </div>

    </section>
  );
}
