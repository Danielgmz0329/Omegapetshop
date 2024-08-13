import React from 'react';

const Header: React.FC<{ isStore: boolean }> = ({ isStore }) => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl font-bold">OmegaPetShop</h1>
        <ul className="flex space-x-4">
          {isStore ? (
            <li><a href="/Store" className="hover:underline">Tienda</a></li>
          ) : (
            <>
              <li><a href="/user-dashboard" className="hover:underline">Tiendas</a></li>
              <li><a href="/cart" className="hover:underline">Carrito</a></li>
              <li><a href="/profile" className="hover:underline">Perfil</a></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
