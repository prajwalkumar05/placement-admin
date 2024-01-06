import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

const Sidebar = () => {

  const {logout} = useLogout()

  return (
    <div className="bg-gray-800 h-screen w-64 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Sidebar</h1>
      <ul>
        <li className="mb-2">
          <Link to="/">Home</Link>
        </li>
        <li className="mb-2">
          <Link to="/student">Add Student</Link>
        </li>
        <li className="mb-2">
          <Link to="/company">Add Company</Link>
        </li>

        <li className="mb-2">
          <Link to="/studentlist">Student Details</Link>
        </li>

        <li className="mb-2">
          <Link to="/companylist">Company List</Link>
        </li>

        <li onClick={logout} className="mb-2">
          Logout
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
