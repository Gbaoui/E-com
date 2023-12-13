import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { AiOutlineHome } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { LiaInfoSolid } from "react-icons/lia";
import Container from '../components/Container';


const Contact = () => {
  return (
    <>
      {/* <Meta title={"Contact"} />   */}
      <BreadCrumb title='Contact Us'/>
      <Container class1="contact-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19150.221105077468!2d-7.65565647606672!3d33.58810534813928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2e8c7b72cfd%3A0xa96156b67723241!2s143%20Bd%20Al%20Massira%20Al%20Khadra!5e0!3m2!1sfr!2sma!4v1701446417110!5m2!1sfr!2sma" 
            width="600" 
            height="450" 
            className='border-0 w-100' 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className="form-control" placeholder='Name' />
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder='Email' />
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder='Phone Number' />
                    </div>
                    <div>
                      <textarea name="" id="" className='w-100 form-control' cols="30" rows="5" placeholder='Comment'></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Send</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title">Get In Touch With Us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mt-4 mb-4 d-flex gap-15 align-items-center'> <AiOutlineHome className='fs-5' /> 
                      <address className='mb-0'>143 BD Al Massira Maarif, Casablanca, Maroc</address>
                      </li>
                      <li className='mb-4 d-flex gap-15 align-items-center'><IoCallOutline className='fs-5' />
                      <a href="tel:+21252223344">+212522121314</a>
                      </li>
                      <li className='mb-4 d-flex gap-15 align-items-center'><MdMailOutline className='fs-5' />
                      <a href="mailto:alakshop49@gmail.com">alakshop49@gmail.com</a>
                      </li>
                      <li className='mb-0 d-flex gap-15 align-items-center'><LiaInfoSolid className='fs-5' />
                      <p className='mb-0'>Monday – Friday 10 AM – 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Contact;
