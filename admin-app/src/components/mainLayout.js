import React, { useState } from 'react';
import { RiDashboard3Fill } from "react-icons/ri";
import { TbShoppingCartSearch } from "react-icons/tb";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { LuUsers } from "react-icons/lu";
import { IoMdNotifications } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { RiMenuFoldLine } from "react-icons/ri";
import { FaBlogger } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { Outlet } from 'react-router-dom';
import { IoIosColorPalette } from "react-icons/io";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate  = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className='text-white fs-5 text-center py-3 mb-0'>
            <span className='sm-logo'>DC</span>
            <span className='lg-logo'>Ecom</span>
            </h2>   
         </div> 
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key}) =>{
            if(key=='signout') {

            }else{
                navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <RiDashboard3Fill className='fs-4' />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <LuUsers className='fs-4' />,
              label: 'Customers',
            },
            {
              key: 'Catalog',
              icon: <CiShoppingCart className='fs-4'/>,
              label: 'Catalog',
              children:[
                {
                key: 'Product',
                icon: <CiShoppingCart className='fs-4'/>,
                label: 'Add Product',
              },
                {
                key: 'product-list',
                icon: <CiShoppingCart className='fs-4'/>,
                label: 'Product List',
              },
                {
                key: 'brand',
                icon: <SiBrandfolder  className='fs-4'/>,
                label: 'Brand',
              },
                {
                key: 'brand-list',
                icon: <SiBrandfolder  className='fs-4'/>,
                label: 'Brand  List',
              },
            
                {
                key: 'category',
                icon: <BiCategoryAlt  className='fs-4'/>,
                label: 'Category',
              },
                {
                key: 'list-category',
                icon: <BiCategoryAlt  className='fs-4'/>,
                label: 'Category List',
              },
                {
                key: 'color',
                icon: <IoIosColorPalette  className='fs-4'/>,
                label: 'color',
              },
                {
                key: 'list-color',
                icon: <IoIosColorPalette className='fs-4'/>,
                label: 'Color List',
              }
            ]
            },
            {
                key: 'orders',
                icon: <TbShoppingCartSearch className='fs-4' />,
                label: 'Orders',
              },
            {
                key: 'blog',
                icon: <FaBlogger className='fs-4' />,
                label: 'Blogs',
                children:[
                    {
                    key: 'add-blog',
                    icon: <FaEdit className='fs-4' />,
                    label: 'Add Blog',
                },
                    {
                    key: 'blog-list',
                    icon: <FaBlogger className='fs-4' />,
                    label: 'Blog List',
                },
                {
                    key: 'add-blog-category',
                    icon: <FaEdit className='fs-4' />,
                    label: 'Add Blog Category',
                },
                {
                    key: 'blog-category-list',
                    icon: <FaBlogger className='fs-4' />,
                    label: 'Blog-Category List',
                },
            ]},
            {
                key: 'enquiries',
                icon: <TbShoppingCartSearch className='fs-4' />,
                label: 'Enquiries',
              },  
          ]}
        />
      </Sider>
      <Layout>
        <Header
        className='d-flex justify-content-between ps-3 pe-5'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <RiMenuUnfoldLine /> : <RiMenuFoldLine />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className='d-flex gap-4 align-items-center'>
            <div className='position-relative'>
              <IoMdNotifications className='fs-3' />
              <span className='badge bg-warning rounded-circle p-1 position-absolute'>6</span>
            </div>
            <div className='d-flex gap-3 align-items-center'>
              <div ><img width={32} height={32} src='https://media.licdn.com/dms/image/D4E03AQFoHTyra1ic5w/profile-displayphoto-shrink_200_200/0/1696542715896?e=1703721600&v=beta&t=chldcErvosIbrTfUyWmYaZGBUV7E0SIEdsidrC-A6_4' alt=''/></div>
              <div>
                <h5 className='mb-0'>Abdellah</h5>
                <p className='mb-0'>gbaoui.abdellah@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;