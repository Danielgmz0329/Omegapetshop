import React from 'react';

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Aquí podrías mapear los productos disponibles */}
      <div className="border p-4">
        <h3 className="font-bold">Nombre del Producto</h3>
        <p>ID: 001</p>
        <p>Precio: $100</p>
        <img src="ruta-imagen-producto" alt="Producto" />
        <button className="btn-primary mt-2">Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default ProductList;
