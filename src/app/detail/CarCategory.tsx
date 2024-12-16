import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CatalogueCard from "../home/CatalogueCard";

export default function CarCategory() {
  return (
    <div>
      {/* Popular Cars */}
      <div className="w-[385px] lg:w-[785px] xl:w-[1016px] h-[452px] lg:flex flex-col bg-[#F6F7F9] mt-9 lg:px-10 md:px-5 px-10 md:mx-auto lg:mx-0 text-nowrap">
        <div className="flex justify-between">
          <h3 className="text-[#90A3BF] p-5">Recent Car</h3>
          <h3 className="text-[#3563E9] p-5 cursor-pointer hover:text-[#2950c5]">
            View All
          </h3>
        </div>
        
        <div className="lg:w-[720px] xl:w-[1015px] h-[388px] lg:grid-cols-2 xl:grid-cols-4 gap-x-64 lg:gap-x-28 xl:gap-x-80 hidden lg:grid -mx-4">
          <div>
            <CatalogueCard
              carName="Koenigsegg"
              category="Sport"
              like="carcard/RedLike.png"
              carImgSrc="carcard/koenigsegg.png"
              carImgAlt="Koenigsegg"
              gasoline="90L"
              car="Manual"
              capacity="2 People"
              price="$99.00/"
            />
          </div>

          <div>
            <CatalogueCard
              carName="Nissan GT-R"
              category="Sport"
              like="carcard/GrayLike.png"
              carImgSrc="carcard/nissangt-r.png"
              carImgAlt="Nissan GT-R"
              gasoline="80L"
              car="Manual"
              capacity="2 People"
              price="$80.00/"
              actualPrice="$100.00"
            />
          </div>

          <div className="lg:hidden xl:flex">
            <CatalogueCard
              carName="Rolls - Royce"
              category="Sedan"
              like="carcard/RedLike.png"
              carImgSrc="carcard/rolls-royce.png"
              carImgAlt="Rolls - Royce"
              gasoline="70L"
              car="Manual"
              capacity="4 People"
              price="$96.00/"
            />
          </div>
        </div>

        <div className="">
          <Carousel className="w-[385px] lg:hidden m-auto relative px-4">
            <CarouselContent>
              {[
                {
                  carName: "Koenigsegg",
                  category: "Sport",
                  like: "carcard/RedLike.png",
                  carImgSrc: "carcard/koenigsegg.png",
                  carImgAlt: "Koenigsegg",
                  gasoline: "90L",
                  car: "Manual",
                  capacity: "2 People",
                  price: "$99.00/",
                },
                {
                  carName: "Nissan GT-R",
                  category: "Sport",
                  like: "carcard/GrayLike.png",
                  carImgSrc: "carcard/nissangt-r.png",
                  carImgAlt: "Nissan GT-R",
                  gasoline: "80L",
                  car: "Manual",
                  capacity: "2 People",
                  price: "$80.00/",
                  actualPrice: "$100.00",
                },
                {
                  carName: "Rolls - Royce",
                  category: "Sedan",
                  like: "carcard/RedLike.png",
                  carImgSrc: "carcard/rolls-royce.png",
                  carImgAlt: "Rolls - Royce",
                  gasoline: "70L",
                  car: "Manual",
                  capacity: "4 People",
                  price: "$96.00/",
                },
              ].map((car, index) => (
                <CarouselItem key={index}>
                  <CatalogueCard {...car} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-7 top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="absolute left-[330px] top-1/2 transform -translate-y-1/2" />
          </Carousel>
        </div>
      </div>

      {/* Recommended Cars */}
      <div className="w-[385px] lg:w-[785px] xl:w-[1016px] h-[452px] lg:flex flex-col bg-[#F6F7F9] mt-9 lg:px-10 md:px-5 px-10 md:mx-auto lg:mx-0 text-nowrap">
        <div className="flex justify-between">
          <h3 className="text-[#90A3BF] p-5">Recommendation Car</h3>
          <h3 className="text-[#3563E9] p-5 cursor-pointer hover:text-[#2950c5]">
            View All
          </h3>
        </div>
        <div className="lg:w-[720px] xl:w-[1015px] h-[388px] lg:grid-cols-2 xl:grid-cols-4 gap-x-64 lg:gap-x-28 xl:gap-x-80 hidden lg:grid -mx-4">
          <div>
            <CatalogueCard
              carName="All New Rush"
              category="SUV"
              like="carcard/GrayLike.png"
              carImgSrc="carcard/allnewrush.png"
              carImgAlt="All New Rush"
              gasoline="80L"
              car="Manual"
              capacity="6 People"
              price="$72.00/"
              actualPrice="$80.00"
            />
          </div>
          <div>
            <CatalogueCard
              carName="CR - V"
              category="SUV"
              like="carcard/RedLike.png"
              carImgSrc="carcard/crv.png"
              carImgAlt="CR - V"
              gasoline="60L"
              car="Manual"
              capacity="6 People"
              price="$80.00/"
            />
          </div>
          <div className="lg:hidden xl:flex">
            <CatalogueCard
              carName="All New Terios"
              category="SUV"
              like="carcard/GrayLike.png"
              carImgSrc="carcard/terios.png"
              carImgAlt="All New Terios"
              gasoline="90L"
              car="Manual"
              capacity="6 People"
              price="$74.00/"
            />
          </div>
        </div>
        
        <Carousel className="w-[385px] lg:hidden m-auto relative px-4">
          <CarouselContent>
            {[
              {
                carName: "All New Rush",
                category: "SUV",
                like: "carcard/GrayLike.png",
                carImgSrc: "carcard/allnewrush.png",
                carImgAlt: "All New Rush",
                gasoline: "80L",
                car: "Manual",
                capacity: "6 People",
                price: "$72.00/",
                actualPrice: "$80.00",
              },
              {
                carName: "CR - V",
                category: "SUV",
                like: "carcard/RedLike.png",
                carImgSrc: "carcard/crv.png",
                carImgAlt: "CR - V",
                gasoline: "60L",
                car: "Manual",
                capacity: "6 People",
                price: "$80.00/",
              },
              {
                carName: "All New Terios",
                category: "SUV",
                like: "carcard/GrayLike.png",
                carImgSrc: "carcard/terios.png",
                carImgAlt: "All New Terios",
                gasoline: "90L",
                car: "Manual",
                capacity: "6 People",
                price: "$74.00/",
              },
            ].map((car, index) => (
              <CarouselItem key={index}>
                <CatalogueCard {...car} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute -left-7 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute left-[330px] top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </div>
  );
}
