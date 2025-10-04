// import React from "react";

// const Loader: React.FC = () => {
//   return (
//     <div className="fixed inset-0 flex justify-center items-center z-50 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a192f]">
//       {/* Spinner with gradient border---------------- */}
//       <div className="w-14 h-14 border-4 border-t-transparent border-r-transparent rounded-full animate-spin bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 p-1">
//         <div className="w-full h-full rounded-full bg-rose-700">

//         </div>
//       </div>
//     </div>
//   );
// };
// //
// export default Loader;
import loaderGif from "../assets/loader.gif"; // 👈 gif import

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex justify-center rounded-full overflow-hidden items-center z-50 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a192f]">
      <img
        src={loaderGif}
        alt="Loading..."
        className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-50 lg:h-50 animate-pulse rounded-full"
      />
    </div>
  );
};

export default Loader;
