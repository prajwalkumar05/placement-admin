import React from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, deleteDoc, doc, getDoc } from "firebase/firestore";

const ListTableCompany = ({ downloadUrl, name, location, link, role, id }) => {
  const deleteDocument = async (id) => {
    await deleteDoc(doc(db, "companys", id));
  };

  return (
    <tbody>
      <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
        <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4"></td>

        <td className="pr-6 whitespace-no-wrap">
          <div className="flex items-center">
            <div className="h-8 w-8">
              <img
                src={downloadUrl}
                alt
                className="h-full w-full rounded-full overflow-hidden shadow"
              />
            </div>
            <p className="ml-2 text-gray-800  tracking-normal leading-4 text-sm">
              <Link to={`/companyDetails/${id}`}>{name}</Link>
            </p>
          </div>
        </td>

        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800  tracking-normal leading-4">
          {location}
        </td>
        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800  tracking-normal leading-4">
          {link}
        </td>

        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800  tracking-normal leading-4">
          {role}
        </td>

        <td className="text-sm pr-6 whitespace-no-wrap text-gray-800  tracking-normal leading-4">
          <a
            onClick={() => deleteDocument(id)}
            className="text-red-500 p-2 border-transparent border  cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
            href="javascript: void(0)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon cursor-pointer icon-tabler icon-tabler-trash"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={4} y1={7} x2={20} y2={7} />
              <line x1={10} y1={11} x2={10} y2={17} />
              <line x1={14} y1={11} x2={14} y2={17} />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </a>
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

export default ListTableCompany;
