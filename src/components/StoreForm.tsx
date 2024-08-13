import React from 'react';

const StoreForm: React.FC = () => {
  return (
    <form className="space-y-4">
      <input type="text" placeholder="Nombre de la Tienda" className="input" />
      <input type="text" placeholder="Teléfono" className="input" />
      <input type="text" placeholder="Dirección" className="input" />
      <input type="email" placeholder="Correo" className="input" />
      <input type="password" placeholder="Contraseña" className="input" />
      <button type="submit" className="btn-primary">Registrarse</button>
    </form>
  );
};

export default StoreForm;
