import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Smart LMS</h1>

      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-400 transition">
          Home
        </Link>
        <Link to="/login" className="hover:text-blue-400 transition">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;