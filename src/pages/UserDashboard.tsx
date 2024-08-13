import React from 'react';
import Header from '../components/Header';
import Stores from '../components/Stores';

const UserDashboard: React.FC = () => {
  return (
    <>
      <Header isStore={false} />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold">Tiendas Disponibles</h2>
        <Stores />
      </div>
    </>
  );
};

export default UserDashboard;
