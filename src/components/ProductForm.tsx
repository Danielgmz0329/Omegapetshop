import React from 'react';

const ProductForm: React.FC = () => {
  return (
    <form className="space-y-4">
      <input type="text" placeholder="Nombre del Producto" className="input" />
      <input type="text" placeholder="ID del Producto" className="input" />
      <input type="number" placeholder="Precio del Producto" className="input" />
      <input type="file" placeholder="Imagen del Producto" className="input" />
      <button type="submit" className="btn-primary">Cargar Producto</button>
    </form>
  );
};

export default ProductForm;
