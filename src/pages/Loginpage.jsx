import React from 'react'
import { useAuth } from '../hooks/Authhook'

const Loginpage = () => {
 const {navigate,register,handleSubmit, formState:{errors},LoginFormData}= useAuth()
  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-8 px-4">

      {/* Logo */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        amazon<span className="text-orange-400">.</span>
      </h1>

      {/* Login Card */}
      <div className="w-full max-w-sm border border-gray-300 rounded-lg p-7">

        <h2 className="text-3xl font-medium mb-6">
          Sign in
        </h2>

        {/* Email */}
        <form onSubmit={handleSubmit(LoginFormData)}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Email or mobile phone number
          </label>

          <input
            type="text"
            placeholder="Enter your email"
            className="w-full border border-gray-400 rounded-md px-3 py-2 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
            {...register("email",{
              required:"Please enter your email."
            })}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p> }
        </div>

        {/* Password */}
        <div className="mb-5">
          <div className="flex justify-between mb-2">
            <label className="text-sm font-bold">
              Password
            </label>

            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-400 rounded-md px-3 py-2 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
            {...register("password",{
              required:"Please enter your password.",
              minLength:{
                value:6,
                message:"Password must be at least 6 characters."
              }
            })}
          />
          {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-full font-medium text-sm shadow-sm">
          Sign in
        </button>

        {/* Terms */}
        <p className="text-xs text-gray-700 mt-5 leading-5">
          By continuing, you agree to Amazon's
          <a href="#" className="text-blue-600 hover:underline"> Conditions of Use </a>
          and
          <a href="#" className="text-blue-600 hover:underline"> Privacy Notice.</a>
        </p>

        <div className="border-t border-gray-200 my-5"></div>

        <p className="text-sm font-medium mb-3">
          New to Amazon?
        </p>

        {/* Register Button */}
        <button 
        onClick={()=>navigate("/register")}
        className="w-full border border-gray-400 hover:bg-gray-100 py-2 rounded-full text-sm">
          Create your Amazon account
        </button>
        </form>
      </div>

      {/* Footer */}
      <div className="w-full max-w-sm mt-10 text-center">
        <div className="flex justify-center gap-5 text-xs text-blue-600">
          <a href="#" className="hover:underline">Conditions of Use</a>
          <a href="#" className="hover:underline">Privacy Notice</a>
          <a href="#" className="hover:underline">Help</a>
        </div>

        <p className="text-xs text-gray-500 mt-5">
          © 1996-2026, Amazon.com, Inc. or its affiliates
        </p>
      </div>
     
    </div>
  )
}

export default Loginpage

