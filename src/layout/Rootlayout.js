import React from "react";

  import { Outlet } from "react-router-dom";
import SideBar from "../components/Sidebar";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from "../hooks/useAuthContext";
import Login from "../components/Login";

const Rootlayout = () => {

  const {user} = useAuthContext()
  console.log(user)

  return (

    <div>
      {user ? <div className="flex h-screen">
      <ToastContainer />

      <div>
        <SideBar />
      </div>

      <div className="w-full h-[100vh] overflow-scroll">
        <Outlet />
      </div>
    </div> : <Login /> }
    </div>
    
  );
};

export default Rootlayout;
