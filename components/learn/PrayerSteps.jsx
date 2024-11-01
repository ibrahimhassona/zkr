"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const PrayerSteps = ({ actions }) => {
    const [activeSteps, setActiveSteps] = useState([]);

    const toggleStep = (index) => {
        setActiveSteps((prevSteps) => 
            prevSteps.includes(index)
                ? prevSteps.filter((stepIndex) => stepIndex !== index)
                : [...prevSteps, index]
        );
    };

    return (
        <section className="mb-8">
            <h2 className="text-xl text-darkGray font-semibold mb-4">خطوات الصَّلَاةِ</h2>
            <div className="space-y-4 ">
                {actions.map((step, index) => (
                    <div key={index} className="rounded-md overflow-hidden w-[60%] max-lg:w-full">
                        <div
                            onClick={() => toggleStep(index)}
                            className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 cust-trans"
                        >
                            <h3 className="text-lg font-medium text-darkGray">
                                {index + 1}-{step.name}
                            </h3>
                            <IoIosArrowUp
                                className={`text-darkGray cust-trans ${
                                    activeSteps.includes(index) ? "rotate-180" : ""
                                }`}
                            />
                        </div>
                        {activeSteps.includes(index) && (
                            <div className="p-4 animate-fade-up cust-trans bg-gray-50 shadow-sm flex items-center flex-col-reverse justify-between gap-4">
                                <div>
                                    {step.description.map((desc, descIndex) => (
                                        <p key={descIndex} className="text-gray-700 mb-2">
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                                <Image
                                    src={step.image}
                                    width={400}
                                    height={400}
                                    className="rounded-md"
                                    alt={step.name}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PrayerSteps;