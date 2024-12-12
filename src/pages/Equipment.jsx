import React from 'react';

const Equipment = () => {
  const categories = [
    { title: 'Кардиотренажёры', image: 'https://via.placeholder.com/300', description: 'Современные беговые дорожки, эллипсоиды и велотренажёры для кардиотренировок.' },
    { title: 'Силовые тренажёры', image: 'https://via.placeholder.com/300', description: 'Оборудование для проработки всех групп мышц.' },
    { title: 'Массажные кабинеты', image: 'https://via.placeholder.com/300', description: 'Профессиональные кабинеты с современным оснащением.' },
    { title: 'Зал физиотерапии', image: 'https://via.placeholder.com/300', description: 'Пространство для реабилитации с новейшими технологиями.' },
    { title: 'Гидротерапия', image: 'https://via.placeholder.com/300', description: 'Бассейны и ванны для водных процедур.' },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Наше оборудование</h1>
      <p className="text-lg text-gray-700 mb-10 text-center">
        Мы гордимся своим современным оборудованием, которое помогает нашим клиентам достичь лучших результатов.
      </p>
      <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-1">
        {categories.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
