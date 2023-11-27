import React from 'react'
import { FaArrowTrendDown } from "react-icons/fa6";
import { Table } from 'antd';
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
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];

const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}




const dashboard = () => {
  return (
   <div>
    <h3 className='mb-4'>Dashboard</h3>
    <div className='d-flex justify-content-between align-items-center gap-3'>
      <div className=' flex-grow-1 justify-content-between align-items-end d-flex bg-white p-3 rounded-3'>
        <div><p className=''>Total</p><h4 className='mb-0'>1100$</h4></div> <div className='d-flex flex-column align-items-end'><h6><FaArrowTrendDown />36%</h6><p className='mb-0'>Compare To April </p></div>
      </div>
      <div className=' flex-grow-1 justify-content-between align-items-end d-flex bg-white p-3 rounded-3'>
        <div><p className=''>Total</p><h4 className='mb-0'>1100$</h4></div> <div className='d-flex flex-column align-items-end'><h6 className='red'><FaArrowTrendDown />36%</h6><p className='mb-0'>Compare To April </p></div>
      </div>
      <div className=' flex-grow-1 justify-content-between align-items-end d-flex bg-white p-3 rounded-3'>
        <div><p className=''>Total</p><h4 className='mb-0'>1100$</h4></div> <div className='d-flex flex-column align-items-end'><h6 className='green'><FaArrowTrendDown />36%</h6><p className='mb-0'>Compare To April </p></div>
      </div>
    </div> 
    <div className='mt-4'>
      <h3>Incomes Statics 
        <div></div>
      </h3>
    </div>
    <div className='mt-4'>
      <h3 className='mb-4title'>Recent Orders </h3>
      <div>
      <Table  columns={columns} dataSource={data1} />
      </div>
    </div>
   </div>
  )
}

export default dashboard