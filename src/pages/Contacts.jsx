import React from "react";

function Contacts() {
  return (
    <section id="contacts" className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Контакты</h2>
        <p className="mb-4">
          Адрес: Улица Звёздная, 7Б, Кадамжай, Баткенская область
        </p>
        <p className="mb-4">Телефон: +996 555 123 456</p>
        <p className="mb-8">Email: rehab@example.com</p>

        {/* Встроенная карта 2ГИС */}
        {/* <div className="mt-8 w-full h-80">
          <iframe
            src="https://go.2gis.com/k9fg7"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            allowFullScreen
            loading="lazy"
            title="Карта 2ГИС"
          ></iframe>
        </div> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d665.2334044761658!2d71.72915482111027!3d40.13255562525677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bbed020c995ddd%3A0xd8fedfd8a9159e4b!2z0KDQtdCw0LHQuNC70LjRgtCw0YbQuNC-0L3QvdGL0Lkg0YbQtdC90YLRgA!5e0!3m2!1sru!2skg!4v1734258769534!5m2!1sru!2skg"
          width="600"
          height="450"
          allowFullScreen=""
          style={{ border: 'none' }} // Исправленный стиль
          
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contacts;
