import { Star } from "lucide-react";

export default function RightContainer() {
  return (
    <div className="mx-6 md:w-[570px] h-[465px] bg-white rounded-lg p-6 lg:m-6 md:mx-auto mt-6">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-xl font-bold text-[#1A202C]">Rental Summary</h2>
        <p className="text-sm text-[#90A3BF]">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>
      </div>

      {/* Car Details */}
      <div className="flex items-center gap-4 mb-5">
        <div>
          <img
            src="Look.png"
            alt="Car"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#1A202C]">Nissan GT - R</h2>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex text-yellow-400 ">
              <Star fill="#FACC15"/>
              <Star fill="#FACC15"/>
              <Star fill="#FACC15"/>
              <Star fill="#FACC15"/>
              <Star className="text-gray-300" />
            </div>
            <p className="text-[14px] text-[#90A3BF] ml-2 text-nowrap">440+ Reviewer</p>
          </div>
        </div>
      </div>

      {/* Subtotal & Tax */}
      <div className="border-t border-gray-200 pt-4 mb-5">
        <div className="flex justify-between text-sm text-[#1A202C] mb-2">
          <span className="text-[#90A3BF]">Subtotal</span>
          <span className="font-semibold">$80.00</span>
        </div>
        <div className="flex justify-between text-sm text-[#1A202C]">
          <span className="text-[#90A3BF]">Tax</span>
          <span className="font-semibold">$0</span>
        </div>
      </div>

      {/* Promo Code */}
      <div className="mb-5">
        <div className="flex items-center bg-gray-100 rounded-lg p-3">
          <input
            type="text"
            placeholder="Apply promo code"
            className="flex-1 bg-transparent text-sm text-[#1A202C] outline-none"
          />
          <button className="text-sm text-[#1A202C] font-semibold">Apply now</button>
        </div>
      </div>

      {/* Total Rental Price */}
      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-[#1A202C]">Total Rental Price</h3>
          <span className="text-lg font-bold text-[#1A202C]">$80.00</span>
        </div>
        <p className="text-sm text-[#90A3BF]">
          Overall price and includes rental discount
        </p>
      </div>
    </div>
  );
}
