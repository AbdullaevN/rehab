import React from 'react';

const Program = () => {
  const programDetails = [
    {
      day: 'День 1',
      activities: 'Физиотерапия',
      equipment: ['Тренажёр для восстановления ног', 'Электростимуляторы'],
      image: 'https://via.placeholder.com/300',
    },
    {
      day: 'День 2',
      activities: 'Массаж',
      equipment: ['Массажные столы', 'Термомассажеры'],
      image: 'https://via.placeholder.com/300',
    },
    {
      day: 'День 3',
      activities: 'Гидротерапия',
      equipment: ['Гидромассажная ванна', 'Бассейн с подогревом'],
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Программа реабилитации</h1>
      <div className="space-y-10">
        {programDetails.map((detail, index) => (
          <div key={index} className="flex flex-col lg:flex-row gap-6 items-center">
            <img src={detail.image} alt={detail.day} className="w-full lg:w-1/3 rounded-lg shadow-md" />
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-semibold mb-2">{detail.day}</h2>
              <p className="text-gray-700 mb-4">Деятельность: {detail.activities}</p>
              <p className="text-gray-700 font-semibold mb-2">Используемое оборудование:</p>
              <ul className="list-disc list-inside text-gray-600">
                {detail.equipment.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
