import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assests/images/chatbot.png";
import {
  ChartBarIcon,
  PencilSquareIcon,
  EyeIcon,
  ArrowLeftStartOnRectangleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const MenuPage = ({ page }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative flex flex-row h-screen w-full bg-gray-100">
      <div className={`z-10 flex flex-col ${!sidebarOpen && "md:w-0 md:hidden"} w-full bg-gray-100`}>
        <div className="flex flex-row justify-between bg-indigo-900 p-3 shadow-md">
          <button
            onClick={toggleSidebar}
            className={`text-white text-lg focus:outline-none ${sidebarOpen && "ml-60 md:ml-0"}`}>
            <Bars3Icon className="w-6 h-6 text-white" />
          </button>
          <img src={logo} alt="Login" className="w-10 h-10 rounded-xl mr-6" />
        </div>
        <div className={`${sidebarOpen && "ml-0 md:ml-60"}`} style={{ maxHeight: "90%" }}>
          {page}
        </div>
      </div>
      {sidebarOpen && (
        <div className="absolute z-20 h-screen min-w-60 bg-indigo-900 shadow-md">
          <div className="flex flex-row justify-center r w-full p-3 border-b border-gray-100">
            <div className="font-serif text-2xl text-white tracking-widest  py-1">AI Self Assistant</div>
          </div>
          <div className="flex flex-col">
            <Link
              to="/chat"
              className={`w-full flex flex-row py-4 text-white text-md ${
                location.pathname === "/chat" ? "bg-indigo-400" : "hover:bg-indigo-900"
              }`}>
              <EyeIcon className="w-8 h-8 mx-5" />
              <button>Chat Interface</button>
            </Link>

            <Link
              to="/dashboard"
              className={`w-full flex flex-row py-4 text-white text-md ${
                location.pathname === "/dashboard" ? "bg-indigo-400" : "hover:bg-indigo-900"
              }`}>
              <ChartBarIcon className="w-8 h-8 mx-5" />
              <button>Dashboard</button>
            </Link>

            <Link
              to="/editprofile"
              className={`w-full flex flex-row py-4 text-white text-lg ${
                location.pathname === "/editprofile" ? "bg-indigo-400" : "hover:bg-indigo-900"
              } mb-10`}>
              <PencilSquareIcon className="w-8 h-8 mx-5" />
              <button>Edit profile</button>
            </Link>
          </div>

          <div className="flex flex-col-reverse">
            <Link to="/login" className="w-full flex flex-row hover:bg-red-500 py-4 text-white text-md">
              <ArrowLeftStartOnRectangleIcon className="w-8 h-8 mx-5" />
              <button>Logout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuPage;
