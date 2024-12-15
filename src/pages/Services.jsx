import React from "react";
import { FaBed, FaHeartbeat, FaDumbbell, FaTree } from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Проживание в отдельных комнатах",
      description: "Комфортабельные одно- и двухместные комнаты с удобствами для вашего полного восстановления.",
      icon: <FaBed className="text-4xl text-blue-600 mx-auto mb-4" />,
      image: "https://via.placeholder.com/400x300", // Замените на реальную ссылку
    },
    {
      title: "Лечение с проживанием",
      description: "Полный курс реабилитации с круглосуточным наблюдением специалистов и сбалансированным питанием.",
      icon: <FaHeartbeat className="text-4xl text-blue-600 mx-auto mb-4" />,
      image: "https://via.placeholder.com/400x300", // Замените на реальную ссылку
    },
    {
      title: "Разнообразные тренажеры",
      description: "Современные тренажеры для восстановления подвижности и укрепления мышц после травм.",
      icon: <FaDumbbell className="text-4xl text-blue-600 mx-auto mb-4" />,
      image: "https://via.placeholder.com/400x300", // Замените на реальную ссылку
    },
    {
      title: "Программы прогулок на природе",
      description: "Специально разработанные маршруты для восстановления сил и дыхательной гимнастики на свежем воздухе.",
      icon: <FaTree className="text-4xl text-blue-600 mx-auto mb-4" />,
      image: "https://via.placeholder.com/400x300", // Замените на реальную ссылку
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
