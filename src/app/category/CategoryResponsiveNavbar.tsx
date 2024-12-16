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
            <div>
              {/* Type */}
              <div className="w-[176px] h-[352px] pt-9">
                <p className="text-[#90A3BF] font-semibold text-[12px]">TYPE</p>
                <div className="flex gap-x-2 my-4">
                  <input type="checkbox" />
                  <p className="text-[20px] text-[#596780]">
                    Sport <span className="text-[#90A3BF]">(10)</span>
                  </p>
                </div>
                <div className="flex gap-x-2 my-4">
                  <input type="checkbox" />
                  <p className="text-[20px] text-[#596780]">
                    SUV <span className="text-[#90A3BF]">(12)</span>
                  </p>
                </div>
                <div className="flex gap-x-2 my-4">
                  <input type="checkbox" />
                  <p className="text-[20px] text-[#596780]">
                    MPV <span className="text-[#90A3BF]">(16)</span>
                  </p>
                </div>
                <div className="flex gap-x-2 my-4">
                  <input type="checkbox" />
                  <p className="text-[20px] text-[#596780]">
                    Sedan <span className="text-[#90A3BF]">(20)</span>
                  </p>
                </div>
                <div className="flex gap-x-2 my-4">
                  <input type="checkbox" />
                  <p className="text-[20px] text-[#596780]">
                    Coupe <span className="text-[#90A3BF]">(14)</span>
                  </p>
                </div>
                <div className="flex gap-x-2 my-4">
                  <input type="checkbox" />
                  <p className="text-[20px] text-[#596780]">
                    Hatchback <span className="text-[#90A3BF]">(14)</span>
                  </p>
                </div>
              </div>

              {/* Capacity */}

              <div className="w-[176px] h-[240px]">
                <p className="text-[#90A3BF] font-semibold text-[12px]">
                  CAPACITY
                </p>
                <div className="flex gap-x-2 my-4">
                  <input type="checkbox" />
                  <p className="text-[20px] text-[#596780]">
                    2 Person <span className="text-[#90A3BF]">(10)</span>
                  </p>
                </div>
                <div className="flex gap-x-2 my-4">
                  <input type="checkbox" />
                  <p className="text-[20px] text-[#596780]">
                    4 Person <span className="text-[#90A3BF]">(14)</span>
                  </p>
                </div>
                <div className="flex gap-x-2 my-4">
                  <input type="checkbox" />
                  <p className="text-[20px] text-[#596780]">
                    6 Person <span className="text-[#90A3BF]">(12)</span>
                  </p>
                </div>
                <div className="flex gap-x-2 my-4">
                  <input type="checkbox" />
                  <p className="text-[20px] text-[#596780]">
                    8 or More <span className="text-[#90A3BF]">(16)</span>
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="w-[296px] h-[104px]">
                <p className="text-[#90A3BF] font-semibold text-[12px]">
                  PRICE
                </p>
                <div className="my-4">
                  <img src="pricerange.png" alt="" className="w-64" />
                </div>
                <p className="text-[#596780] font-semibold text-[20px]">
                  Max. $100.00
                </p>
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
