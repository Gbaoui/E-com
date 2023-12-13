import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Resetpassword from './pages/Resetpassword';
import Forgotpassword from './pages/Forgotpassword';
import Login from './pages/login';
import MainLayout from './components/mainLayout';
import Dashboard from './pages/dashboard';
import Enquiries from './pages/Enquiries';
import Bloglist from './pages/Bloglist';
import Blogcatlist from './pages/Blogcatlist'
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Colorlist from './pages/Colorlist';
import Categorylist from './pages/Categorylist';
import Brandlist from './pages/Brandlist';
import Productlist from './pages/Productlist';
import Addblog from './pages/Addblog';
import Addblogcat from './pages/Addblogcat';
import Addcolor from './pages/Addcolor';
import Addcat from './pages/Addcat';
import Addbrand from './pages/Addbrand';
import Addprod from './pages/Addprod';






function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/reset-password' element={<Resetpassword/>}/>
        <Route path='/forgot-password' element={<Forgotpassword/>}/>
        <Route path='/admin' element={<MainLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='enquiries' element={<Enquiries/>}/>
          <Route path='blog-list' element={<Bloglist/>}/>
          <Route path='blog-category-list' element={<Blogcatlist/>}/>
          <Route path='orders' element={<Orders/>}/>
          <Route path='customers' element={<Customers/>}/>
          <Route path='list-color' element={<Colorlist/>}/>
          <Route path='list-category' element={<Categorylist/>}/>
          <Route path='brand-list' element={<Brandlist/>}/>
          <Route path='product-list' element={<Productlist/>}/>
          <Route path='add-blog' element={<Addblog/>}/>
          <Route path='add-blog-category' element={<Addblogcat/>}/>
          <Route path='color' element={<Addcolor/>}/>
          <Route path='color/:id' element={<Addcolor/>}/>
          <Route path='category' element={<Addcat/>}/>
          <Route path='category/:id' element={<Addcat/>}/>
          <Route path='brand' element={<Addbrand/>}/>
          <Route path="brand/:id" element={<Addbrand />} />
          <Route path='Product' element={<Addprod/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
