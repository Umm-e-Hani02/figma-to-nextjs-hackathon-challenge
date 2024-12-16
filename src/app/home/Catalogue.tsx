import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CatalogueCard from "./CatalogueCard";
import ResponsiveCatalogueCard from "./ResponsiveCatalogueCard";

export default function Catalogue() {
  return (
    <>
      {/* Popular Cars */}
      <div className="h-[452px] lg:flex flex-col bg-[#F6F7F9] mt-9 px-10">
        <div className="flex justify-between">
          <h3 className="text-[#90A3BF] p-5">Popular Car</h3>
          <h3 className="text-[#3563E9] p-5 cursor-pointer hover:text-[#2950c5]">View All</h3>
        </div>
        <div className="h-[388px] md:grid md:grid-cols-2 md:gap-x-32 md:m-auto xl:grid-cols-4 xl:gap-x-10 hidden">
          <div className="md:mb-5">
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

          <div>
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
        </div>
        
          <Carousel className="w-full max-w-[400px] md:hidden m-auto relative px-4">
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
            <CarouselNext className="absolute -right-5 top-1/2 transform -translate-y-1/2" />
          </Carousel>
      </div>

      {/* Recommended Cars */}
      <div className="h-[1280px] md:h-[872px] flex flex-col bg-[#F6F7F9] mt-9 px-10 md:mt-[450px] xl:mt-9">
        <div className="flex justify-between">
          <h3 className="text-[#90A3BF] p-5">Recommended Car</h3>
        </div>
        <div className="h-[388px] grid-cols-1 gap-x-10 hidden md:grid md:grid-cols-2 md:gap-x-32 md:m-auto xl:grid-cols-4 xl:gap-x-10">
          <div className="md:mb-5">
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
          <div>
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
        </div>

        <div className="h-[388px] grid-cols-1 gap-x-10 hidden md:grid md:grid-cols-2 md:gap-x-32 md:m-auto xl:grid-cols-4 xl:gap-x-10 md:mt-[470px] xl:mt-14">
          <div className="md:mb-5">
            <CatalogueCard
              carName="MG ZX Exclusive"
              category="Hatchbook"
              like="carcard/RedLike.png"
              carImgSrc="carcard/mgzx.png"
              carImgAlt="MG ZX Exclusive"
              gasoline="70L"
              car="Manual"
              capacity="4 People"
              price="$76.00/"
              actualPrice="$80.00"
            />
          </div>
          <div>
            <CatalogueCard
              carName="New MGZS"
              category="SUV"
              like="carcard/GrayLike.png"
              carImgSrc="carcard/mgzs.png"
              carImgAlt="New MGZS"
              gasoline="80L"
              car="Manual"
              capacity="6 People"
              price="$80.00/"
            />
          </div>
          <div>
            <CatalogueCard
              carName="MG ZX Excite"
              category="Hatchbook"
              like="carcard/RedLike.png"
              carImgSrc="carcard/mgzx.png"
              carImgAlt="MG ZX Excite"
              gasoline="90L"
              car="Manual"
              capacity="4 People"
              price="$74.00/"
            />
          </div>
          <div>
            <CatalogueCard
              carName="New MGZS"
              category="SUV"
              like="carcard/GrayLike.png"
              carImgSrc="carcard/mgzs.png"
              carImgAlt="New MGZS"
              gasoline="80L"
              car="Manual"
              capacity="6 People"
              price="$80.00/"
            />
          </div>
        </div>

        {/* Responsive Catalogue Cards for Mobile */}
        <div className="h-[1380px] md:hidden m-auto">
          <div className="grid grid-cols-1 gap-y-5">
            <ResponsiveCatalogueCard
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
            <ResponsiveCatalogueCard
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
            <ResponsiveCatalogueCard
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
            <ResponsiveCatalogueCard
              carName="New MG ZS"
              category="SUV"
              like="carcard/GrayLike.png"
              carImgSrc="carcard/mgzs.png"
              carImgAlt="New MG ZS"
              gasoline="80L"
              car="Manual"
              capacity="6 People"
              price="$80.00/"
            />
            <ResponsiveCatalogueCard
              carName="MG ZX Exclusive"
              category="Hatchback"
              like="carcard/RedLike.png"
              carImgSrc="carcard/mgzx.png"
              carImgAlt="MG ZX Exclusive"
              gasoline="70L"
              car="Manual"
              capacity="4 People"
              price="$76.00/"
              actualPrice="$80.00"
            />
          </div>
        </div>
      </div>
    </>
  );
}
