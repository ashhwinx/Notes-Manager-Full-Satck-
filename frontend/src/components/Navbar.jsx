import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 px-6 py-4 text-white shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">📝 Notes Manager</h1>
      <div className="space-x-4">
        <Link to="/dashboard" className="hover:text-pink-400">Dashboard</Link>
        <Link to="/login" className="hover:text-pink-400">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
