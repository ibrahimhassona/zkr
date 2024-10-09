import React, { useState, useEffect, useMemo } from 'react';

const prayerNamesArabic = {
  Fajr: "الفجر",
  Sunrise: "الشروق",
  Dhuhr: "الظهر",
  Asr: "العصر",
  Maghrib: "المغرب",
  Isha: "العشاء"
};

const parseTime = (timeString, date) => {
  const [hours, minutes] = timeString.split(':');
  const newDate = new Date(date);
  newDate.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);
  return newDate;
};

const CurrentPrayer = ({ prayerTimes }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const currentPrayer = useMemo(() => {
    if (!prayerTimes) return null;

    const now = currentDate;
    const currentPrayer = prayerTimes
      .slice()
      .reverse()
      .find(prayer => prayer.time <= now) || prayerTimes[prayerTimes.length - 1];

    const nextPrayer = prayerTimes.find(prayer => prayer.time > now) || prayerTimes[0];
    
    let timeDiff = nextPrayer.time - now;
    if (timeDiff < 0) timeDiff += 24 * 60 * 60 * 1000; // Add a day if it's tomorrow's prayer

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { 
      current: currentPrayer,
      next: nextPrayer,
      remaining: { hours, minutes, seconds }
    };
  }, [prayerTimes, currentDate]);

  if (!currentPrayer) return null;

  return (
    <div className="text-center p-4 bg-green-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">الصلاة الحالية</h2>
      <p className="text-lg">{currentPrayer.current.name}</p>
      <p className="text-sm text-gray-600">
        {currentPrayer.current.time.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}
      </p>
      <div>
      <h3 className="text-lg font-semibold mt-4 mb-2">الصلاة القادمة</h3>
      <p className="text-lg">{currentPrayer.next.name}</p>
      <p className="text-xl font-bold">
        {String(currentPrayer.remaining.hours).padStart(2, '0')}:
        {String(currentPrayer.remaining.minutes).padStart(2, '0')}:
        {String(currentPrayer.remaining.seconds).padStart(2, '0')}
      </p>
      </div>
      <p>
      <h3 className="text-lg font-semibold mt-4 mb-2">التاريخ الهجرى</h3>
      </p>
    </div>
  );
};

export default CurrentPrayer;