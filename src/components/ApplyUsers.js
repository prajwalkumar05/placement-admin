// Table.js
import React from "react";
import { Link } from "react-router-dom";

const Applyusers = ({ user, photo,UID }) => {
//   console.log(name);
  return (
      <tr>
        <td className="py-2 px-4 flex  border-b">
          <img
            src={photo}
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <Link to={`/sd/${UID}`} className=" px-8 border-b text-cyan-950">{user}</Link>
        </td>
        
        
      </tr>
  );
};

export default Applyusers;
