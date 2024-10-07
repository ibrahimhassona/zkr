"use client";
import React, { useState } from "react";
import { endPrayData } from "@/utils/endPray";

const MobileEndPray = () => {
    const [currentData, setCurrentData] = useState(endPrayData[0]);
    const [count, setCount] = useState(1);
    const [index, setIndex] = useState(0); // Using state for index
  
    const handleButtonClick = () => {
      // Ensure endPrayData exists and has elements
      if (endPrayData && endPrayData.length > 0) {
        const currentItem = endPrayData[index];
  
        if (count >= currentItem.count) {
          // Move to the next item if the count is met
          const nextIndex = index + 1;
  
          // If there's a next item, update the state
          if (nextIndex < endPrayData.length) {
            setIndex(nextIndex);
            setCurrentData(endPrayData[nextIndex]);
            setCount(1); // Reset count for the next item
          }
        } else {
          // Increment count
          setCount(count + 1);
        }
      }
  
      console.log("Count ===>", count);
      console.log("Index ===>", index);
    };
  return (
    <div className="h-[calc(100vh-(70px+60px))] overflow-hidden text-xs flex-col justify-between max-lg:flex hidden">
      <div className="grid grid-cols-6">
        {/* ----- Progress Section ----- */}
        <div className="flex flex-col items-start gap-2 p-2 col-span-2 border-gray-200">
          {endPrayData.map((item) => (
            <div className="flex items-center w-full" key={item.id}>
              <span
                className={`cust-trans ${
                  currentData.id >= item.id
                    ? "text-primary-dark font-bold"
                    : "text-gray-400"
                }`}
              >
                {`${item.id}- ${item.title} (${item.count})`}
              </span>
            </div>
          ))}
        </div>
        {/* ----- Repeat Section ----- */}
        <div className="flex flex-col col-span-4 gap-2 p-2">
          <span className="text-primary-dark my-2 font-bold w-full ">
            {count} مِنْ {currentData.count}
          </span>
          <div
            className={`flex gap-3 my-3 text-sm
        ${currentData.count > 1 ? "flex-wrap" : "flex-col-reverse"}`}
          >
            {currentData.seenby && (
              <p className="text-center text-secondary text-xs animate-jump-in">
                {currentData.seenby}
              </p>
            )}
            {Array.from({ length: count }).map((_, index) => (
              <span
                key={index}
                className=" text-primary-dark animate-jump-in h-fit"
              >
                {currentData.text}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* ----- Controller Section ----- */}
      <div className="flex flex-col justify-end w-[90%] gap-4 m-auto flex-1">
        <button
          onClick={handleButtonClick}
          className="py-3 mb-1 px-4 bg-primary text-white text-sm rounded-md cust-trans hover:bg-primary-dark"
          aria-label="Start Prayer"
        >
          {currentData.title}
        </button>
      </div>
    </div>
  );
};

export default MobileEndPray;
