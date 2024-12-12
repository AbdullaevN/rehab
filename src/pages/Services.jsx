import React from "react";
function Services() {
  const services = [
    { title: "Физическая реабилитация", description: "Восстановление после травм и операций." },
    { title: "Психологическая помощь", description: "Поддержка для вашего душевного здоровья." },
    { title: "Лечение зависимостей", description: "Программы для избавления от зависимостей." },
  ];
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Наши услуги</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white shadow rounded text-center">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;
