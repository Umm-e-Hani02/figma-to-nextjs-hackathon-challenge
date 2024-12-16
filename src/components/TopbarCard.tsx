const TopBar = ({ heading }: { heading: string }) => {
  return (
    <section className="max-w-[1440px] w-full h-auto md:h-[141px] bg-white text-black flex flex-col lg:flex-row lg:justify-between lg:items-center px-6">
      {/* Left Section (Logo + Heading) */}
      <div className="flex flex-1 items-center gap-3 mt-6 md:mt-0">
        {/* Logo */}
        <div className="h-8 w-8 flex-shrink-0">
          <img src="command.png" alt="logo" />
        </div>
        {/* Heading */}
        <h1 className="text-xl md:text-3xl font-bold leading-tight md:whitespace-nowrap break-words ">
          {heading}
        </h1>
      </div>

      {/* Right Section (Last Updated) */}
      <div className="flex-shrink-0 mt-4 md:mt-0 text-sm md:text-base text-nowrap ">
        <span className="text-[#666666]">Last Updated:</span>
        <span className="text-[#000000] font-bold ml-1">8 Aug 2022</span>
      </div>
    </section>
  );
};

export default TopBar;
