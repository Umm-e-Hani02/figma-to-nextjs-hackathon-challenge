import CatalogueCard from "../home/CatalogueCard";
import ResponsiveCatalogueCard from "../home/ResponsiveCatalogueCard";

export default function CategoryCar() {
  return (
    <div className="lg:flex flex-col bg-[#F6F7F9] mt-9 mx-auto">

      {/* For large screens */}

      <div className="mx-5 lg:grid grid-cols-2 xl:grid-cols-3 gap-x-7 hidden lg:gap-y-5 xl:gap-y-7">
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

        <div>
          <CatalogueCard
            carName="Rolls - Royce"
            category="Sedan"
            like="carcard/GrayLike.png"
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

        <div className="lg:hidden xl:flex">
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
      </div>

      {/* For small screens */}
      
      <div className="grid lg:hidden">
        <div className="my-4">
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
        </div>
        <div className="my-4">
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
        </div>
        <div className="my-4">
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
        </div>
        <div className="my-4">
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
        </div>
        <div className="my-4">
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
        <div className="my-4">
          <ResponsiveCatalogueCard
            carName="Rolls - Royce"
            category="Sedan"
            like="carcard/GrayLike.png"
            carImgSrc="carcard/rolls-royce.png"
            carImgAlt="Rolls - Royce"
            gasoline="70L"
            car="Manual"
            capacity="4 People"
            price="$96.00/"
          />
        </div>
        <div className="my-4">
          <ResponsiveCatalogueCard
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
      </div>
    </div>
  );
}
