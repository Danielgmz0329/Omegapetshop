import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Perfil de Usuario</h2>
      <div className="mt-4">
        <h3 className="font-bold">Cambiar Datos</h3>
        {/* Formulario para cambiar datos del usuario */}
        <form className="space-y-4 mt-4">
          <input type="text" placeholder="Nombre" className="input" />
          <input type="text" placeholder="Apellido" className="input" />
          <input type="email" placeholder="Correo" className="input" />
          <input type="text" placeholder="Teléfono" className="input" />
          <button type="submit" className="btn-primary">Guardar Cambios</button>
        </form>

        <h3 className="font-bold mt-8">Compras Realizadas</h3>
        {/* Aquí podrías listar las compras realizadas */}
        <ul className="list-disc pl-5 mt-4">
          <li>Compra 1: $100</li>
          <li>Compra 2: $50</li>
        </ul>

        <button className="btn-secondary mt-8">Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default Profile;
