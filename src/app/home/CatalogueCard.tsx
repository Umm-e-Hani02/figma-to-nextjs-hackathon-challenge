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
    <div className="w-[304px] h-[410px] rounded-md flex flex-col bg-[#FFFFFF] p-5">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2 className="text-[#1A202C] font-bold text-xl flex flex-col">
            {carName}
            <span className="text-[#90A3BF] font-bold text-sm">{category}</span>
          </h2>
        </div>
        <div>
          <img src={like} alt="" />
        </div>
      </div>
      <div className="my-16">
        <img src={carImgSrc} alt={carImgAlt} />
      </div>
      <div className="flex gap-4 mb-5">
        <p className="text-[#90A3BF] flex">
          <img src="carcard/gas-station.png" alt="" />
          {gasoline}
        </p>
        <p className="text-[#90A3BF] flex">
          <img src="carcard/manual.png" alt="" />
          {car}
        </p>
        <p className="text-[#90A3BF] flex">
          <img src="carcard/people.png" alt="" />
          {capacity}
        </p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col">
          <div>
            <p className="text-[#1A202C] font-bold text-2xl">
              {price}
              <span className="text-sm text-[#90A3BF] font-medium">day</span>
            </p>
            <del className="text-sm text-[#90A3BF]">{actualPrice}</del>
          </div>
        </div>
        <button className="bg-[#3563E9] w-[116px] h-11 rounded-md text-center text-white hover:bg-[#3159d1]">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CatalogueCard;
