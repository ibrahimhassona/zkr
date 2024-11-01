import React from 'react'

const Arkan = ({arkan}) => {
    return (
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-6">أركان الصلاة</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {arkan.map((pillar, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg hover:shadow-md transition"
              >
                <h3 className="text-lg font-medium text-primary mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-700">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>
      );
  
}

export default Arkan

