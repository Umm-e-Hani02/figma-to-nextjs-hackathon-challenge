import { Star } from "lucide-react";
export default function DetailHero() {
  return (
    <div className="lg:w-[900px] xl:w-[1016px] flex flex-col lg:flex-row p-5 md:gap-y-5 gap-x-5 mx-auto lg:mx-0">

      <div className="w-[385px] lg:w-[350px] xl:w-[492px] h-[420px] flex flex-col">
        <img src="carcard/category.png" alt="" />
        <div className="flex gap-x-5 lg:gap-x-1 mt-5 xl:gap-x-9">
          <img className="h-24 xl:h-28" src="carcard/View1.png" alt="" />
          <img className="h-24 xl:h-28" src="carcard/View2.png" alt="" />
          <img className="h-24 xl:h-28" src="carcard/View3.png" alt="" />
        </div>
      </div>

      {/* Car details */}

      <div className="w-[385px] lg:w-[350px] xl:w-[492px] h-[450px] lg:h-[385px] xl:h-[470px] rounded-lg bg-[#FFFFFF] p-4">
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold lg:text-3xl text-2xl">Nissan GT-R</h2>
            <div className="flex items-center text-yellow-400 gap-1 mt-1">
              <Star fill="#FACC15" className="h-5"/>
              <Star fill="#FACC15" className="h-5"/>
              <Star fill="#FACC15" className="h-5"/>
              <Star fill="#FACC15" className="h-5"/>
              <Star className="text-gray-300 h-5" />
              <span className="text-[#596780] lg:text-base text-sm">440+ Reviewer</span>
            </div>
          </div>
          <div className="">
            <img src="carcard/RedLike.png" alt="" />
          </div>
        </div>
        <p className="text-[#596780] xl:leading-10 xl:text-xl pt-6 text-lg leading-7">
          NISMO has become the embodiment of Nissans outstanding performance
          inspires by the most unforgiving proving ground the race track
        </p>

        <div className="w-[444px] h-[72px] flex my-6 lg:mt-2 xl:my-6 gap-x-5">
          <div className="w-[170px] lg:w-[150px] xl:w-[200px] h-[72px]">
            <p className="flex justify-between">
              <span className="xl:text-xl text-[#90A3BF]">Type Car</span>
              <span className="xl:text-xl text-[#596780] font-semibold text-end">
                Sport
              </span>
            </p>

            <p className="flex justify-between">
              <span className="xl:text-xl text-[#90A3BF]">Steering</span>
              <span className="xl:text-xl text-[#596780] font-semibold text-end">
                Manual
              </span>
            </p>
          </div>

          <div className="w-[170px] lg:w-[150px] xl:w-[200px] h-[72px] ">
            <p className="flex justify-between">
              <span className="xl:text-xl text-[#90A3BF]">Capacity</span>
              <span className="xl:text-xl text-[#596780] font-semibold text-end">
                2 Person
              </span>
            </p>
            <p className="flex justify-between">
              <span className="xl:text-xl text-[#90A3BF]">Gasoline</span>
              <span className="xl:text-xl text-[#596780] font-semibold text-end">
                70L
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-12 lg:-mt-8 xl:mt-7">
          <div>
            <p className="text-[#1A202C] text-2xl font-bold">
              $80.00/ <span className="text-[#90A3BF] text-sm">days</span>
            </p>
            <del className="text-[#90A3BF] text-sm">$100.00</del>
          </div>
          <div>
            <button className="bg-[#3563E9] text-white w-[160px] h-14 text-center rounded-md hover:bg-[#3159d1]">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
