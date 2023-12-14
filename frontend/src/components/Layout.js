import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";




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
<<<<<<< HEAD
=======
     {/* <button onClick={showToast}>Show Test Toast</button> */}
>>>>>>> 5b5128047077b3fe01af36ef0d5ab95b82ce6046
    </>
  )
}

export default Layout
