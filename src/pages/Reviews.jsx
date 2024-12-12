import React from "react";

function Reviews() {
  const reviews = [
    {
      name: "Иван Иванов",
      text: "Благодаря центру я восстановился после травмы. Отличные специалисты помогли мне за короткое время обрести силу и уверенность. Рекомендую всем!",
      photo: "https://via.placeholder.com/100",
      rating: 5,
    },
    {
      name: "Анна Смирнова",
      text: "Очень понравилась уютная атмосфера и внимательное отношение. Я получила полноценную помощь, и мой прогресс был заметен с первых недель.",
      photo: "https://via.placeholder.com/100",
      rating: 4,
    },
    {
      name: "Сергей Кузнецов",
      text: "Спасибо вашему центру за высокий профессионализм! Моя спина снова здорова, а процесс реабилитации оказался комфортным и эффективным.",
      photo: "https://via.placeholder.com/100",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Отзывы наших клиентов</h2>
        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1">
          {reviews?.map((review, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-left">
              <div className="flex items-center mb-4">
                <img
                  src={review.photo}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.19c.969 0 1.371 1.24.588 1.81l-3.397 2.472a1 1 0 00-.364 1.118l1.286 3.963c.3.921-.755 1.688-1.54 1.118l-3.398-2.472a1 1 0 00-1.175 0l-3.398 2.472c-.784.57-1.839-.197-1.539-1.118l1.286-3.963a1 1 0 00-.364-1.118L2.093 9.39c-.784-.57-.38-1.81.588-1.81h4.19a1 1 0 00.951-.69l1.287-3.963z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
