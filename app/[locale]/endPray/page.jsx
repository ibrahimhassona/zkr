import ContentOfEndPray from '@/components/endPray/ContentOfEndPray'
import React from 'react'
const page = () => {
  return (
    <div className='w-full h-[calc(100vh-70px)] cont'>
      <h1 className='text-primary-dark font-bold w-full text-center text-xl py-4'>خَتْمُ الصَّلَاةِ</h1>
      <ContentOfEndPray />
    </div>
  )
}

export default page