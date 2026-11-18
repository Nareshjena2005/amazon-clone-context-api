import { Navigate, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
export let useAuth = () => {
  let dispatch  = useDispatch();
  const navigate = useNavigate();
  const [registerUser, setRegisterUser] = useState(
    JSON.parse(localStorage.getItem("registerUser")) || [],
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const LoginFormData = (data) => {
    let user = registerUser.find((val)=>data.email===val.email && data.password === val.password);
    if(!user){
      toast.error("Invalid email or password.");
      reset();
      return;
    }
    else{
      dispatch(addUser(user));
      localStorage.setItem("loginUser",JSON.stringify(user));
      toast.success("Login successful!");
      reset();
    }
   
  };
  const RegisterFormData = (data) => {
    let arr = [...registerUser, data];
    localStorage.setItem("registerUser", JSON.stringify(arr));
    setRegisterUser(arr);
    toast.success("Register sucessful!")
    reset();
    navigate("/", { replace: true });
  };

  return {
    navigate,
    register,
    reset,
    handleSubmit,
    formState: { errors },
    LoginFormData,
    RegisterFormData,
  };
};
