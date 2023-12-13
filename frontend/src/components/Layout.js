import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';

const showToast = () => {
  toast.info('Test toast message');
};

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    <ToastContainer 
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"/>
     <button onClick={showToast}>Show Test Toast</button>
    </>
  )
}

export default Layout
