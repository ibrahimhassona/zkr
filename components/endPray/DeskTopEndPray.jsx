"use client";
import React, { useEffect, useState } from "react";
import {  getEndPrayData } from "@/utils/endPray";
import PopupAlert from "./PopupAlert";


const DeskTopEndPray = ({currentPrayer}) => {
  const endPrayData = getEndPrayData(currentPrayer.name)
  const [currentData, setCurrentData] = useState(endPrayData[0]);
  const [count, setCount] = useState(1);
  const [index, setIndex] = useState(0); // Using state for index
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  let compleated = index == endPrayData.length - 1 && endPrayData[index].count == count;
  const handlePopupClose = () => {
    setIsPopupVisible(false); // This function will hide the popup
  };
  const handleButtonClick = () => {
    if (compleated) {
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
  console.log("currentPrayer ===>", currentPrayer);
  currentPrayer
  return (
    <div className="grid grid-cols-3 gap-2 h-[calc(100vh-(70px+4rem))] max-lg:hidden ">
      {/* ============ Progress Section ============ */}
      <div className="flex  flex-col items-start gap-2">
        {endPrayData.map((item) => (
          <div className={`flex item-center cust-trans w-full ${currentData.id >= item.id ? 'animate-flip-up' : ''}`} key={item.id}>
            <span
              className={`cust-trans flex items-center gap-2 ${currentData.id > item.id
                ? "text-primary-dark font-bold"
                : currentData.id==item.id ?'text-blue-400 font-bold':"text-gray-400"
                }`}
            >
              <span className={`h-[10px] block w-[10px] border border-custGray  rounded-full  ${currentData.id > item.id ? 'border-primary-dark bg-primary-dark' : currentData.id==item.id ? 'bg-blue-400 !border-blue-400':'bg-white'}`}></span>{`${item.title} `}
              <span className='text-[9px]'>{`(${item.count})`}</span>
            </span>
          </div>
        ))}
      </div>
      {/* ============ Controller Section ============ */}
      <div className="flex flex-col gap-2 justify-end p-4">
        <button
          onClick={handleButtonClick}
          className="py-2 px-2 bg-primary text-white rounded-sm cust-trans hover:bg-primary-dark"
          aria-label="Start Prayer"
          disabled={isPopupVisible}
        >
          {currentData.title}
          <span className='mx-1'>{`{${count}}`}</span>
        </button>
         {/* ----------- Reset ---------- */}
         {compleated ? <button onClick={() => {setCurrentData(endPrayData[0]) ,setCount(1),setIndex(0),setIsPopupVisible(false)}} className='py-2 px-2 bg-primary text-white rounded-sm cust-trans hover:bg-primary-dark'>إعادة خَتْمِ الصَّلَاةِ</button>:null}
      </div>
      {/* ============ Repeat Section ============ */}
      <div className="flex flex-col gap-2 ">
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
          {/* ----- Seen By  ------ */}
          {currentData.seenby && (
            <p className="text-center text-secondary animate-jump-in mt-4">
              {currentData.seenby}
            </p>
          )}
          {Array.from({ length: count }).map((_, index) => (
            <span
              key={index}
              className="text-center text-primary-dark animate-flip-up h-fit"
            >
              {currentData.text}
            </span>
          ))}
        </div>
      </div>

      {isPopupVisible && (
        <PopupAlert isVisible={isPopupVisible} onClose={handlePopupClose} />
      )}
    </div>
  );
};

export default DeskTopEndPray;
