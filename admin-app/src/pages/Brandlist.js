import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { getBrands } from '../features/brand/brandSlice';

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

const Brandlist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  const brandState = useSelector((state) => state.brand.brands);

  const data1 = brandState.map((brand, index) => ({
    key: index + 1,
    name: brand.title,
    action: (
      <div>
        <Link to={`/edit/${brand.id}`} className="fs-3 text-danger">
          <FaEdit />
        </Link>
        <Link to={`/delete/${brand.id}`} className="ms-3 fs-3 text-danger">
          <MdDelete />
        </Link>
      </div>
    ),
  }));

  return (
    <div>
      <h3 className="mb-4 title">Brands</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Brandlist;
