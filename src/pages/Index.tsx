import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';

const Index = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-600 p-4 shadow-md flex justify-between">
        <div className="text-white font-bold text-lg">
          <Link to="/">OmegaPetShop</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/userregister" className="text-white hover:text-gray-300">Registrarse</Link>
          <Link to="/userlogin" className="text-white hover:text-gray-300">Iniciar Sesión</Link>
        </div>
      </nav>

      <main className="p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Bienvenido a OmegaPetShop</h1>
        <div className="mb-8">
          <Carousel /> {/* Aquí agregamos el carrusel funcional */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="src/img/image1.jpg" alt="Imagen 1" className="w-full h-auto mb-4 rounded" />
            <h2 className="text-2xl font-bold mb-2">Producto o Servicio 1</h2>
            <p>Descripción breve del producto o servicio.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="src/img/image2.jpg" alt="Imagen 2" className="w-full h-auto mb-4 rounded" />
            <h2 className="text-2xl font-bold mb-2">Producto o Servicio 2</h2>
            <p>Descripción breve del producto o servicio.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="src/img/image3.jpg" alt="Imagen 3" className="w-full h-auto mb-4 rounded" />
            <h2 className="text-2xl font-bold mb-2">Producto o Servicio 3</h2>
            <p>Descripción breve del producto o servicio.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
