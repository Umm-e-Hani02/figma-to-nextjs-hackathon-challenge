import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LeftContainer() {
  return (
    <section className="w-full max-w-screen h-[2840px] md:h-[2240px] overflow-x-hidden">

      <div className="w-[852px] h-[2276px] md:h-[2176px] mx-6">
        <div className="md:w-[570px] xl:w-[852px] h-[500px] md:h-[336px] bg-[#FFFFFF] rounded-lg lg:m-6 flex flex-col px-6 text-nowrap md:mx-24 mt-6 w-[375px]">
          {/* Billing */}
          <div className="flex items-center">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#1A202C] pt-5">
                Billing Info
              </h2>
              <p className="xl:text-[16px] text-[#90A3BF] text-[11px]">
                Please enter your billing info
              </p>
            </div>
            <div className="mt-[52px] ml-[130px] md:ml-[330px] xl:ml-[490px]">
              <p className="xl:text-[16px] text-[#90A3BF] text-end text-[11px]">Step 1 of 4</p>
            </div>
          </div>

          <div className="my-7">
            <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-x-2">
              <div>
                <legend className="font-semibold text-[#1A202C]">Name</legend>
                <Input
                  className="my-2 h-14 bg-gray-100 w-[330px] md:w-[230px] xl:w-[390px]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <legend className="font-semibold text-[#1A202C]">
                  Phone Number
                </legend>
                <Input
                  className="my-2 h-14 bg-gray-100 w-[330px] md:w-[230px] xl:w-[390px]"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <legend className="font-semibold text-[#1A202C]">
                  Address
                </legend>
                <Input
                  className="my-2 h-14 bg-gray-100 w-[330px] md:w-[230px] xl:w-[390px]"
                  placeholder="Address"
                />
              </div>
              <div>
                <legend className="font-semibold text-[#1A202C]">
                  Town/City
                </legend>
                <Input
                  className="my-2 h-14 bg-gray-100 w-[330px] md:w-[230px] xl:w-[390px]"
                  placeholder="Town or city"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Rental Info */}

        <div className="md:w-[570px] xl:w-[852px] h-[885px] md:h-[664px] bg-[#FFFFFF] rounded-lg lg:m-6 px-6 md:mx-24 mt-6 w-[375px]">
          <div className="flex items-center">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#1A202C] pt-5">
                Rental Info
              </h2>
              <p className="xl:text-[16px] text-[#90A3BF] text-[11px] text-nowrap">
                Please select your rental date
              </p>
            </div>
            <div className="mt-[52px] ml-[120px] md:ml-[490px]">
              <p className="xl:text-[16px] text-[#90A3BF] text-end text-[11px] text-nowrap">Step 2 of 4</p>
            </div>
          </div>

          <div>
            <form action="">
              <div className="mt-6">
                <input type="radio" name="selectanyone"/>
                <label className="font-semibold ml-3">Pick-Up</label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
                <div className="">
                  <legend className="text-[#1A202C] font-semibold">
                    Locations
                  </legend>
                  <Select>
                    <SelectTrigger className="xl:w-[386px] w-[330px] md:w-[230px] h-14 text-[#90A3BF] bg-gray-100 my-4 focus:border-none active:border-none">
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
                <div>
                  <legend className="text-[#1A202C] font-semibold">Date</legend>
                  <Select>
                    <SelectTrigger className="xl:w-[386px] w-[330px] md:w-[230px]  h-14 text-[#90A3BF] bg-gray-100 my-4 focus:border-none active:border-none">
                      <SelectValue placeholder="Select your date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="january">January</SelectItem>
                      <SelectItem value="fabruary">February</SelectItem>
                      <SelectItem value="March">March</SelectItem>
                      <SelectItem value="april">April</SelectItem>
                      <SelectItem value="may">May</SelectItem>
                      <SelectItem value="june">June</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <legend className="text-[#1A202C] font-semibold">Time</legend>
                  <Select>
                    <SelectTrigger className="xl:w-[386px] w-[330px] md:w-[230px] h-14 text-[#90A3BF] bg-gray-100 my-4 focus:border-none active:border-none">
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
            </form>
          </div>

          <div className="">
            <form action="">
              <div className="mt-6">
                <input type="radio" name="selectanyone"/>
                <label className="font-semibold ml-3">Drop-Off</label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
                <div className="">
                  <legend className="text-[#1A202C] font-semibold">
                    Locations
                  </legend>
                  <Select>
                    <SelectTrigger className="xl:w-[386px] w-[330px] md:w-[230px] h-14 text-[#90A3BF] bg-gray-100 my-4 focus:border-none active:border-none">
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
                <div>
                  <legend className="text-[#1A202C] font-semibold">Date</legend>
                  <Select>
                    <SelectTrigger className="xl:w-[386px] w-[330px] md:w-[230px] h-14 text-[#90A3BF] bg-gray-100 my-4 focus:border-none active:border-none">
                      <SelectValue placeholder="Select your date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="january">January</SelectItem>
                      <SelectItem value="fabruary">February</SelectItem>
                      <SelectItem value="March">March</SelectItem>
                      <SelectItem value="april">April</SelectItem>
                      <SelectItem value="may">May</SelectItem>
                      <SelectItem value="june">June</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <legend className="text-[#1A202C] font-semibold">Time</legend>
                  <Select>
                    <SelectTrigger className="xl:w-[386px] w-[330px] md:w-[230px] h-14 text-[#90A3BF] bg-gray-100 my-4 focus:border-none active:border-none">
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
            </form>
          </div>
        </div>

        {/* Payment */}
        <div className="md:w-[570px] xl:w-[852px] h-[840px] md:h-[596px] bg-[#FFFFFF] rounded-lg px-6 text-nowrap lg:m-6 md:mx-24 mt-6 w-[375px]">
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#1A202C] pt-5">
                Payment Method
              </h2>
              <p className="xl:text-[16px] text-[#90A3BF] text-[11px]">
                Please enter your payment method
              </p>
            </div>
            <div className="mt-[52px] text-end">
              <p className="xl:text-[16px] text-[#90A3BF] text-end text-[11px]">
                Step 3 of 4
              </p>
            </div>
          </div>

          {/* Payment via credit card */}
          <div className="xl:w-[804px] w-[320px] md:w-[530px] h-[560px] md:h-[308px] bg-[#F6F7F9] flex flex-col p-6 rounded-lg m-auto mt-5">
            <div className="flex justify-between">
              <div>
                <input type="radio" name="select" />
                <label className="font-semibold ml-3">Credit Card</label>
              </div>
              <div className="">
                <img src="Visa.png" alt="" />
              </div>
            </div>

            <div>
              <form action="" className="grid grid-cols-1 md:grid-cols-2">
                <div className="mt-6">
                  <legend className="font-semibold">Card Number</legend>
                  <Input
                    placeholder="Card number"
                    className="h-14 my-4 w-[270px] md:w-[230px] xl:w-[360px]"
                  />
                </div>
                <div className="mt-6">
                  <legend className="font-semibold">Expiration Date</legend>
                  <Input type="date" className="h-14 my-4 w-[270px] md:w-[230px] xl:w-[360px]" />
                </div>
                <div>
                  <legend className="font-semibold">Card Holder</legend>
                  <Input
                    placeholder="Card holder"
                    className="h-14 my-4 w-[270px] md:w-[230px] xl:w-[360px]"
                  />
                </div>
                <div>
                  <legend className="font-semibold">CVC</legend>
                  <Input placeholder="CVC" className="h-14 my-4 w-[270px] md:w-[230px] xl:w-[360px]" />
                </div>
              </form>
            </div>
          </div>

          {/* Payment via PayPal */}
          <div className="w-[325px] md:w-[530px] xl:w-[804px] h-14 bg-[#F6F7F9] flex items-center justify-between px-5 rounded-lg mt-6">
            <div className="flex gap-5">
              <input type="radio" name="select" />
              <p className="text-[#1A202C] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                PayPal
              </p>
            </div>
            <div>
              <img src="PayPal.png" alt="PayPal" className="h-6" />
            </div>
          </div>

          {/* Payment via Bitcoin */}
          <div className="w-[325px] md:w-[530px] xl:w-[804px] h-14 bg-[#F6F7F9] flex items-center justify-between px-5 rounded-lg mt-6">
            <div className="flex gap-5">
              <input type="radio" name="select" />
              <p className="text-[#1A202C] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                Bitcoin
              </p>
            </div>
            <div>
              <img src="Bitcoin.png" alt="Bitcoin" className="h-5" />
            </div>
          </div>
        </div>

        {/* Confirmation */}

        <div className="md:w-[570px] xl:w-[852px] h-[484px] bg-[#FFFFFF] rounded-lg px-6 lg:m-6 md:mx-24 mt-6 w-[375px]">
          <div className="flex xl:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#1A202C] pt-5">
                Confirmation
              </h2>
              <p className="xl:text-[16px] text-[#90A3BF] text-[11px] md:text-nowrap">
                We are getting to the end. Just few clicks and your rental is
                ready!
              </p>
            </div>
            <div className="mt-[52px] ml-[120px] xl:ml-[90px] text-nowrap">
              <p className="xl:text-[16px] text-[#90A3BF] text-end text-[11px]">
                Step 4 of 4
              </p>
            </div>
          </div>

          <div className="w-[804px] h-[136px] items-center">
            <p className="w-[330px] md:w-[530px] xl:w-[804px] h-14 rounded-lg bg-gray-100 text-[#1F2544] font-semibold my-5 xl:p-4 px-1 flex items-center text-[13px] xl:text-[17px] text-wrap">
              <input type="checkbox" className="mr-2" />I agree with sending
              Marketing and newsletter emails. No spam, promised!
            </p>
            <p className="w-[330px] md:w-[530px] xl:w-[804px] h-14 rounded-lg bg-gray-100 text-[#1F2544] font-semibold xl:p-4 px-1 flex items-center text-[13px] xl:text-[17px]">
              <input type="checkbox" className="mr-2" />I agree with our terms
              and conditions and privacy policy.
            </p>
          </div>

          <button className="bg-[#3563E9] text-white w-[140px] h-14 rounded-xl mt-5">
            Rent Now
          </button>

          <img src="Layer.png" alt="datasafe" className="mt-5" />

          <div className="w-[548px] h-[52px] mt-3">
            <h3 className="text-[#1A202C] font-semibold">
              All your data are safe
            </h3>
            <p className="text-[#90A3BF] text-[] md:text-[14px] overflow-hidden text-wrap">
              We are using the most advanced security to provide you the best
              experience ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
