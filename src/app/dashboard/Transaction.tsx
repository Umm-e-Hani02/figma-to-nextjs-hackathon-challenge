import { Circle } from "lucide-react";
export default function Transaction() {
    return (
      <div className="min-h-screen flex flex-col items-center mt-7">
        {/* Top 5 Car Rental */}
        <div className="w-[400px] md:w-[534px] lg:w-[390px] xl:w-[524px] h-[324px] bg-white rounded-lg p-6 mb-8">
          {/* Header */}
          <div className="flex items-center mb-6 justify-between">
            <h2 className="text-[#1A202C] font-bold text-lg">Top 5 Car Rental</h2>
            <span className="text-[#90A3BF] font-bold text-lg cursor-pointer">•••</span>
          </div>
  
          {/* Chart and Details */}
          <div className="flex items-center gap-x-2">
            {/* Chart */}
            <div className="relative w-[220px] h-[220px] flex items-center justify-center">
              <img src="Chart1.png" alt="Chart" className="" />
              <div className="absolute flex flex-col items-center">
                <span className="text-[#1A202C] font-bold text-xl lg:text-2xl">72,030</span>
                <span className="text-[#90A3BF] text-sm">Rental Car</span>
              </div>
            </div>

            {/* Car Stats */}

            <div className="w-72">
              <div className="flex justify-between mb-4">
                <span className="flex items-center"><Circle fill="#0D3559" className="h-3 text-[#0D3559]"/> Sport Car</span>
                <span>17,439</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="flex items-center"><Circle fill="#175D9C" className="h-3 text-[#175D9C]"/>SUV</span>
                <span>9,478</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="flex items-center"><Circle fill="#2185DE" className="h-3 text-[#2185DE]"/>Coupe</span>
                <span>18,197</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="flex items-center"><Circle fill="#63A9E8" className="h-3 text-[#63A9E8]"/>Hatchback</span>
                <span>12,510</span>
              </div>
              <div className="flex justify-between">
                <span className="flex items-center"><Circle fill="#A6CEF2" className="h-3 text-[#A6CEF2]"/>MPV</span>
                <span>14,406</span>
              </div>
            </div>

          </div>
        </div>
  
        {/* Recent Transactions */}
        <div className="w-[400px] md:w-[534px] lg:w-[390px] xl:w-[524px] h-[480px] bg-white rounded-lg p-6 mb-10">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[#1A202C] font-bold text-lg">Recent Transaction</h2>
            <span className="text-[#3563E9] cursor-pointer hover:text-[#2950c5]">
              View All
            </span>
          </div>

          <div className="w-[350px] h-[376px] md:w-[480px] lg:w-[360px] xl:w-[480px]">

            <div className="md:w-[476px] lg:w-[376px] xl:w-[476px] w-[350px] h-[70px] flex justify-between items-center xl:px-5 mt-7">
              <div className="flex items-center gap-x-2">
                <img className="w-[132px] object-contain" src="carcard/nissangt-r.png" alt="" />
                <div>
                <h3 className="text-[#1A202C] font-bold">Nissan GT-R</h3>
                <span className="text-[#90A3BF] text-[14px]">Sport Car</span>
                </div>
              </div>
              <div className="lg:pr-4 xl:pr-0">
              <span className="text-[#90A3BF] text-[14px]">20 July</span>
              <h3 className="text-[#1A202C] font-bold">$80.00</h3>
              </div>
            </div>

            <hr />

            <div className="md:w-[476px] lg:w-[376px] xl:w-[476px] w-[350px] h-[70px] flex justify-between items-center xl:px-5 mt-7">
              <div className="flex items-center gap-x-2">
                <img className="w-[132px] object-contain" src="carcard/koenigsegg.png" alt="" />
                <div>
                <h3 className="text-[#1A202C] font-bold">Koenigsegg</h3>
                <span className="text-[#90A3BF] text-[14px]">Sport Car</span>
                </div>
              </div>
              <div className="lg:pr-4 xl:pr-0">
              <span className="text-[#90A3BF] text-[14px]">19 July</span>
              <h3 className="text-[#1A202C] font-bold">$99.00</h3>
              </div>
            </div>

            <hr />

            <div className="md:w-[476px] lg:w-[376px] xl:w-[476px] w-[350px] h-[70px] flex justify-between items-center xl:px-5 mt-7">
              <div className="flex items-center gap-x-2">
                <img className="w-[132px] object-contain" src="carcard/rolls-royce.png" alt="" />
                <div>
                <h3 className="text-[#1A202C] font-bold">Rolls-Royce</h3>
                <span className="text-[#90A3BF] text-[14px]">Sport Car</span>
                </div>
              </div>
              <div className="lg:pr-4 xl:pr-0">
              <span className="text-[#90A3BF] text-[14px]">18 July</span>
              <h3 className="text-[#1A202C] font-bold">$96.00</h3>
              </div>
            </div>

            <hr />

            <div className="md:w-[476px] lg:w-[376px] xl:w-[476px] w-[350px] h-[70px] flex justify-between items-center xl:px-5 mt-7">
              <div className="flex items-center gap-x-2">
                <img className="w-[132px] object-contain" src="carcard/crv.png" alt="" />
                <div>
                <h3 className="text-[#1A202C] font-bold">CR-V</h3>
                <span className="text-[#90A3BF] text-[14px]">SUV</span>
                </div>
              </div>
              <div className="lg:pr-4 xl:pr-0">
              <span className="text-[#90A3BF] text-[14px]">17 July</span>
              <h3 className="text-[#1A202C] font-bold">$80.00</h3>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
  