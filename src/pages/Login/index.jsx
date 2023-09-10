import React, { useContext, useState } from 'react';
import { Formik } from 'formik';
import { Form } from 'formik';
import { Field } from 'formik';
import * as yup from 'yup';
import { ErrorMessage } from 'formik';
import  'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { Button } from 'bootstrap';
import { useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { userLoginSignUp } from '../../App';

const Login = () => {

  const navigate=useNavigate();
  const navigation=useNavigate();
  const{loggedin,setLoggedIn}=useContext(userLoginSignUp);





const userLogin=async(users)=>{
  try{
    const user=await signInWithEmailAndPassword(getAuth(),users.email,users.password)
    setLoggedIn(!loggedin)
    navigate('/')
    console.log(userLogin);
}
catch(error){
  alert(error.code)
}
}

const initialValues={
  email:"",
  password:""
}

const defaultValues=yup.object().shape({
email:yup.string().required('Enter Correct Email'),
password:yup.string().required('Enter Correct Password')

})

  return (
    <div className='container'>
     <Formik 
     initialValues={initialValues}
     validationSchema={defaultValues}
     onSubmit={userLogin}

     >
      <Form>
        <div className='col-md-12 text-center'><h1>Sign In</h1></div>
         <div className='col-md-12 text-center'><Field type='text' className='form-control' name='email' placeholder='Enter Email'></Field>
         <p><ErrorMessage name='email' /></p>
         </div>
         <div className='col-md-12 text-center'><Field type='password' className='form-control' name='password' placeholder='Enter Pasword'></Field>
         <p><ErrorMessage name='password' /></p>
         </div>
         <div className='col-md-12 text-center'><button type='submit' className='btn btn-primary'>Sign In</button></div>
         <div className='col-md-12 text-center mt-2'><button  onClick={()=>navigation('/signup')} type='button' className='btn btn-primary'>Sign Up</button></div>
      


      </Form>

     </Formik>


    </div>
  )
}

export default Login;