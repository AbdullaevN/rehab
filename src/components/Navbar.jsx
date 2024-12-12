import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: 'Главная страница', link: '/' },
  { name: 'Услуги', link: '/services' },
  { name: 'Программа', link: '/program' },
  { name: 'Команда', link: '/team' },
  { name: 'Отзывы', link: '/reviews' },
  { name: 'Цены', link: '/pricing' },
  { name: 'Оборудование', link: '/equipment' },
  { name: 'FAQ', link: '/faq' },
  { name: 'Контакты', link: '/contacts' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Функция для закрытия меню при клике
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-white">
      <nav className="mx-auto flex items-center justify-between p-6">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="logo" src="https://tailwindui.com/plus/img/logos/mark.svg" className="h-8 w-auto" />
          </a>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(true)} className="-m-2.5 p-2.5 text-gray-700">
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.link} className="text-sm font-semibold text-gray-900 hover:text-gray-400">
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="#" className="text-sm font-semibold text-gray-900 hover:text-gray-400">
            {/* Log in */}
          </Link>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <DialogPanel className="fixed inset-y-0 right-0 w-full bg-white px-6 py-6 sm:max-w-sm z-10">
          <div className="flex justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <img alt="logo" src="https://tailwindui.com/plus/img/logos/mark.svg" className="h-8 w-auto" />
            </a>
            <button onClick={() => setMobileMenuOpen(false)} className="-m-2.5 p-2.5 text-gray-700">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                onClick={closeMenu} // Закрытие меню при клике
              >
                {item.name}
              </Link>
            ))}
           
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
