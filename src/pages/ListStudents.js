import React from "react";
import { useCollection } from "../hooks/useCollection";
import { doc } from "firebase/firestore";
import ListTable from "../components/ListTable";

function ListStudents() {
  const { document } = useCollection("users");
  console.log(document);

  console.log(document);

  if (!document) {
    return <p>Loading</p>;
  }

  return (
    <>
      <div className="py-20">
        <div className="mx-auto container bg-white  shadow rounded">
          <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
            <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
              <div className="flex items-center">
                <a
                  className="text-black dark:text-black p-2 border-transparent border bg-gray-100 0 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                  href="javascript: void(0)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon cursor-pointer icon-tabler icon-tabler-edit"
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
                    <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                    <line x1={16} y1={5} x2={19} y2={8} />
                  </svg>
                </a>
                <a
                  className="text-black dark:text-black mx-2 p-2 border-transparent border bg-gray-100  hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                  href="javascript: void(0)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon cursor-pointer icon-tabler icon-tabler-settings"
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
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                </a>
                <a
                  className="text-black dark:text-black mr-2 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                  href="javascript: void(0)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-bookmark"
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
                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                  </svg>
                </a>
                <a
                  className="text-black dark:text-black mr-2 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                  href="javascript: void(0)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-copy"
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
                    <rect x={8} y={8} width={12} height={12} rx={2} />
                    <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                  </svg>
                </a>
                <a
                  className="text-red-500 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
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
              </div>
            </div>
          </div>
          <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
    <table className="min-w-full bg-white ">
      <thead>
        <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
          <th className="pl-8 text-black dark:text-black font-normal pr-6 text-left text-sm tracking-normal leading-4">
            
          </th>

          <th className="text-black dark:text-black font-normal pr-6 text-left text-sm tracking-normal leading-4">
            Name
          </th>
          <th className="text-black dark:text-black font-normal pr-6 text-left text-sm tracking-normal leading-4">
            Register Number
          </th>
          <th className="text-black dark:text-black font-normal pr-6 text-left text-sm tracking-normal leading-4">
            Gmail ID
          </th>
         
          
          <th className="text-black dark:text-black font-normal pr-6 text-left text-sm tracking-normal leading-4">
            <div className="opacity-0 w-2 h-2 rounded-full bg-indigo-400" />
          </th>
        </tr>
      </thead>
      {document.map((item,i) =>{
            return <ListTable key={i} {...item} />
          })}
    </table>
  </div>
          
        </div>
      </div>
    </>
  );
}

export default ListStudents;
