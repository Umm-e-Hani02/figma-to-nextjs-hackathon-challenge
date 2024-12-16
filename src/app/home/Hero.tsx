import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function Hero() {
  return (
    <div className="flex justify-center mt-6 flex-col">
      <div className="flex gap-5 justify-center">
        <img
          src="cars/Ad1.png"
          alt="ad1"
          className="w-[582px] lg:w-[480px] lg:h-[250px] xl:w-[640px] xl:h-[350px] px-3"
        />
        <img
          src="cars/Ad2.png"
          alt="ad2"
          className="hidden lg:flex lg:w-[480px] lg:h-[250px] xl:w-[640px] xl:h-[350px]"
        />
      </div>
      {/* ADS */}

      <div className="lg:flex-row flex justify-around mt-7 xl:mx-16 lg:mx-7 flex-col gap-5 lg:gap-10">
        {/* Pick up */}
        <div className="w-[385px] md:w-[560px] lg:w-[600px] h-[132px] bg-[#FFFFFF] rounded-lg px-6 m-auto">
          <div className="flex pt-2">
            <input type="radio" name="select" />
            <label className="font-semibold ml-3">Pick-Up</label>
          </div>
          <div className="flex mt-4 m-auto justify-center items-center ">

            <div className="w-1/3">
              <legend className="text-[#1A202C] font-semibold">
                Locations
              </legend>
              <Select>
                <SelectTrigger className="text-[#90A3BF] mt-2 focus:outline-none border-none lg:-ml-3 -ml-7">
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
            <div className="w-[1px] h-10 bg-gray-200 mr-3"></div>

            {/* Date */}
            <div className="w-1/3">
              <legend className="text-[#1A202C] font-semibold">Date</legend>
              <Select>
                <SelectTrigger className="text-[#90A3BF] mt-2 focus:outline-none border-none lg:-ml-3 -ml-7">
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
            <div className="w-[1px] h-10 bg-gray-200 mr-3"></div>

            {/* Time */}
            <div className="w-1/3">
              <legend className="text-[#1A202C] font-semibold">Time</legend>
              <Select>
                <SelectTrigger className="text-[#90A3BF] mt-2 focus:outline-none border-none lg:-ml-3 -ml-7">
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

        <div className="lg:mt-6 text-center m-auto my-3">
          <button className="bg-[#3563E9] h-[60px] w-[60px] rounded-lg flex items-center justify-center hover:bg-[#2858eb]">
            <img src="Swap.png" alt="swipe" className="h-[24px] w-[24px]" />
          </button>
        </div>

        {/* Drop off */}
        <div className="w-[385px] md:w-[560px] lg:w-[600px] h-[132px] bg-[#FFFFFF] rounded-lg px-6 m-auto">
          <div className="flex pt-2">
            <input type="radio" name="select" />
            <label className="font-semibold ml-3">Drop-Off</label>
          </div>
          <div className="flex mt-4 m-auto justify-center items-center">
            <div className="w-1/3">
              <legend className="text-[#1A202C] font-semibold">
                Locations
              </legend>
              <Select>
                <SelectTrigger className="text-[#90A3BF] mt-2 focus:outline-none border-none lg:-ml-3 -ml-7">
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
            <div className="w-[1px] h-10 bg-gray-200 mr-3"></div>

            {/* Date */}
            <div className="w-1/3">
              <legend className="text-[#1A202C] font-semibold">Date</legend>
              <Select>
                <SelectTrigger className="text-[#90A3BF] mt-2 focus:outline-none border-none lg:-ml-3 -ml-7">
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
            <div className="w-[1px] h-10 bg-gray-200 mr-3"></div>

            {/* Time */}
            <div className="w-1/3">
              <legend className="text-[#1A202C] font-semibold">Time</legend>
              <Select>
                <SelectTrigger className="text-[#90A3BF] mt-2 focus:outline-none border-none lg:-ml-3 -ml-7">
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
    </div>
  );
}
