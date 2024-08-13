import React from 'react';
import UserForm from '../components/UserForm';

const UserRegister: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Registro de Usuario</h2>
      <UserForm />
    </div>
  );
};

export default UserRegister;
