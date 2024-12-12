import React from "react";
function Reviews() {
  const reviews = [
    { name: "Иван Иванов", text: "Благодаря центру я восстановился после травмы!" },
    { name: "Анна Смирнова", text: "Отличные специалисты и уютная атмосфера." },
  ];
  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Отзывы наших клиентов</h2>
        <div className="space-y-6">
          {reviews?.map((review, index) => (
            <div key={index} className="bg-white p-6 shadow rounded">
              <p className="text-gray-600 italic">"{review.text}"</p>
              <h3 className="text-lg font-semibold mt-4">— {review.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Reviews;
