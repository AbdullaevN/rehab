import React from "react";
import FAQ from "./FAQ";
import { FaHandHoldingHeart, FaComments, FaRunning } from "react-icons/fa";

function Home() {
  return (
  <>
  
  <section id="home" className="relative bg-cover bg-center" 
  style={{ 
    backgroundImage: 'url(https://www.beechfieldhealthcare.ie/media/catalog/product/cache/2de07ac6d48e0e71ad0d17e6ba1a6fc1/c/o/cobi-bariatric-powerchair.jpg)', objectFit:"cover"  }}>

      
      {/* Затемнение фона */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto text-center relative z-10 py-20">
        <h2 className="text-4xl font-bold text-white mb-4">Добро пожаловать в Rehab Center</h2>
        <p className="text-lg text-white mb-8">
          Мы помогаем восстановить здоровье и вернуться к полноценной жизни. Наши методы основаны на научных исследованиях и многолетнем опыте.
        </p>
        <a href="#services" className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300">
          Узнать больше
        </a>
      </div>
    </section>




<section id="services" className="py-20 bg-white">
  <div className="container mx-auto text-center">
    <h3 className="text-3xl font-semibold mb-8">Наши Услуги</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* Услуги */}
      <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
        <FaHandHoldingHeart className="text-blue-600 text-5xl mb-4 mx-auto" />
        <h4 className="text-xl font-semibold mb-4">Терапия</h4>
        <p className="text-gray-600">
          Персонализированные программы реабилитации с учетом вашего состояния.
        </p>
      </div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
        <FaComments className="text-blue-600 text-5xl mb-4 mx-auto" />
        <h4 className="text-xl font-semibold mb-4">Консультации</h4>
        <p className="text-gray-600">
          Наши специалисты всегда готовы помочь вам и ответить на все вопросы.
        </p>
      </div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
        <FaRunning className="text-blue-600 text-5xl mb-4 mx-auto" />
        <h4 className="text-xl font-semibold mb-4">Физическая реабилитация</h4>
        <p className="text-gray-600">
          Восстановление после травм и операций с помощью современных методов.
        </p>
      </div>
    </div>
  </div>
</section>


    {/* <section id="team" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-8">Наша команда</h3>
        <div className="flex justify-center gap-12">
           <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h4 className="text-xl font-semibold">Д-р Иванов</h4>
            <p className="text-gray-600">Врач-реабилитолог с 10-летним стажем.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h4 className="text-xl font-semibold">Анна Петрова</h4>
            <p className="text-gray-600">Психолог, специалист по восстановлению после стресса и депрессии.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h4 className="text-xl font-semibold">Максим Козлов</h4>
            <p className="text-gray-600">Тренер по физической реабилитации, с опытом работы в спорте.</p>
          </div>
        </div>
      </div>
    </section> */}

    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-8">Отзывы</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Отзывы */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg w-80">
            <p className="text-gray-600 mb-4">"Реабилитация в Rehab Center изменила мою жизнь! Я вернулся к нормальной жизни и снова чувствую себя на высоте."</p>
            <p className="font-semibold">Иван Д.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg w-80">
            <p className="text-gray-600 mb-4">"Очень благодарен за профессионализм и внимание к каждому пациенту. Я чувствую себя намного лучше!"</p>
            <p className="font-semibold">Мария К.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="cta" className="py-20 bg-blue-600 text-white text-center">
  <h2 className="text-4xl font-semibold mb-4">Готовы начать?</h2>
  <p className="text-lg mb-8">
    Запишитесь на бесплатную консультацию сегодня и сделайте первый шаг к восстановлению.
  </p>
  <a
    href="https://wa.me/+996776021859?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%83%D1%8E%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E."
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-blue-600 py-3 px-6 rounded hover:bg-gray-100 transition duration-300"
  >
    Записаться
  </a>
</section>

    <section>
  <FAQ/>
</section>
  </>
  );
}

export default Home;
