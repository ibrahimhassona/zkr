// import React from 'react'

// const Arkan = ({arkan}) => {
//     return (
//         <section>
//           <h2 className="text-2xl font-semibold text-custGray mb-6">أركان الصلاة</h2>
//           <div className="grid md:grid-cols-2 gap-4">
//             {arkan.map((pillar, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-100 p-4 rounded-lg hover:shadow-md transition"
//               >
//                 <h3 className="text-lg font-medium text-custGray mb-2">
//                   {pillar.title}
//                 </h3>
//                 <p className="text-gray-700">{pillar.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       );
  
// }

// export default Arkan
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
        <span className="text-2xl text-custGray font-bold">أركان الصلاة</span>
          <MdKeyboardArrowUp size={24} className={`text-custGray cust-trans ${isVisible ? "rotate-180":""}`} />
      </button>

      <div className={`grid grid-cols-2 gap-2 transition-all duration-500 ${
        isVisible ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden'
      }`}>
        {arkan.map((pillar, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-3 hover:shadow-sm transition-shadow"
          >
            <div className="flex justify-between items-start gap-2">
              <div className="flex items-center justify-center bg-custGray rounded-full w-6 h-6 min-w-6 text-white text-sm">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-custGray text-base font-bold mb-1 text-right">
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