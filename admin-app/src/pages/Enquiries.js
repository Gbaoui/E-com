import { Table } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { getEnquiries } from '../features/enquiry/enquirySlice';

const columns = [
    {
      title: 'No',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
    
  ];
  
  
  

const Enquiries = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getEnquiries());
  },[]);
  const enqState = useSelector((state)=>state.enquiry.enquiries)
  const data1 = [];
  for (let i = 0; i < enqState.length; i++) {
    data1.push({
      key: i+1,
      name: enqState[i].name,
      email: enqState[i].email,
      mobile: enqState[i].mobile,
      comment: enqState[i].comment,
      comment: enqState[i].comment,
      status: (
        <div>
          <select className='form-control form-select' name='' id=''>
            <option value="">Set Status</option>
          </select>
        </div>
      ), 
      action: (
        <div>
          <Link to='/'className="ms-3 fs-3 text-danger">
            <MdDelete />
          </Link>
        </div>
      ),
    });
  }
  return (
    <div>
        <h3 className='mb-4 title'>Enquiries</h3>
        <div>
        <Table  columns={columns} dataSource={data1} />
        </div>
    </div>
  )
}

export default Enquiries