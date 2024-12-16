import Link from "next/link";
import { Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontalIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function ResponsiveNavbar() {
  return (
    <nav className="max-w-screen w-full h-[200px] bg-white flex flex-col lg:hidden">
      <div className="flex items-center justify-between w-full px-6 pt-4">
        <Sheet>
          <SheetTrigger>
            <Menu className="text-gray-500" />
          </SheetTrigger>
          <SheetContent side={"left"} className="overflow-y-auto">
            <div className="w-[220px] mx-auto py-10">
              {/* Main Menu */}
              <div className="mb-8">
                <p className="text-[#94A7CB] text-[12px] mb-4">MAIN MENU</p>
                <div className="flex flex-col gap-4">
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
                      className={`flex items-center gap-2 p-2 rounded-xl ${
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
                <p className="text-[#94A7CB] text-[12px] mb-4">PREFERENCES</p>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      href: "/settings",
                      src: "setting.png",
                      label: "Settings",
                    },
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
                      className="ml-auto"
                      src="darklight-mode.png"
                      alt="Toggle Dark Mode"
                    />
                  </div>
                  <div className="mt-10 -ml-6">
                    <Link
                      href=""
                      className="flex items-center gap-2 p-2 rounded-xl text-[#90A3BF] hover:bg-[#3563E9] hover:text-white ml-6"
                    >
                      <img
                        src="logout.png"
                        alt="Log Out"
                        aria-label="Log Out"
                      />
                      Log Out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <Sheet>
          <SheetTrigger>
            <Button
              variant={"outline"}
              size={"icon"}
              className="border-none hover:border-none"
            >
              <img
                src="Image.png"
                alt="Profile"
                className="h-11 w-11 rounded-full"
              />
            </Button>
          </SheetTrigger>
          <SheetContent side={"right"}>
            <div className="flex flex-col mt-14 gap-5">
              <Link href="/" className="hover:underline underline-offset-4">
                Home
              </Link>
              <Link
                href="/detail"
                className="hover:underline underline-offset-4"
              >
                Detail
              </Link>
              <Link
                href="/category"
                className="hover:underline underline-offset-4"
              >
                Category
              </Link>
              <Link
                href="/payment"
                className="hover:underline underline-offset-4"
              >
                Payment
              </Link>
              <Link
                href="/dashboard"
                className="hover:underline underline-offset-4"
              >
                Dashboard
              </Link>
            </div>
            <div className="flex mt-5 gap-5">
              <Button
                variant={"outline"}
                size={"icon"}
                className="h-11 w-11 rounded-full text-[#596780]"
              >
                <img src="Like.png" alt="like" />
              </Button>
              <Button
                variant={"outline"}
                size={"icon"}
                className="h-11 w-11 rounded-full text-[#596780]"
              >
                <img src="Notification.png" alt="notification" />
              </Button>
              <Button
                variant={"outline"}
                size={"icon"}
                className="h-11 w-11 rounded-full text-[#596780]"
              >
                <img src="Settings.png" alt="settings" />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="pt-4">
        <h1 className="text-[#3563E9] text-3xl font-bold pl-6">MORENT</h1>
      </div>
      <div className="px-6 pt-5">
        <div className="relative">
          <Search className="absolute mt-3 ml-5 text-[#596780]" />
          <div className="flex items-center">
            <Input
              placeholder="Search something here."
              className="w-full h-11 pl-12"
            />
            <SlidersHorizontalIcon className="h-11 w-11 p-2 ml-2 text-[#596780] bg-white border rounded-md" />
          </div>
        </div>
      </div>
    </nav>
  );
}
