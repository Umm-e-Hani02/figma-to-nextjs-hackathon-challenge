import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function Rental() {
  return (
    <div className="w-[400px] md:w-[534px] lg:w-[390px] xl:w-[524px] h-[1150px] md:h-[850px] lg:h-[834px] bg-[#FFFFFF] px-5 rounded-lg mt-7 mx-auto lg:mx-0 lg:mr-3">
      <h2 className="font-bold text-[#1A202C] text-xl py-5">Details Rental</h2>

      <div>
        <img src="Maps.png" alt="" />
        <div className="flex py-5 gap-2">
          <img src="Look.png" alt="" />
          <div>
            <h2 className="text-[#1A202C] text-2xl font-bold">Nisan GT-R</h2>
            <span className="text-[#3D5278] pt-3">Sport Car</span>
          </div>
          <div className="ml-auto text-[#3D5278] text-sm">#9761</div>
        </div>
      </div>

      <div>
      {/* Pick Up */}
        <div className="flex pt-2">
          <input type="radio" name="select" />
          <label className="font-semibold ml-3">Pick-Up</label>
        </div>
        <div className="flex flex-col md:flex-row mt-4 m-auto lg:justify-center lg:items-center ml-5 lg:ml-0">
          <div className="w-1/3">
            <legend className="text-[#1A202C] font-semibold justify-start flex">Locations</legend>
            <Select>
              <SelectTrigger className="text-[#90A3BF] mt-2 focus:outline-none border-none lg:-ml-3 -ml-7 w-[375px] h-[56px] bg-[#F6F7F9] md:w-[160px] md:bg-white lg:w-[125px] xl:w-[160px]">
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
          <div className="w-[1px] h-20 lg:h-10 bg-gray-200 lg:mr-3 mr-8 hidden md:flex"></div>

          {/* Date */}
          <div className="w-1/3">
            <legend className="text-[#1A202C] font-semibold">Date</legend>
            <Select>
              <SelectTrigger className="text-[#90A3BF] mt-2 focus:outline-none border-none lg:-ml-3 -ml-7 w-[375px] h-[56px] bg-[#F6F7F9] md:w-[160px] md:bg-white lg:w-[125px] xl:w-[160px]">
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
          <div className="w-[1px] h-20 lg:h-10 bg-gray-200 lg:mr-3 mr-8 hidden md:flex"></div>

          {/* Time */}
          <div className="w-1/3">
            <legend className="text-[#1A202C] font-semibold">Time</legend>
            <Select>
              <SelectTrigger className="text-[#90A3BF] mt-2 focus:outline-none border-none lg:-ml-3 -ml-7 w-[375px] h-[56px] bg-[#F6F7F9] md:w-[160px] md:bg-white lg:w-[125px] xl:w-[160px]">
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

        {/* Drop Off */}
        <div>
          <div className="flex pt-2">
            <input type="radio" name="select" />
            <label className="font-semibold ml-3">Drop-Off</label>
          </div>
          <div className="flex flex-col md:flex-row mt-4 m-auto lg:justify-center lg:items-center ml-5 lg:ml-0">
            <div className="w-1/3">
              <legend className="text-[#1A202C] font-semibold">
                Locations
              </legend>
              <Select>
                <SelectTrigger className="text-[#90A3BF] mt-2 focus:outline-none border-none lg:-ml-3 -ml-7 w-[375px] h-[56px] bg-[#F6F7F9] md:w-[160px] md:bg-white lg:w-[125px] xl:w-[160px]">
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
          <div className="w-[1px] h-20 lg:h-10 bg-gray-200 lg:mr-3 mr-8 hidden md:flex"></div>


            {/* Date */}
            <div className="w-1/3">
              <legend className="text-[#1A202C] font-semibold">Date</legend>
              <Select>
                <SelectTrigger className="text-[#90A3BF] mt-2 focus:outline-none border-none lg:-ml-3 -ml-7 w-[375px] h-[56px] bg-[#F6F7F9] md:w-[160px] md:bg-white lg:w-[125px] xl:w-[160px]">
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
          <div className="w-[1px] h-20 lg:h-10 bg-gray-200 lg:mr-3 mr-8 hidden md:flex"></div>


            {/* Time */}
            <div className="w-1/3">
              <legend className="text-[#1A202C] font-semibold">Time</legend>
              <Select>
                <SelectTrigger className="text-[#90A3BF] mt-2 focus:outline-none border-none lg:-ml-3 -ml-7 w-[375px] h-[56px] bg-[#F6F7F9] md:w-[160px] md:bg-white lg:w-[125px] xl:w-[160px]">
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

        <div className="flex justify-between text-nowrap border-t pt-4">
          <div className="flex flex-col">
            <h2 className="text-[#1A202C] text-xl xl:text-2xl font-bold">
              Total Rental Price
            </h2>
            <p className="text-[#90A3BF] text-sm xl:text-base">
              Overall and includes rental discount
            </p>
          </div>
          <span className="text-[#1A202C] text-xl xl:text-3xl font-bold">$80.00</span>
        </div>
      </div>
    </div>
  );
}
