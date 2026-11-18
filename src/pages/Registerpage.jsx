import React from "react";
import { useAuth } from "../hooks/Authhook";


const Registerpage = () => {
  const {
    navigate,
    register,
    handleSubmit,
    formState: { errors },
    RegisterFormData,
  } = useAuth();
  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-8 px-4">
      {/* Logo */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        amazon<span className="text-orange-400">.</span>
      </h1>

      {/* Register Card */}
      <div className="w-full max-w-sm border border-gray-300 rounded-lg p-7">
        <h2 className="text-3xl font-medium mb-6">Create account</h2>
        <form onSubmit={handleSubmit(RegisterFormData)}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Your name</label>

            <input
              type="text"
              placeholder="First and last name"
              className="w-full border border-gray-400 rounded-md px-3 py-2 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
              {...register("name", {
                required: "Please enter your name.",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters.",
                },
              })}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-400 rounded-md px-3 py-2 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
              {...register("email", {
                required: "Please enter your email.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address.",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block text-sm font-bold mb-2">Password</label>

            <input
              type="password"
              placeholder="At least 6 characters"
              className="w-full border border-gray-400 rounded-md px-3 py-2 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
              {...register("password", {
                required: "Please enter your password.",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters.",
                },
              })}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
            <p className="text-xs text-gray-500 mt-2">
              Passwords must be at least 6 characters.
            </p>
          </div>

          {/* Continue Button */}
          
          <button 
          className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-full font-medium text-sm shadow-sm">
            Create your Amazon account
          </button>
        </form>
        {/* Terms */}
        <p className="text-xs text-gray-700 mt-5 leading-5">
          By creating an account, you agree to Amazon's
          <a href="#" className="text-blue-600 hover:underline">
            {" "}
            Conditions of Use
          </a>
          and
          <a href="#" className="text-blue-600 hover:underline">
            {" "}
            Privacy Notice.
          </a>
        </p>

        <div className="border-t border-gray-200 my-5"></div>

        <p className="text-sm">
          Already have an account?
          <button
            onClick={() => navigate("/")}
            href="#"
            className="text-blue-600 hover:underline ml-1"
          >
            Sign in
          </button>
        </p>
      </div>

      {/* Footer */}
      <div className="w-full max-w-sm mt-10 text-center">
        <div className="flex justify-center gap-5 text-xs text-blue-600">
          <a href="#" className="hover:underline">
            Conditions of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy Notice
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-5">
          © 1996-2026, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default Registerpage;
