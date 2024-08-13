import React from 'react';
import { Link } from 'react-router-dom';

const UserLogin: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Inicio de Sesión de Usuario</h2>
        <form className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-white mr-2">Correo</label>
            <input
              type="email"
              placeholder="Correo"
              className="input input-bordered w-full bg-gray-700 text-white"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="text-white mr-2">Contraseña</label>
            <input
              type="password"
              placeholder="Contraseña"
              className="input input-bordered w-full bg-gray-700 text-white"
            />
          </div>
          <div className="text-center mt-6">
            <Link to="/user-dashboard">
            <button type="submit" className="btn btn-primary w-full">
              Iniciar Sesión
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
