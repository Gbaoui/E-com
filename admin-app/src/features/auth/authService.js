import axios from 'axios';
import { base_url } from '../../utils/base_url';
import { useNavigate } from 'react-router-dom';




const login = async(userData) =>{
    console.log(userData)
    const response = await axios.post(`${base_url}user/admin-login`, userData)
    console.log(response)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))  
        window.location = "/admin"
    }

    console.log(response.data)
    return response.data;
}


const authService = {
    login,
};

export default authService;