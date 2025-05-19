import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="absolute rounded-4xl m-4 text-white bg-indigo-400 p-4 flex justify-between items-center shadow-lg z-50">
      <h1 className="text-3xl font-bold tracking-wide"></h1>
      <div className="flex space-x-6 text-lg font-semibold items-center">
        <Link to="/" className="hover:text-pink-400 flex items-center">
          <FaHome className="text-xl" />
        </Link>
        <Link to="/proyectos" className="hover:text-pink-400">Proyectos</Link>
        <Link to="/contacto" className="hover:text-pink-400">Contacto</Link>
      </div>
    </nav>
  );
}
