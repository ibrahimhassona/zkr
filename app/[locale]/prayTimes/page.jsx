import PrayerTimes from '@/components/timesPray/PrayerTimes'
import React from 'react'

const page = () => {
  return (
    <div className='cont bg-white'>
      <h1 className='text-primary-dark font-bold w-full text-center text-xl py-4'>مَواقيتُ الصَّلاةِ</h1>
      <PrayerTimes />
    </div>
  )
}

export default page