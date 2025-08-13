import React, { useState } from 'react';
import axios from 'axios';
import HomePage from './pages/HomePage.jsx';
import { AuthPage } from './pages/AuthPage.jsx';
import { Outlet } from '@tanstack/react-router';
import Navbar from './components/NavBar.jsx';

function RootLayout() {
  // const [longUrl, setLongUrl] = useState('');
  // const [shortUrl, setShortUrl] = useState('');
  // const [error, setError] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setShortUrl('');
  //   setError('');

  //   try {
  //     const response = await axios.post('http://localhost:5000/api/shorten', {
  //       originalUrl: longUrl,
  //     });
  //     setShortUrl(response.data.shortUrl);
  //   } catch (err) {
  //     setError('Something went wrong. Try again!');
  //   }
  // };

  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  );
}

export default RootLayout;
