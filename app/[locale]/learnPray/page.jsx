import Arkan from "@/components/learn/Arkan";
import PrayerDescription from "@/components/learn/PrayerDescription";
import PrayerSteps from "@/components/learn/PrayerSteps";
import { steps_data_Pray } from "@/utils/salat_steps";
import React from "react";

const page = () => {
  return (
    <div className="cont mx-auto px-4 py-8">
      <h1 className="text-primary-dark font-bold w-full text-center text-xl py-4">
        تَعْلِيمُ الصَّلَاةِ
      </h1>
      <PrayerDescription pray_description={steps_data_Pray.pray_description} />
      <PrayerSteps actions={steps_data_Pray.actions}/>
      <Arkan arkan={steps_data_Pray.arkan} />
    </div>
  );
};

export default page;

