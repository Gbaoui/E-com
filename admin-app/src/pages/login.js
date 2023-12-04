import React, { useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { object, string } from 'yup';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
let schema = object({
  email:string().email('Email Should Be Valid').required('Email is Required'),
  password:string().required('Password is Required'),
});
  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
    },
    validationSchema:schema,
    onSubmit: values => {
      dispatch(login(values));
      alert(JSON.stringify(values, null, 2));
    },
  });
  const authState = useSelector((state) => state);
  const {user,isLoading,isError,isSuccess,message}=authState.auth;
  useEffect(()=>{
    if(isSuccess){
      navigate('admin')
    }else{
      alert("")
    }
  },[user,isLoading,isError,isSuccess]);
  return (
    <div className='py-5' style={{ background: '#ffd333', minHeight: '100vh' }}>
      <br />
      <br />
      <br />
      <br />
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center'>Login</h3>
        <p className='text-center'>Login to your Account to Continue</p>
        <div className='error text-center'>
          {message.message === 'Rejected'?'Your not an Admin':''}
        </div>
        <form action='' onSubmit={formik.handleSubmit}>
          <CustomInput
            val={formik.values.email}
            onCh={formik.handleChange('email')}
            name='email'
            type='text'
            label='Email Address'
            id='email'
          />
          <div className='error'>
          {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
          </div>
          <CustomInput
            val={formik.values.password}
            onCh={formik.handleChange('password')}
            name='password'
            type='password'
            label='Password'
            id='pass'
          />
          <div className='error'>
          {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}
          </div>
          <div className='mb-3 text-end'>
            <Link to='/forgot-password'>Forgot Password ?</Link>
          </div>
          <button
            className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5'
            style={{ background: '#ffd333' }}
            type='submit'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
