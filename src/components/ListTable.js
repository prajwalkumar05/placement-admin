import React from "react";
import { Link } from "react-router-dom";

const ListTable = ({ displayName, gmailId, photoURL, registerNumber, id,}) => {

    console.log(id)
  

  return (
    <tbody>
      <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
        <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4"></td>

        <td className="pr-6 whitespace-no-wrap">
          <div className="flex items-center">
            <div className="h-8 w-8">
              <img
                src={photoURL}
                alt
                className="h-full w-full rounded-full overflow-hidden shadow"
              />
            </div>
            <p className="ml-2 text-gray-800  tracking-normal leading-4 text-sm">
            <Link to={`/sd/${id}`}>{displayName}
            </Link>
            </p>
          </div>
        </td>

        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800  tracking-normal leading-4">
          {registerNumber}
        </td>
        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800  tracking-normal leading-4">
          {gmailId}
        </td>

        
        <td className="pr-8 relative">
          <div className="dropdown-content mt-8 absolute left-0 -ml-12 shadow-md z-10 hidden w-32">
            <ul className=" dark:bg-gray-800 shadow rounded py-1">
              <li className="cursor-pointer text-black  text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                Edit
              </li>
              <li className="cursor-pointer text-black  text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                Delete
              </li>
              <li className="cursor-pointer text-black  text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                Duplicate
              </li>
            </ul>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default ListTable;
