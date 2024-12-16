// export default function Footer() {
//   return (
//     <footer className="max-w-[1440px] h-[480px] flex flex-col m-auto justify-center p-14">
//       <div className="justify-between flex gap-[450px]">
//         <div className="w-[292px] h-[108px]">
//           <h1 className="text-[#3563E9] text-3xl font-bold">MORENT</h1>
//           <p className="text-gray-600 text-justify">
//             Our vision is to provide convenience and help increase your sales
//             business
//           </p>
//         </div>
//         <div className="flex gap-6">
//           <div className="w-[152px] h-[244px]">
//             <h2 className="text-xl font-semibold">About</h2>
//             <div className="pt-3">
//               <p className="text-gray-600 pt-3">How it works</p>
//               <p className="text-gray-600 pt-3">Featured</p>
//               <p className="text-gray-600 pt-3">Partnership</p>
//               <p className="text-gray-600 pt-3">Business Relation</p>
//             </div>
//           </div>
//           <div className="w-[152px] h-[244px]">
//             <h2 className="text-xl font-semibold">Community</h2>
//             <div className="pt-3">
//               <p className="text-gray-600 pt-3">Events</p>
//               <p className="text-gray-600 pt-3">Blog</p>
//               <p className="text-gray-600 pt-3">Podcast</p>
//               <p className="text-gray-600 pt-3">Invite a friend</p>
//             </div>
//           </div>
//           <div className="w-[152px] h-[244px]">
//             <h2 className="text-xl font-semibold">Socials</h2>
//             <div className="pt-3">
//               <p className="text-gray-600 pt-3">Discord</p>
//               <p className="text-gray-600 pt-3">Instagram</p>
//               <p className="text-gray-600 pt-3">Twitter</p>
//               <p className="text-gray-600 pt-3">Facebook</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="border-t border-t-gray-400 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
//         <p className="text-[#1A202C] text-center md:text-left font-semibold">
//           &copy;2022 MORENT. All rights reserved.
//         </p>
//         <div className="flex items-center gap-6 mt-4 md:mt-0">
//           <p className="text-[#1A202C] font-semibold">Privacy & Policy</p>
//           <p className="text-[#1A202C] font-semibold">Terms & Condition</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className="w-full max-w-[1440px] flex flex-col mx-auto p-6 md:p-14">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-[]">
        {/* Logo Section */}
        <div className="w-full lg:w-[292px] mb-8 lg:mb-0">
          <h1 className="text-[#3563E9] text-3xl font-bold">MORENT</h1>
          <p className="text-gray-600 text-justify mt-4">
            Our vision is to provide convenience and help increase your sales
            business
          </p>
        </div>
        {/* Links Section */}
        <div className="grid grid-cols-2 flex-col-reverse md:grid-cols-3 gap-12 justify-between lg:justify-start">
          {/* About */}
          <div className="w-[152px]">
            <h2 className="text-xl font-semibold">About</h2>
            <div className="pt-3">
              <p className="text-gray-600 pt-3">How it works</p>
              <p className="text-gray-600 pt-3">Featured</p>
              <p className="text-gray-600 pt-3">Partnership</p>
              <p className="text-gray-600 pt-3">Business Relation</p>
            </div>
          </div>
          {/* Community */}
          <div className="w-[152px]">
            <h2 className="text-xl font-semibold">Community</h2>
            <div className="pt-3">
              <p className="text-gray-600 pt-3">Events</p>
              <p className="text-gray-600 pt-3">Blog</p>
              <p className="text-gray-600 pt-3">Podcast</p>
              <p className="text-gray-600 pt-3">Invite a friend</p>
            </div>
          </div>
          {/* Socials */}
          <div className="w-[152px]">
            <h2 className="text-xl font-semibold">Socials</h2>
            <div className="pt-3">
              <p className="text-gray-600 pt-3">Discord</p>
              <p className="text-gray-600 pt-3">Instagram</p>
              <p className="text-gray-600 pt-3">Twitter</p>
              <p className="text-gray-600 pt-3">Facebook</p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="md:border-t md:border-t-gray-400 mt-8 pt-4 flex md:flex-row justify-between md:items-center flex-col-reverse text-nowrap">
        <p className="text-[#1A202C] text-left font-semibold pt-10 md:pt-0">
          &copy;2022 MORENT. All rights reserved.
        </p>
        <div className="flex items-center gap-28 md:gap-6 mt-4 md:mt-0 text-nowrap ">
          <p className="text-[#1A202C] font-semibold">Privacy & Policy</p>
          <p className="text-[#1A202C] font-semibold">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}
