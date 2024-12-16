import Link from "next/link";
export default function DashboardNavbar() {
  return (
    <section className="w-full bg-[#F6F7F9] overflow-x-hidden hidden lg:flex lg:flex-col">
      {/* Main Content */}
      <div className="hidden md:flex">
        {/* Sidebar */}
        <nav className="w-[286px] lg:w-[205px] xl:w-[286px] h-[910px] bg-[#FFFFFF]">
          <div className="w-[220px] mx-auto py-10">
            {/* Main Menu */}
            <div className="mb-8">
              <p className="text-[#94A7CB] text-[12px] mb-4 lg:px-2 xl:px-0">MAIN MENU</p>
              <div className="flex flex-col gap-4 lg:px-2 xl:px-0 lg:text-sm xl:text-base ">
                {[
                  { href: "/dashboard", src: "home.png", label: "Dashboard" },
                  { href: "", src: "car.png", label: "Car Rent" },
                  { href: "", src: "chart.png", label: "Insight" },
                  { href: "", src: "reimburse.png", label: "Reimburse" },
                  { href: "", src: "message.png", label: "Inbox" },
                  { href: "", src: "calendar.png", label: "Calendar" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`flex items-center gap-2 p-2 lg:w-44 xl:w-full rounded-xl ${
                      item.label === "Dashboard"
                        ? "bg-[#3563E9] text-white"
                        : "text-[#90A3BF] hover:bg-[#3563E9] hover:text-white"
                    }`}
                  >
                    <img src={item.src} alt={item.label} />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Preferences */}
            <div>
              <p className="text-[#94A7CB] text-[12px] mb-4 lg:px-2 xl:px-0">PREFERENCES</p>
              <div className="flex flex-col gap-4 lg:px-2 xl:px-0 lg:text-sm xl:text-base">
                {[
                  { href: "/settings", src: "setting.png", label: "Settings" },
                  {
                    href: "/help-center",
                    src: "info-circle.png",
                    label: "Help & Center",
                  },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center gap-2 p-2 rounded-xl text-[#90A3BF] hover:bg-[#3563E9] hover:text-white"
                  >
                    <img
                      src={item.src}
                      alt={item.label}
                      aria-label={item.label}
                    />
                    {item.label}
                  </Link>
                ))}

                {/* Dark Mode Toggle */}
                <div className="flex items-center gap-2 p-2 rounded-xl text-[#90A3BF] hover:bg-[#3563E9] hover:text-white">
                  <img
                    src="briefcase.png"
                    alt="Dark Mode"
                    aria-label="Dark Mode"
                  />
                  Dark Mode
                  <img
                    className="ml-auto lg:pr-1"
                    src="darklight-mode.png"
                    alt="Toggle Dark Mode"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Logout */}
          <div className="mt-10">
            <Link
              href=""
              className="flex items-center gap-2 p-2 rounded-xl text-[#90A3BF] hover:bg-[#3563E9] hover:text-white ml-6 lg:ml-2 xl:ml-6"
            >
              <img src="logout.png" alt="Log Out" aria-label="Log Out" />
              Log Out
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
}
