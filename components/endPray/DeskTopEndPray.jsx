"use client";
import React, { useEffect, useState } from "react";
import { endPrayData } from "@/utils/endPray";
import PopupAlert from "./PopupAlert";

const DeskTopEndPray = () => {
  const [currentData, setCurrentData] = useState(endPrayData[0]);
  const [count, setCount] = useState(1);
  const [index, setIndex] = useState(0); // Using state for index
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupClose = () => {
    setIsPopupVisible(false); // This function will hide the popup
  };
  const handleButtonClick = () => {
    if (index == endPrayData.length-1) {
      setIsPopupVisible(true)
    }
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
    <div className="grid grid-cols-3 gap-2 h-[calc(100vh-(70px+4rem))] max-lg:hidden ">
      {/* ----- Repeat Section ----- */}
      <div className="flex flex-col gap-2 justify-between">
        <span className="text-center text-primary-dark my-2 font-bold">
          {count} مِنْ {currentData.count}
        </span>
        <div
          className={` p-4 
        ${currentData.count > 1
              ? "flex items-start gap-3 flex-wrap"
              : "flex flex-col-reverse"
            }`}
        >
          {Array.from({ length: count }).map((_, index) => (
            <span
              key={index}
              className="text-center text-primary-dark animate-jump-in h-fit"
            >
              {currentData.text}
            </span>
          ))}
        </div>
      </div>

      {/* ----- Controller Section ----- */}
      <div className="flex flex-col-reverse justify-between p-4">
        <button
          onClick={handleButtonClick}
          className="py-2 px-2 bg-primary text-white rounded-sm cust-trans hover:bg-primary-dark"
          aria-label="Start Prayer"
        >
          {currentData.title}
        </button>
        {currentData.seenby && (
          <p className="text-center text-secondary animate-jump-in">
            {currentData.seenby}
          </p>
        )}
      </div>

      {/* ----- Progress Section ----- */}
      <div className="flex  flex-col items-start gap-2">
        {endPrayData.map((item) => (
          <div className="flex item-center w-full" key={item.id}>
            <span
              className={`cust-trans ${currentData.id >= item.id
                ? "text-primary-dark"
                : "text-gray-400"
                }`}
            >
              {`${item.id}- ${item.title}${" "}(${item.count})`}
            </span>
          </div>
        ))}
      </div>
      {isPopupVisible && (
        <PopupAlert isVisible={isPopupVisible} onClose={handlePopupClose} />
      )}
    </div>
  );
};

export default DeskTopEndPray;
