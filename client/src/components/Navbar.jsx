// client/src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`p-4 ${darkMode ? "bg-violet-800" : "bg-violet-300"} text-white`}>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <div className="flex space-x-4">
          <Link to="/employee-list" className="hover:text-violet-400">
            Employee List
          </Link>
          <Link to="/add-employee" className="hover:text-violet-400">
            Add Employee
          </Link>
          <button onClick={toggleDarkMode} className="text-white">
            {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
