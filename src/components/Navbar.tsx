import Link from "next/link";
import { Search, SlidersHorizontalIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Navbar() {
  return (
    <nav className="max-w-screen w-full h-[127px] bg-white flex flex-wrap m-auto px-5 md:px-8 lg:px-16 xl:px-24 items-center overflow-x-hidden md:border-b md:border-b-gray-200 ">
      <div className="flex-col md:flex md:flex-row w-full md:justify-between items-center gap-4 md:gap-8 hidden">
        {/* Logo */}
        <h1 className="text-[#3563E9] text-3xl font-bold">MORENT</h1>

        {/* Search Bar */}
        <div className="relative w-full md:w-[60%] lg:w-[50%]">
          <Search className="absolute mt-3 ml-5 text-[#596780]" />
          <Input
            placeholder="Search something here."
            className="w-full h-11 rounded-full pl-12 pr-12"
          />
          <SlidersHorizontalIcon className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#596780]" />
        </div>

        {/* Icons */}
        <div className="hidden md:flex gap-4 lg:gap-6">
          {/* Like */}
          <Button
            variant={"outline"}
            size={"icon"}
            className="h-11 w-11 rounded-full text-[#596780]"
          >
            <img src="Like.png" alt="like" />
          </Button>
          {/* Notification */}
          <Button
            variant={"outline"}
            size={"icon"}
            className="h-11 w-11 rounded-full text-[#596780]"
          >
            <img src="Notification.png" alt="notification" />
          </Button>
          {/* Settings */}
          <Button
            variant={"outline"}
            size={"icon"}
            className="h-11 w-11 rounded-full text-[#596780]"
          >
            <img src="Settings.png" alt="settings" />
          </Button>
          {/* Profile */}
          <Sheet>
            <SheetTrigger>
              <Button
                variant={"outline"}
                size={"icon"}
                className="border-none hover:border-none"
              >
                <img src="Image.png" alt="Profile" className="" />
              </Button>
            </SheetTrigger>
            <SheetContent side={"right"}>
              <div className="flex flex-col mt-20 gap-5">
                <Link
                  className="hover:underline underline-offset-4"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="hover:underline underline-offset-4"
                  href="/category"
                >
                  Category
                </Link>
                <Link
                  className="hover:underline underline-offset-4"
                  href="/detail"
                >
                  Detail
                </Link>
                <Link
                  className="hover:underline underline-offset-4"
                  href="/payment"
                >
                  Payment
                </Link>
                <Link
                  className="hover:underline underline-offset-4"
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              </div>
              <div className="flex mt-5 gap-5 ">
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="h-11 w-11 rounded-full text-[#596780]"
                >
                  <img src="Like.png" alt="likes" />
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
      </div>

      {/* Responsive Navbar for Small Screens */}
      <div className="md:hidden w-full mt-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-[#3563E9] text-3xl font-bold">MORENT</h1>
          {/* Hamburger Menu */}
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
                <Link
                  href="/"
                  className="hover:underline underline-offset-4"
                >
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
        <div className="relative mt-4">
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
