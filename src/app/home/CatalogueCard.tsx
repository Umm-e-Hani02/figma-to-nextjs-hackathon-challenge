const CatalogueCard = ({
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
    <div className=" md:w-[304px] h-[300px] md:h-[410px] rounded-md flex flex-col bg-[#FFFFFF] p-5 mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <h2 className="text-[#1A202C] font-bold text-xl flex flex-col">
            {carName}
            <span className="text-[#90A3BF] font-bold text-sm">{category}</span>
          </h2>
        </div>
        <div>
          <img src={like} alt="Like icon" className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>

      {/* Image Section */}
      <div className="my-8 sm:my-16 flex justify-center">
        <img
          src={carImgSrc}
          alt={carImgAlt}
          className="max-h-40 sm:max-h-64 object-contain"
        />
      </div>

      {/* Features Section */}
      <div className="flex gap-x-1 text-nowrap md:gap-4 mb-5 justify-center sm:justify-start">
        <p className="text-[#90A3BF] flex items-center md:gap-2 text-xs sm:text-sm">
          <img
            src="carcard/gas-station.png"
            alt="Gasoline Icon"
            className="w-4 h-4"
          />
          {gasoline}
        </p>
        <p className="text-[#90A3BF] flex items-center md:gap-2 text-xs sm:text-sm">
          <img src="carcard/manual.png" alt="Car Icon" className="w-4 h-4" />
          {car}
        </p>
        <p className="text-[#90A3BF] flex items-center md:gap-2 text-xs sm:text-sm">
          <img
            src="carcard/people.png"
            alt="Capacity Icon"
            className="w-4 h-4"
          />
          {capacity}
        </p>
      </div>

      <div className="flex md:justify-between items-center mb-4 gap-x-1">
        <div className="flex flex-col">
          <div>
            <p className="text-[#1A202C] font-bold text-xl md:text-2xl">
              {price}
              <span className="text-xs md:text-sm text-[#90A3BF] font-medium">day</span>
            </p>
            <del className="text-sm text-[#90A3BF]">{actualPrice}</del>
          </div>
        </div>
        <button className="bg-[#3563E9] text-xs md:text-base w-[116px] h-9 md:h-11 rounded-md text-center text-white hover:bg-[#3159d1]">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CatalogueCard;
