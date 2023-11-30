import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import ReactQuill from 'react-quill';
const Addblog = () => {
    
    const [desc, setDesc] = useState();
    const handleDesc = (e)=>{
        setDesc(e);
    }
  return (
    <div>
        <h3 className='mb-4 title'> Add Blog</h3>
        {/* <Stepper steps={[{ label: 'Add Blog Details' }, { label: 'Upload Images' }, { label: 'Finish !' }]} activeStep={1} /> */}
        <div className=''>
            <form action=''>
               <div className='mt-4'>
               <CustomInput type='text' label='Enter Blog Title'/>
               </div>
                <select name='' className='form-control py-3 mb-3' id=''>
                    <option> Select Blog Category</option>
                </select>
                <ReactQuill theme="snow" value={desc} onChange={(evt)=>{handleDesc(evt.target)}} />
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Add Blog</button>
            </form>
        </div>
    </div>
  )
}

export default Addblog