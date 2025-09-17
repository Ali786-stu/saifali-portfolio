import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a192f]">
      {/* Spinner with gradient border */}
      <div className="w-14 h-14 border-4 border-t-transparent border-r-transparent rounded-full animate-spin bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 p-1">
        <div className="w-full h-full rounded-full bg-gray-900"></div>
      </div>
    </div>
  );
};
// 
export default Loader;
