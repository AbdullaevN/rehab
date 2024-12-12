import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Колонка 1: Логотип и описание */}
          <div>
            <img src="https://tailwindui.com/plus/img/logos/mark.svg" alt="Company Logo" className="h-8 w-auto mb-4" />
            <p className="text-gray-400">Rehab</p>
          </div>

          {/* Колонка 2: Ссылки */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-400">Главная страница</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-400">Услуги</Link>
              </li>
              <li>
                <Link to="/program" className="hover:text-gray-400">Программа</Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-gray-400">Команда</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-gray-400">Отзывы</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-gray-400">Цены</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-gray-400">FAQ</Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-gray-400">Контакты</Link>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Контактная информация */}
          <div>
            <h3 className="text-lg font-semibold">Контакты</h3>
            <p className="text-gray-400">Адрес: ул. Примерная, 123, Город, Страна</p>
            <p className="text-gray-400">Телефон: +123 456 7890</p>
            <p className="text-gray-400">Email: example@example.com</p>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 Компания. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
