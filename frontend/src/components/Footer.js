import React from 'react';
import { Link } from 'react-router-dom';
import {BsLinkedin, BsGithub, BsYoutube, BsInstagram} from 'react-icons/bs';

const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className='mb-4 text-white'>Contact Us</h4>
            <div className='footer-link d-flex flex-column'>
              <address className='text-white fs-6'>143 BD Al Massira Maarif, <br /> Casablanca, Maroc <br /> Code Postal: 20250 </address>
              <a href="tel:+212522121314" className='mt-3 d-block mb-1 text-white'>
                +212 522121314
              </a>
              <a href="mailto:alakshop49@gmail.com" className='mt-2 d-block mb-4 text-white mt-4'>
                alakshop49@gmail.com
              </a>
              <div className="social_icons d-flex align-items-center gap-30">
                <a className='text-white' href="#">
                  <BsLinkedin className='fs-4'/>
                </a>
                <a className='text-white' href="#">
                  <BsInstagram className='fs-4'/>
                </a>
                <a className='text-white' href="#">
                  <BsGithub className='fs-4'/>
                </a>
                <a className='text-white' href="#">
                  <BsYoutube className='fs-4'/>
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className='mb-4 text-white'>Account</h4>
            <div className='footer-link d-flex flex-column'>
              <Link className="text-white py-2 mb-1">About Us</Link>
              <Link className="text-white py-2 mb-1">Faq</Link>
              <Link className="text-white py-2 mb-1">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </ footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          {/* <div className="col-2"> */}
            <div className="col-12">
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getUTCFullYear()} Powred by Gbaoui And Lakhdar
              </p>
            </div>
          {/* </div> */}
        </div>
      </div>
    </ footer>
    </>
  )
}

export default Footer
