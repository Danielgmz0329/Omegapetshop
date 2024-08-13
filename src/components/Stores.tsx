import  {Link } from "react-router-dom"

const Stores = () => {

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
          <h1 className="text-3xl font-bold mb-6">Tiendas</h1>
          <input
            type="search"
            placeholder="Buscar tienda"
            className="mb-6 p-2 border border-gray-300 rounded-md shadow-sm w-full max-w-md"
          />
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl">
            <Link to="#" className="w-full sm:w-1/2 lg:w-1/3 block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="src/img/Shop.png" alt="Camion" className="w-full h-auto mb-4" />
              <h2 className="text-xl font-bold mb-2">Tienda 1:</h2>
              <p>Dirección: </p>
              <p>Telefono: </p>
              <p>Ciudad:</p>
            </Link>
            <Link to="/detallescamion" className="w-full sm:w-1/2 lg:w-1/3 block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="src/img/Shop.png" alt="Camion" className="w-full h-auto mb-4" />
              <h2 className="text-xl font-bold mb-2">Tienda 2:</h2>
              <p>Dirección: </p>
              <p>Telefono: </p>
              <p>Ciudad:</p>
            </Link>
            <Link to="/detallescamion" className="w-full sm:w-1/2 lg:w-1/3 block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="src/img/Shop.png" alt="Camion" className="w-full h-auto mb-4" />
              <h2 className="text-xl font-bold mb-2">Tienda 3:</h2>
              <p>Dirección: </p>
              <p>Telefono: </p>
              <p>Ciudad:</p>
            </Link>
            <Link to="/detallescamion" className="w-full sm:w-1/2 lg:w-1/3 block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="src/img/Shop.png" alt="Camion" className="w-full h-auto mb-4" />
              <h2 className="text-xl font-bold mb-2">Tienda 4:</h2>
              <p>Dirección: </p>
              <p>Telefono: </p>
              <p>Ciudad:</p>
            </Link>
          </div>
        </div>
      );
}

export default Stores