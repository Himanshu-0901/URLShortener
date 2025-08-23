import React, { useState } from 'react';
import {loginn} from '../store/slice/authSlice.js';
import { useDispatch,useSelector} from 'react-redux';
import { login } from '../api/user.api.js';
import {useNavigate}  from '@tanstack/react-router';

const LoginForm = ({ state }) => {
    const [formData, setFormData] = useState({
        email: "Jayanti@gmail.com",
        password:"Jayanti123"
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
 
    
  
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        const data = await login(formData.email, formData.password)
        dispatch(loginn(data.user))
        navigate({to:"/dashboard"})
    };

    

    
   
    return (
        <>
        {/* isAuthenticated ? {navigate({to:"/dashboard"})}
        : */}
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div

                className="bg-white p-8 rounded shadow-md w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-2 mb-4 border rounded"
                    autoComplete="off"
                    required
                />

                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full p-2 mb-4 border rounded"
                    required
                />

                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Login
                </button>

                <p className="text-center text-sm mt-4">
                    Don’t have an account?{' '}
                    <span onClick={() => state(false)} className="text-blue-600">Register</span>
                </p>
            </div>
        </div>
        </>
    );
};

export default LoginForm;
