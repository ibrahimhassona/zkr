"use client"
import { steps_data_Pray } from '@/utils/salat_steps';
import React, { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";

const page = () => {
  // return (
  //   <div className='text-primary h-[calc(100vh-70px)] font-bold flex items-center justify-center'>تَحْتَ الْأِنْشَاءِ </div>
  // )
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-8 text-center">
      تَعْلِيمُ الصَّلَاةِ
      </h1>
      
      <PrayerDescription />
      <PrayerSteps />
      <PrayerPillars />
    </div>
  );
}

export default page



// Prayer Description Component
function PrayerDescription() {
  const { title, description } = steps_data_Pray.pray_description;
  
  return (
    <section className="mb-8 bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-primary mb-4">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </section>
  );
}

// Prayer Steps Component
function PrayerSteps() {
  const [activeStep, setActiveStep] = useState(null);

  const toggleStep = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-primary mb-6">خطوات الصلاة</h2>
      <div className="space-y-4">
        {steps_data_Pray.actions.map((step, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <div 
              onClick={() => toggleStep(index)}
              className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer hover:bg-gray-200 transition"
            >
              <h3 className="text-lg font-medium text-primary">{step.name}</h3>
              {activeStep === index ? <IoIosArrowUp className="text-primary" /> : <IoIosArrowUp className="text-primary" />}
            </div>
            {activeStep === index && (
              <div className="p-4 bg-white">
                {step.description.map((desc, descIndex) => (
                  <p key={descIndex} className="text-gray-700 mb-2">{desc}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// Prayer Pillars Component
function PrayerPillars() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-primary mb-6">أركان الصلاة</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {steps_data_Pray.arkan.map((pillar, index) => (
          <div 
            key={index} 
            className="bg-gray-100 p-4 rounded-lg hover:shadow-md transition"
          >
            <h3 className="text-lg font-medium text-primary mb-2">{pillar.title}</h3>
            <p className="text-gray-700">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
