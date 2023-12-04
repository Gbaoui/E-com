import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../features/customers/customerSlice';

const columns = [
  {
    title: 'No',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text, record) => `${record.firstname} ${record.lastname}`, 
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Mobile',
    dataIndex: 'mobile',
  },
];

const Customers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const customerstate = useSelector((state) => state.customer.customers);
  
  const data1 = customerstate
    .filter((user) => user.role !== 'admin')
    .map((user, index) => ({
      key: index + 1,
      firstname: user.firstname,
      lastname: user.lastname, // Include lastname in the data
      email: user.email,
      mobile: user.mobile,
    }));

  return (
    <div>
      <h3 className='mb-4 title'>Customers</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Customers;
