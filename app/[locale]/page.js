import PrayerTimes from "@/components/timesPray/PrayerTimes";


export default function Home() {
  
  return (
    <div className="">
      <h1 className='text-primary-dark font-bold w-full text-center text-xl py-4'>مَواقيتُ الصَّلاةِ</h1>

     <PrayerTimes />
    </div>
  );
}
