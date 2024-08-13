import React from 'react'
import { Link } from 'react-router-dom';

const StoreDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-600 p-4 shadow-md flex justify-end">
        <Link to="/store" className="text-white hover:text-gray-300 mr-4">Tienda</Link>
      </nav>
      {/* Contenido del Dashboard */}
      <div className="p-6">
        {/* Aquí va el contenido principal */}
      </div>
    </div>
  );
};

export default StoreDashboard;
