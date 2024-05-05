import React from "react";

export const Loading = () => (
  <div className="container sm:flex sm:flex-col sm:gap-15 flex flex-col gap-10">
    <div className="sm:flex sm:flex-row sm:gap-10 flex flex-col gap-10">
      <aside className="sm:w-[450px] w-full">
        <div className="rounded-md bg-gray-200 animate-pulse h-[300px] w-full" />{" "}
      </aside>
      <div className="flex flex-col justify-between text-gray-900 text-base md:text-[20px] max-sm:gap-5">
        <div className="text-4xl md:text-5xl bg-gray-300 animate-pulse h-14 w-full rounded-lg mb-4">
          <span className="invisible">text text text text text</span>
        </div>
        <div className="flex items-center bg-gray-300 animate-pulse rounded-lg mb-4"></div>
        <div className="bg-gray-300 animate-pulse h-5 w-1/3 rounded-lg mb-2"></div>
        <div className="bg-gray-300 animate-pulse h-5 w-1/4 rounded-lg mb-2"></div>
        <div className="bg-gray-300 animate-pulse h-5 w-1/2 rounded-lg mb-2"></div>
        <div className="bg-gray-300 animate-pulse h-5 w-1/2 rounded-lg mb-2"></div>
        <div className="bg-gray-300 animate-pulse h-5 w-1/3 rounded-lg mb-2"></div>
      </div>
    </div>
    <div className="flex gap-3 flex-wrap text-gray-900 border-t-4 pt-10">
      {" "}
      {[...Array(20)].map((_, index) => (
        <div key={index} className="p-2 bg-gray-300 rounded-2xl animate-pulse">
          <span className="text-gray-400"></span>
          <span className="text-orange-400"></span>
          <span className="text-gray-400"></span>
        </div>
      ))}
    </div>
  </div>
);

export default Loading;
