import React from 'react';
import LoginForm from '../components/LoginForm';

const StoreLogin: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Inicio de Sesión de Tienda</h2>
      <LoginForm />
    </div>
  );
};

export default StoreLogin;
