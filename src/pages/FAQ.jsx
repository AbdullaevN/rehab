import React, { useState } from 'react';

const faqData = [
  {
    question: 'Что такое Rehab Center?',
    answer: 'Rehab Center — это место, где мы помогаем людям восстановить здоровье, используя современные методы и подходы.'
  },
  {
    question: 'Какие услуги предоставляет центр?',
    answer: 'Мы предлагаем терапию, консультации, физическую реабилитацию и другие услуги для восстановления здоровья.'
  },
  {
    question: 'Как записаться на консультацию?',
    answer: 'Записаться на консультацию можно через наш сайт или по телефону, указанному в разделе "Контакты".'
  },
  {
    question: 'Какой опыт имеют ваши специалисты?',
    answer: 'Наши специалисты имеют многолетний опыт в области медицины и реабилитации, а также регулярно проходят курсы повышения квалификации.'
  },
  {
    question: 'Какие методы реабилитации используются в центре?',
    answer: 'Мы используем современные методы реабилитации, такие как физиотерапия, психотерапия и индивидуальные программы восстановления.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Закрыть вопрос, если он уже открыт
    } else {
      setOpenIndex(index); // Открыть новый вопрос
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Часто задаваемые вопросы</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left py-3 px-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
            >
              <span>{item.question}</span>
              <span className="text-xl">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-2 text-gray-700">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
