"use client"
import React, { useState, useEffect, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setCurrentPrayer } from '@/redux/slices/prayerTimesSlice';


// تعريف البيانات الثابتة للدول والمدن
const countries = {
  "EG": {
    "name": "مصر",
    "cities": {
      "القاهرة": "Cairo",
      "الإسكندرية": "Alexandria",
      "الجيزة": "Giza",
      "شرم الشيخ": "Sharm El Sheikh",
      "الأقصر": "Luxor"
    }
  },
  "SA": {
    "name": "السعودية",
    "cities": {
      "الرياض": "Riyadh",
      "جدة": "Jeddah",
      "مكة": "Mecca",
      "المدينة": "Madinah",
      "الخبر": "Khobar"
    }
  },
  "JO": {
    "name": "الأردن",
    "cities": {
      "عمان": "Amman",
      "الزرقاء": "Zarqa",
      "إربد": "Irbid",
      "الكرك": "Karak"
    }
  }
};

// أسماء الصلوات بالعربية
const prayerNamesArabic = {
  Fajr: "الفجر",
  Sunrise: "الشروق",
  Dhuhr: "الظهر",
  Asr: "العصر",
  Maghrib: "المغرب",
  Isha: "العشاء"
};

// دالة لجلب أوقات الصلاة من API
const fetchPrayerTimes = async (city, country) => {
  const res = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=8`);
  if (!res.ok) throw new Error('فشل في جلب أوقات الصلاة');
  return res.json();
};

// Hook مخصص لاستخدام localStorage
const useLocalStorage = (key, initialValue) => {
  // استخدام useState مع دالة للتهيئة
  const [storedValue, setStoredValue] = useState(() => {
    // التحقق من وجود window (للتأكد من أننا في بيئة المتصفح)
    if (typeof window === "undefined") return initialValue;
    try {
      // محاولة استرجاع القيمة من localStorage
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // دالة لتحديث القيمة في State و localStorage
  const setValue = (value) => {
    try {
      setStoredValue(value);
      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

// دالة مساعدة لتحليل الوقت من نص إلى كائن Date
const parseTime = (timeString, date) => {
  const [hours, minutes] = timeString.split(':');
  const newDate = new Date(date);
  newDate.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);
  return newDate;
};

export default function PrayerTimes() {
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useLocalStorage('country', 'SA');
  const [selectedCity, setSelectedCity] = useLocalStorage('city', 'جدة');
  const [currentDate, setCurrentDate] = useState(() => new Date());

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['prayerTimes', selectedCity, selectedCountry],
    queryFn: () => fetchPrayerTimes(countries[selectedCountry].cities[selectedCity], selectedCountry),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    retry: 3,
    onError: (error) => {
      console.error('Error fetching prayer times:', error);
    }
  });

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    refetch();
  };
  
  const handleCountryChange = (e) => {
    const newCountry = e.target.value;
    setSelectedCountry(newCountry);
    setSelectedCity(Object.keys(countries[newCountry].cities)[0]);
    refetch();
  };

  const prayerTimes = useMemo(() => {
    if (!data || !data.data || !data.data.timings || !data.data.date) return null;

    const { timings, date } = data.data;
    const todayDate = `${date.gregorian.year}-${date.gregorian.month.number.toString().padStart(2, '0')}-${date.gregorian.day}`;

    return Object.entries(timings)
      .filter(([key]) => ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].includes(key))
      .map(([key, time]) => ({
        name: prayerNamesArabic[key],
        time: parseTime(time, todayDate),
      }))
      .sort((a, b) => a.time - b.time);
  }, [data]);

  const currentPrayer = useMemo(() => {
    if (!prayerTimes) return null;

    const now = currentDate;
    return prayerTimes.reduce((prev, current) => {
      if (current.time <= now) return current;
      return prev;
    }, prayerTimes[prayerTimes.length - 1]);
  }, [prayerTimes, currentDate]);

  useEffect(() => {
    if (currentPrayer) {
      dispatch(setCurrentPrayer({ name: currentPrayer.name, time: currentPrayer.time.toLocaleTimeString() }));
    }
  }, [currentPrayer, dispatch]);

  const nextPrayer = useMemo(() => {
    if (!prayerTimes) return null;

    const now = currentDate;
    const nextPrayer = prayerTimes.find(prayer => prayer.time > now) || prayerTimes[0];
    let timeDiff = nextPrayer.time - now;
    if (timeDiff < 0) timeDiff += 24 * 60 * 60 * 1000;

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { ...nextPrayer, remaining: { hours, minutes, seconds } };
  }, [prayerTimes, currentDate]);

  if (isLoading) return <p className="text-center">جارٍ جَلْبِ أَوْقَاتِ الصَّلَاةِ...</p>;
  
  if (error) return (
    <div className="text-center text-red-500">
      <p>حدث خطأ أثناء جلب أوقات الصلاة</p>
      <button onClick={() => refetch()} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">إعادة المحاولة</button>
    </div>
  );

  return (
    <div className="max-w-md mx-auto p-4 text-custGray">
      {nextPrayer && (
        <div className="text-center mb-4">
          <p className="text-lg font-semibold bg-green-50 rounded-sm py-2">الصلاة القادمة: <span className='text-primary-dark'>{nextPrayer.name}</span></p>
          <p className="text-xl">
            {String(nextPrayer.remaining.hours).padStart(2, '0')}:
            {String(nextPrayer.remaining.minutes).padStart(2, '0')}:
            {String(nextPrayer.remaining.seconds).padStart(2, '0')}
          </p>
        </div>
      )}
      <div className='flex items-center justify-between gap-2 mb-4'>
        <select 
          className='border rounded-sm w-full p-1 bg-green-50 text-primary-dark font-bold' 
          value={selectedCountry} 
          onChange={handleCountryChange}
        >
          {Object.entries(countries).map(([key, { name }]) => (
            <option key={key} value={key}>{name}</option>
          ))}
        </select>
        <select 
          className='border rounded-sm w-full p-1 bg-green-50 text-primary-dark font-bold' 
          value={selectedCity} 
          onChange={handleCityChange}
        >
          {Object.keys(countries[selectedCountry].cities).map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
      {prayerTimes ? (
        <ul className='space-y-2'>
          {prayerTimes.map((prayer, index) => (
            <li key={index} className={`p-2 rounded cust-trans ${currentPrayer && prayer.name === currentPrayer.name ? 'bg-red-100' : ''} ${nextPrayer && prayer.name === nextPrayer.name ? 'bg-green-100' : ''}`}>
              <span className="font-semibold">{prayer.name}:</span>{' '}
              {prayer.time.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-red-500">لا توجد بيانات متاحة. يرجى المحاولة مرة أخرى لاحقًا.</p>
      )}
    </div>
  );
}