import React from 'react';

const Cart: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Carrito de Compras</h2>
      <div className="mt-4">
        <p>No tienes productos en tu carrito.</p>
        {/* Aquí podrías agregar la lógica para mostrar los productos en el carrito */}
      </div>
    </div>
  );
};

export default Cart;
