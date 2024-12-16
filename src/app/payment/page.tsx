import TopBar from "@/components/TopbarCard";
import Navbar from "@/components/Navbar";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

export default function Payment() {
  return (
    <section className="min-h-screen bg-gray-100 w-full">
      {/* Topbar */}
      <TopBar heading="High Fidelity Dashboard - Payment Car Rent" />
      {/* Navbar */}
      <Navbar />
      {/* Main Flex Container */}
      <div className="flex lg:flex-row mx-auto flex-col-reverse">
        {/* Left Container */}
        <LeftContainer  />
        {/* Right Container */}
        <RightContainer />
      </div>
    </section>
  );
}
