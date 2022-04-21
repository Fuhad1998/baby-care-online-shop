import { CircularProgress } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import "./Login.css"

const Login = () => {
    const { register, handleSubmit } = useForm();
    const {loginUser, isloding, signInUsingGoole} = UseAuth();
  // const location = useLocation();
  // const history = useHistory();
    
    
    
  
  
    const onSubmit = (data) => {
      loginUser(data.email, data.password)
      alert("Register success");
    };
  
    const handelGoogleSignin = () =>{
     
    }
    return (
        <div className="container   login-container my-5 shadow-lg">
       { ! isloding && <form className="login-from" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="py-2 register-name">Log in</h2>
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
          className="btn-submit input-btn btn btn-danger login-bac-color text-white fs-5 rounded"
          type="submit"
          value="Login"
        />
        <br />
        <button onClick={handelGoogleSignin}  className="btn-submit input-btn btn btn-danger login-bac-color text-white fs-5 rounded ">
          Google Sign-in
        </button>
        <br />

        <Link className="" to="/register">
          <button
            className="border-0 bg-success bg-opacity-25"
            style={{ fontWeight: 600 }}
          >
            NEW USER? PLEASE REGISTER
          </button>
        </Link>
      </form>}
      {isloding && <CircularProgress />}
    </div>
    );
};

export default Login;