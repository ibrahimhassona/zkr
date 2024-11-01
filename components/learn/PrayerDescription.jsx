import React from 'react'

const PrayerDescription = ({pray_description}) => {
    const { title, description } = pray_description;

    return (
      <section className="mb-8 bg-gray-50 text-darkGray p-6 shadow-sm rounded-lg">
        <h2 className="text-xl font-semibold  mb-4">{title}</h2>
        <p className="">{description}</p>
      </section>
    );
}

export default PrayerDescription