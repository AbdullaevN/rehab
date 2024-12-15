import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Анна Смирнова",
      position: "Физиотерапевт",
      description: "Специалист с 10-летним опытом работы в восстановительной медицине.",
      photo: "https://via.placeholder.com/150", // Замените на реальное фото
    },
    {
      name: "Иван Петров",
      position: "Психолог",
      description: "Помогает пациентам восстановить душевное равновесие и уверенность.",
      photo: "https://via.placeholder.com/150", // Замените на реальное фото
    },
    {
      name: "Елена Кузнецова",
      position: "Реабилитолог",
      description: "Разрабатывает индивидуальные программы реабилитации.",
      photo: "https://via.placeholder.com/150", // Замените на реальное фото
    },
    {
      name: "Сергей Иванов",
      position: "Инструктор ЛФК",
      description: "Проводит занятия для укрепления и восстановления физического состояния.",
      photo: "https://via.placeholder.com/150", // Замените на реальное фото
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Наша команда</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Мы гордимся нашими специалистами, которые помогают пациентам обрести здоровье и уверенность.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.position}</p>
              <p className="text-gray-600 mt-4">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
