import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";



const Addprod = () => {
    
    const [desc, setDesc] = useState();
    const handleDesc = (e)=>{
        setDesc(e);
    }
  return (
    <div>
        <h3 className='mb-4 title'> Add Product</h3>
        {/* <Stepper steps={[{ label: 'Add Blog Details' }, { label: 'Upload Images' }, { label: 'Finish !' }]} activeStep={1} /> */}
        <div>
            <form >
               <div className='mb-3 '>
               <CustomInput type='text' label='Enter Blog Title'/>
               <CustomInput type='text' label='Enter Blog Price'/>
               <select name='' className='form-control py-3 mb-3' id=''>
                    <option> Select Category</option>
                </select>
                <select name='' className='form-control py-3 mb-3' id=''>
                    <option> Select Color</option>
                </select>
                <select name='' className='form-control py-3 mb-3' id=''>
                    <option> Select Brand</option>
                </select>
               </div>
                <select name='' className='form-control py-3 mb-3' id=''>
                    <option>Enter Product Title</option>
                </select>
                <ReactQuill theme="snow" value={desc} onChange={(evt)=>{handleDesc(evt.target)}} />
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Add Product</button>
            </form>
        </div>
    </div>
  )
}

export default Addprod