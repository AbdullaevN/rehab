import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="bg-gray-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Цены</h2>
        <p className="text-lg text-gray-700 mb-12">Выберите подходящий тариф для себя</p>

        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Месячная подписка</h3>
          <p className="text-xl text-gray-700 mb-6">1 месяц — 40,000 сомов</p>
          <p className="text-lg text-gray-600 mb-6">Включает полный доступ ко всем услугам и программам восстановления.</p>
          <a href="#contacts" className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
            Подписаться
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
