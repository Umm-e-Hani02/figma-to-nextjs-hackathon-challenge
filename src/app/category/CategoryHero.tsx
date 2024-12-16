import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CategoryHero() {
  return (

      <div className="flex flex-col lg:flex-row lg:mx-2 items-center gap-x-2 mt-7 mx-auto">
        {/* Pick up */}
        <div className="w-[460px] lg:w-[350px] xl:w-[460px] h-[132px] bg-[#FFFFFF] rounded-lg px-6 m-auto">
          <div className="flex pt-4">
            <input type="radio" name="select" />
            <label className="font-semibold ml-3">Pick-Up</label>
          </div>

          <div className="flex mt-4 m-auto gap-x-5 items-center">

            <div className="w-[110px] h-[48px]">
              <legend className="text-[#1A202C] font-semibold">
                Locations
              </legend>
              <Select>
                <SelectTrigger className="text-[#90A3BF] focus:outline-none border-none -ml-6 lg:-ml-4 xl:-ml-6 w-32 lg:w-20 xl:w-32">
                  <SelectValue placeholder="Select your city"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="karachi">Karachi</SelectItem>
                  <SelectItem value="lahore">Lahore</SelectItem>
                  <SelectItem value="islamabad">Islamabad</SelectItem>
                  <SelectItem value="faisalabad">Faisalabad</SelectItem>
                  <SelectItem value="quetta">Quetta</SelectItem>
                  <SelectItem value="peshawar">Peshawar</SelectItem>
                  <SelectItem value="multan">Multan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-10 bg-gray-200 mr-2"></div>

            {/* Date */}
            <div className="w-[110px] h-[48px]">
              <legend className="text-[#1A202C] font-semibold">Date</legend>
              <Select>
                <SelectTrigger className="text-[#90A3BF] focus:outline-none border-none -ml-6 lg:-ml-4 xl:-ml-6 w-32 lg:w-20 xl:w-32">
                  <SelectValue placeholder="Select your date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="january">January</SelectItem>
                  <SelectItem value="february">February</SelectItem>
                  <SelectItem value="march">March</SelectItem>
                  <SelectItem value="april">April</SelectItem>
                  <SelectItem value="may">May</SelectItem>
                  <SelectItem value="june">June</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-10 bg-gray-200 mr-2"></div>

            {/* Time */}
            <div className="w-[110px] h-[48px]">
              <legend className="text-[#1A202C] font-semibold">Time</legend>
              <Select>
                <SelectTrigger className="text-[#90A3BF] focus:outline-none border-none -ml-6 lg:-ml-4 xl:-ml-6 w-32 lg:w-20 xl:w-32">
                  <SelectValue placeholder="Select your time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9-12">9:00am-12:00pm</SelectItem>
                  <SelectItem value="2-5">2:00pm-5:00pm</SelectItem>
                  <SelectItem value="7-10">7:00pm-10:00pm</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Swap button */}
        
        <div className="lg:mt-6 text-center m-auto my-3">
          <button className="bg-[#3563E9] h-[40px] w-[40px] rounded-lg flex items-center justify-center hover:bg-[#2858eb]">
            <img src="Swap.png" alt="swipe" className="h-[19px] w-[19px]" />
          </button>
        </div>

        {/* Drop off */}
        <div className="w-[460px] lg:w-[350px] xl:w-[460px] h-[132px] bg-[#FFFFFF] rounded-lg px-6 m-auto">
          <div className="flex pt-4">
            <input type="radio" name="select" />
            <label className="font-semibold ml-3">Drop-Off</label>
          </div>
          <div className="flex mt-4 m-auto gap-x-5 items-center">
            <div className="w-[110px] h-[48px]">
              <legend className="text-[#1A202C] font-semibold">
                Locations
              </legend>
              <Select>
                <SelectTrigger className="text-[#90A3BF] focus:outline-none border-none -ml-6 lg:-ml-4 xl:-ml-6 w-32 lg:w-20 xl:w-32">
                  <SelectValue placeholder="Select your city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="karachi">Karachi</SelectItem>
                  <SelectItem value="lahore">Lahore</SelectItem>
                  <SelectItem value="islamabad">Islamabad</SelectItem>
                  <SelectItem value="faisalabad">Faisalabad</SelectItem>
                  <SelectItem value="quetta">Quetta</SelectItem>
                  <SelectItem value="peshawar">Peshawar</SelectItem>
                  <SelectItem value="multan">Multan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-10 bg-gray-200 mr-2"></div>

            {/* Date */}
            <div className="w-[110px] h-[48px]">
              <legend className="text-[#1A202C] font-semibold">Date</legend>
              <Select>
                <SelectTrigger className="text-[#90A3BF] focus:outline-none border-none -ml-6 lg:-ml-4 xl:-ml-6 w-32 lg:w-20 xl:w-32">
                  <SelectValue placeholder="Select your date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="january">January</SelectItem>
                  <SelectItem value="february">February</SelectItem>
                  <SelectItem value="march">March</SelectItem>
                  <SelectItem value="april">April</SelectItem>
                  <SelectItem value="may">May</SelectItem>
                  <SelectItem value="june">June</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-10 bg-gray-200 mr-2"></div>

            {/* Time */}
            <div className="w-[110px] h-[48px]">
              <legend className="text-[#1A202C] font-semibold">Time</legend>
              <Select>
                <SelectTrigger className="text-[#90A3BF] focus:outline-none border-none -ml-6 lg:-ml-4 xl:-ml-6 w-32 lg:w-20 xl:w-32">
                  <SelectValue placeholder="Select your time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9-12">9:00am-12:00pm</SelectItem>
                  <SelectItem value="2-5">2:00pm-5:00pm</SelectItem>
                  <SelectItem value="7-10">7:00pm-10:00pm</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
      </div>
    </div>

  );
}


// justify-around mt-7 xl:mx-16 lg:mx-7 flex-col gap-5 lg:gap-10