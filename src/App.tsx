import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StoreRegister from './pages/StoreRegister';
import StoreLogin from './pages/StoreLogin';
import StoreDashboard from './pages/StoreDashboard';
import UserRegister from './pages/UserRegister';
import UserLogin from './pages/UserLogin';
import UserDashboard from './pages/UserDashboard';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Store from './components/Store';


function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página principal */}
        
        {/* Rutas para las vistas de la tienda */}
        <Route path="/store-register" element={<StoreRegister />} />
        <Route path="/store-login" element={<StoreLogin />} />
        <Route path="/store-dashboard" element={<StoreDashboard />} />
        <Route path="/store" element={<Store />} />

        {/* Rutas para las vistas de usuario */}
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />

        {/* Rutas adicionales para usuario */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />

        {/* Ruta por defecto */}
        <Route path="*" element={<UserLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
