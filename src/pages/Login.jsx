import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
import Navber from '../components/Navber';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
import { useForm } from 'react-hook-form';
import myAxios from '../Server/Axios';
import { AuthProvider } from '../Server/AuthContext';
   

const Login = () => {

 
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {login} = useContext(AuthProvider);
const navi = useNavigate();

const handleLogIn = (data)=>{
// console.log(data);


  myAxios.post('/login', data)
  .then(res =>{

    // console.log(res.data[0]);
    login(res.data[0])
    Swal.fire({
      title: 'LogIn Success',
      icon: 'success',
      timer : 1500
    });
    navi('/')
  }).catch(err =>{
    console.log('err',err);
    if (err.response.status == 401) {
      
      Swal.fire({
        title: "Phone or Password Wrong",
        icon : 'warning',
        timer : 1000
      })

    }
  })

}

    return (
        <div>
            <Navber></Navber>

       <form onSubmit={handleSubmit(handleLogIn)}>
       <div className='w-full h-screen flex justify-center items-center'>
        <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">


        <Input {...register('phone',{maxLength: 11, minLength : 11})} label="Phone" size="lg" />
        {errors.phone?.type === 'minLength' && <p className='text-red-800' role="alert">Phone Number is Not Correct</p>}
        {/* <PhoneInput
        className='input input-bordered'
      {...register('phone',{maxLength: 12, minLength : 11})}
      defaultCountry="BD"
      value={value}
      onChange={setValue} /> */}


        <Input {...register('password')} label="Password" size="lg" />
       
      </CardBody>
      <CardFooter className="pt-0">
        <Button type='submit' variant="gradient" fullWidth>
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Typography
            as="a"
            href="/join"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
            Sign up
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
        </div>

       </form>

   
 
        </div>
    );
};

export default Login;