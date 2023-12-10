import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import {getColors}  from '../features/color/colorSlice';


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
      title: 'Action',
      dataIndex: 'action',
    }, 
  ];
  
  
  

const Colorlist = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getColors());
  },[]);
  const colorState = useSelector((state)=>state.color.colors)
  const data1 = [];
  for (let i = 0; i < colorState.length; i++) {
    data1.push({
      key: i+1,
      name: colorState[i].title,
      action: (
        <div>
          <Link to='/' className="fs-3 text-danger">
            <FaEdit />
          </Link>
          <Link to='/'className="ms-3 fs-3 text-danger">
            <MdDelete />
          </Link>
        </div>
      ),
    });
  }
  return (
    <div>
        <h3 className='mb-4 title'>Colors</h3>
        <div>
        <Table  columns={columns} dataSource={data1} />
        </div>
    </div>
  )
}

export default Colorlist