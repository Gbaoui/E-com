import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Resetpassword from './pages/Resetpassword';
import Forgotpassword from './pages/Forgotpassword';
import Login from './pages/login'
import MainLayout from './components/mainLayout';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/reset-password' element={<Resetpassword/>}/>
        <Route path='/forgot-password' element={<Forgotpassword/>}/>
        <Route path='/admin' element={<MainLayout/>}>
          <Route index element={<Dashboard/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
