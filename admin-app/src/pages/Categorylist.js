import React, { useEffect } from 'react';
import { Table } from 'antd';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../features/pcategory/pcategorySlice';


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
  
  
  

const Categorylist = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCategories())
  },[]);
  const pCatStat = useSelector((state)=>state.pCategory.pCategories)
  const data1 = [];
  for (let i = 0; i < pCatStat.length; i++) {
    data1.push({
      key: i+1,
      name: pCatStat[i].title,
      action: (
        <div>
          <Link to='/' className="fs-3 text-danger">
            <FaEdit />
          </Link>
          <Link to='/' className="ms-3 fs-3 text-danger">
            <MdDelete />
          </Link>
        </div>
      ),
    });
  }
  
  return (
    <div>
        <h3 className='mb-4 title'>Products Categories</h3>
        <div>
        <Table  columns={columns} dataSource={data1} />
        </div>
    </div>
  )
}

export default Categorylist