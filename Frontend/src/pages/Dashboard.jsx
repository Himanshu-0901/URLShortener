import React from "react";
import { UrlForm } from "../components/UrlForm";
import UserUrl from "../components/UserUrl.jsx";

export const DashboardPage = ()=>{
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-xl p-5 w-full">
          <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">🔗 URL Shortener</h1>
          
          <UrlForm/>
          <UserUrl/>
          
        
  
      
  
          {/* {error && <p className="text-red-500 text-center mt-4">{error}</p>} */}
        </div>
      </div>
    )
}
