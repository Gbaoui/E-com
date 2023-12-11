import React, { useEffect } from 'react'
import { Table } from 'antd';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../features/product/productSlice";
import { Link } from 'react-router-dom';


const columns = [
    {
      title: 'No',
      dataIndex: 'key',
    },
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
    },
    {
      title: 'Category',
      dataIndex: 'category',
    },
    {
      title: 'Color',
      dataIndex: 'color',
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
    
  ];
  
 
  

const Productlist = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProducts())
  },[]);
  const productState = useSelector((state)=>state.product.products)
    const data1 = [];
    for (let i = 0; i < productState.length; i++) {
      data1.push({
        key: i+1,
        title:productState[i].title,
        price: `$ ${productState[i].price}`,
        brand: productState[i].brand,
        category: productState[i].category,
        color: productState[i].color,
        action: <div>
          <Link to="/" className='fs-3 text-danger'><FaEdit/></Link>
        <Link className='ms-3 fs-3 text-danger' to="/"><MdDelete/></Link>
        </div>
         
      });
    }
  return (
    <div>
        <h3 className='mb-4'>Products</h3>
        <div>
        <Table  columns={columns} dataSource={data1} />
        </div>
    </div>
  )
}

export default Productlist