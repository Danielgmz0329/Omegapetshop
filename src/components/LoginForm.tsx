import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm: React.FC = () => {
  return (
    <form className="space-y-4">
      <input type="email" placeholder="Correo" className="input" />
      <input type="password" placeholder="Contraseña" className="input" />
      
        <Link to="/store-dashboard"><button type="submit" className="btn-primary">Iniciar Sesión</button></Link>
        <Link to="/index"><button type="submit" className="btn-primary">Volver</button></Link>
    </form>
  );
};

export default LoginForm;
