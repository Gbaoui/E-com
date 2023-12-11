import axios from 'axios'
import {base_url} from '../../utils/base_url'
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';



const getProductCategories = async() =>{
    const response = await axios.get(`${base_url}category/`);
    return response.data
};


const pCategoryService = {
    getProductCategories,
};


export default pCategoryService;