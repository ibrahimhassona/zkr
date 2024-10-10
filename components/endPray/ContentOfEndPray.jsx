"use client"
import { useSelector } from "react-redux";
import DeskTopEndPray from "./DeskTopEndPray";
import MobileEndPray from "./MobileEndPray";
const ContentOfEndPray = () => {
  const currentPrayer = useSelector((state) => state.prayerTimes.pray);

  return (
    <>
      <MobileEndPray currentPrayer={currentPrayer} />
      <DeskTopEndPray currentPrayer={currentPrayer} />
    </>
  );
};

export default ContentOfEndPray;
