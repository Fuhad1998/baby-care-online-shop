import { CircularProgress } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate} from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';


const Register = () => {
  const Navigate = useNavigate();
    const {registerUser, isloding} = UseAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data)
    registerUser(data.email, data.password, data.name, Navigate)
    alert("Register success");
    
  };
    return (
        <div className="container  Register-container my-5 shadow-lg">
        { ! isloding && <form className="login-from" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="p-2 register-name">Register</h2>
          <input
            className="input-btn p-2 rounded"
            {...register("name")}
            placeholder="Write your name"
            type="name"
          />
          <br />
          <input
            className="input-btn p-2 rounded"
            {...register("email")}
            placeholder="Write your email"
            type="email"
          />
          <br />
          <input
            className="input-btn p-2 rounded"
            {...register("password")}
            placeholder="Write your password"
            type="password"
          />
          <br />
          <input
            className="btn-submit input-btn btn btn-dark login-bac-color text-white fs-5 rounded"
            type="submit"
            value="Register"
          />
  
          <br />
  
          <Link className=" " to="/login">
            <button
              className="border-0 bg-success bg-opacity-25 "
              style={{ fontWeight: 400 }}
            >
              ALREADY REGISTERED? PLEASE LOG-IN
            </button>
          </Link>
        </form>}
        {isloding && <CircularProgress />}
      </div>
    );
};

export default Register;