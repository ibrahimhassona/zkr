
"use client"
import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdCircle } from 'react-icons/md';

const Arkan = ({arkan}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  // لون مخصص للنص الرمادي


  return (
    <div className="w-[60%] max-lg:w-full m-auto p-2">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="w-full  p-3 rounded-lg mb-2 flex items-center justify-between bg-gray-50 hover:bg-gray-100 cust-trans"
      >
        <span className="text-2xl max-sm:text-[20px] text-custGray font-bold">أركان الصلاة</span>
          <MdKeyboardArrowUp size={24} className={`text-custGray cust-trans ${isVisible ? "rotate-180":""}`} />
      </button>

      <div className={`grid grid-cols-2 gap-2 transition-all duration-500 ${
        isVisible ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden'
      }`}>
        {arkan.map((pillar, index) => (
          <div
            key={index}
            className="bg-gray-50  rounded-lg px-1 py-2 hover:shadow-sm transition-shadow"
          >
            <div className="flex flex-col justify-between items-start gap-2">
              <div className="flex items-center justify-center bg-custGray rounded-full max-sm:text-xs w-5 h-5 min-w-5 text-white text-sm">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-custGray text-base max-sm:text-sm max-sm:font-semibold font-bold mb-1 text-right">
                  {pillar.title}
                </h3>
                <p  className="text-sm text-custGray text-right">
                  {pillar.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arkan;