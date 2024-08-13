import React from 'react';
import { useHistory } from 'react-router-dom';

const StoreRegister = () => {
  const history = useHistory();

  const handleRegister = () => {
    // Aquí iría la lógica de registro
    history.push('/storelogin');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Registro de Tienda</h1>
      <input type="text" placeholder="Nombre de la Tienda" className="mb-4 p-2 border border-gray-300 rounded-md shadow-sm w-full max-w-md" />
      <input type="email" placeholder="Correo" className="mb-4 p-2 border border-gray-300 rounded-md shadow-sm w-full max-w-md" />
      <input type="password" placeholder="Contraseña" className="mb-4 p-2 border border-gray-300 rounded-md shadow-sm w-full max-w-md" />
      <button onClick={handleRegister} className="bg-blue-600 text-white py-2 px-4 rounded-md">Registrarse</button>
    </div>
  );
};

export default StoreRegister;
