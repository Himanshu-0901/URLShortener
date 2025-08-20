import { useState } from "react";
import React from "react";
import { UrlForm } from "../components/UrlForm";
import UserUrl from "../components/UserUrl.jsx";
import { MoreVertical } from "lucide-react";
import { logout } from "../api/user.api.js";
import { Link } from '@tanstack/react-router';
import { useDispatch } from "react-redux";
import { logoutt} from "../store/slice/authSlice.js";

export const DashboardPage = () => {
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    useDispatch(logoutt());
    navigate({to:"/"})
    setOpen(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-5 w-200">
        <div className="flex items-center justify-between w-full">
        <h1 className="flex-1 text-2xl font-bold text-center text-indigo-600">
          🔗 URL Shortener
        </h1>

        <div className="relative inline-block">
      
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-full hover:bg-gray-200"
          >
            <MoreVertical size={20} />
          </button>

         
          {open && (
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-lg border">
              <Link
              
                onClick={() => 
                  handleLogout()
                 }
                 to="/"
                className="w-full text-left px-4 py-2 text-red-600"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
        </div>

        <UrlForm />
        <UserUrl />
      </div>
    </div>
  );
};
