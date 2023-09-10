import React from 'react';
import { Formik } from 'formik';
import { Form } from 'formik';
import { Field } from 'formik';
import * as yup from 'yup';
import './style.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';

const SignUp= () => {
    const navigate=useNavigate();
    const navigation=useNavigate();


const defaultValue={
    name:"",
    email:"",
    number:"",
    pasword:"",
}
const validationSchema= yup.object().shape({
    name:yup.string().required('Enter Correct Name'),
    email:yup.string().required('Please Enter Email'),
    number:yup.string().required('Please Enter Phone Number'),
    password:yup.string().required('Please Enter Password')
})

const userSignUp=async(userCreate)=>{
    const user=await  createUserWithEmailAndPassword(auth,userCreate.email,userCreate.password);
    navigate('/login')
console.log(userSignUp)
}

  return (
    <div className='container'>
<Formik
initialValues={defaultValue}
validationSchema={validationSchema}
onSubmit={userSignUp}
>
<Form>
    <div className='col-md-12  text-center'>
        <h1>Sign Up Page</h1>
    </div>
<div className='col-md-12  text-center'><Field type="text" name='name' placeholder='Please Enter Name' className='form-control'></Field>
<p><ErrorMessage  name='name' /></p>
</div>
<div className='col-md-12  text-center'><Field type="text" name='email' placeholder='Please Enter Email' className='form-control'></Field>
<p><ErrorMessage  name='email' /></p>
</div>
<div className='col-md-12  text-center'><Field type="tel" name='number' placeholder='Please Enter Phone Number' className='form-control'></Field>
<p><ErrorMessage  name='number' /></p>
</div>
<div className='col-md-12  text-center'><Field type="password" name='password' placeholder='Please Enter Password' className='form-control'></Field>
<p><ErrorMessage  name='password' /></p>
</div>
<div className='col-md-12  text-center'><Field type="password" name='password' placeholder='Please Confirm Password' className='form-control'></Field>
<p><ErrorMessage  name='password' /></p>
</div>
<div className='text-center'>
    <button type='submit' className='btn btn-primary btnn' > Sign Up</button>
    <button  onClick={()=>navigation('/login')} className='btn btn-primary btnn'>Sign In</button>
</div>



</Form>



</Formik>



    </div>
  )
}

export default SignUp;