import React, { useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let userSchema = Yup.object().shape({
    email: Yup.string().email('Email Should Be Valid').required('Email is Required'),
    password: Yup.string().required('Password is Required'),
  });

  const Formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  const { user, isLoading, isSuccess } = useSelector((state) => state.auth) || {};

  useEffect(() => {
    if (isSuccess && user && user.isAdmin) {
      // Redirect to '/admin' if the user is an admin
      navigate('/admin');
    } else if (isSuccess) {
      alert('Login successful, but user is not an admin.');
    }
  }, [user, isSuccess, navigate]);

  return (
    <div className='py-5' style={{ background: '#ffd333', minHeight: '100vh' }}>
      <br />
      <br />
      <br />
      <br />
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center'>Login</h3>
        <p className='text-center'>Login to your Account to Continue</p>
        <form action='' onSubmit={Formik.handleSubmit}>
          <CustomInput
            val={Formik.values.email}
            onCh={Formik.handleChange}
            name='email'
            type='text'
            label='Email Address'
            id='email'
          />
          <div className='error'>
            {Formik.touched.email && Formik.errors.email ? <div>{Formik.errors.email}</div> : null}
          </div>
          <CustomInput
            val={Formik.values.password}
            onCh={Formik.handleChange}
            name='password'
            type='password'
            label='Password'
            id='pass'
          />
          <div className='error'>
            {Formik.touched.password && Formik.errors.password ? (
              <div>{Formik.errors.password}</div>
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
