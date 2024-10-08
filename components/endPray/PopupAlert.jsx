import React from 'react';
import { MdClose, MdOutlineDone } from "react-icons/md";
import { FaHandsPraying } from "react-icons/fa6";

const PopupAlert = ({ isVisible, onClose }) => {
    if (!isVisible) return null; // Don't render the component if it's not visible

    return (
        <div className='h-[50%] max-sm:w-full w-[90%] absolute bg-gray-50 shadow-md rounded-md p-4 flex flex-col gap-5 items-center justify-center inset-0 m-auto animate-flip-up'>
            <MdClose 
                onClick={onClose} // Use the passed onClose function
                className='absolute top-1 right-1 cust-trans hover:text-secondary-dark cursor-pointer text-secondary shadow-sm rounded-sm' 
                size={30} 
            />
            <div className='flex items-center gap-2'>
                <p className='text-primary-dark font-bold'>أَتْمَمْتُ خَتْمَ الصَّلَاةِ، تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ</p>
                <MdOutlineDone size={40} className='text-white bg-primary-dark rounded-full' />
            </div>
            <p className='text-secondary font-bold flex items-center gap-2'>لَا تَنْسُونَا مِنْ صَالِحِ الدُّعَاءِ<FaHandsPraying size={20}/>
            </p>
        </div>
    );
};

export default PopupAlert;
