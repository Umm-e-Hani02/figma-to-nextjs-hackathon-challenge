const ResponsiveCatalogueCard = ({
    carName,
    category,
    like,
    carImgSrc,
    carImgAlt,
    gasoline,
    car,
    capacity,
    price,
    actualPrice,
  }: {
    carName: string;
    category: string;
    like: string;
    carImgSrc: string;
    carImgAlt: string;
    gasoline: string;
    car: string;
    capacity: string;
    price: string;
    actualPrice?: string;
  }) => {
    return (
      <div className="w-[327px] h-[240px] bg-white rounded-lg shadow-lg p-5 flex flex-col">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-3">
          <div>
            <h2 className="text-[#1A202C] font-bold text-lg">{carName}</h2>
            <p className="text-sm text-[#90A3BF]">{category}</p>
          </div>
          <img src={like} alt="Like Icon" className="w-5 h-5" />
        </div>
  
        {/* Main Section */}
        <div className="flex">
          {/* Car Image */}
          <div className="flex-1">
            <img
              src={carImgSrc}
              alt={carImgAlt}
              className="w-[142px] h-[80px] object-contain mx-auto"
            />
          </div>
  
          {/* Features */}
          <div className="flex flex-col justify-center gap-2">
            <div className="flex items-center gap-2 text-sm text-[#90A3BF]">
              <img src="carcard/gas-station.png" alt="Gasoline" className="w-4 h-4" />
              {gasoline}
            </div>
            <div className="flex items-center gap-2 text-sm text-[#90A3BF]">
              <img src="carcard/manual.png" alt="Manual" className="w-4 h-4" />
              {car}
            </div>
            <div className="flex items-center gap-2 text-sm text-[#90A3BF]">
              <img src="carcard/people.png" alt="Capacity" className="w-4 h-4" />
              {capacity}
            </div>
          </div>
        </div>
  
        {/* Footer Section */}
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-[#1A202C] font-bold text-lg">
              {price}
              <span className="text-sm text-[#90A3BF] font-medium">/day</span>
            </p>
            {actualPrice && <del className="text-sm text-[#90A3BF]">{actualPrice}</del>}
          </div>
          <button className="bg-[#3563E9] w-[116px] h-10 rounded-md text-white hover:bg-[#3159d1] transition">
            Rent Now
          </button>
        </div>
      </div>
    );
  };
  
  export default ResponsiveCatalogueCard;
  