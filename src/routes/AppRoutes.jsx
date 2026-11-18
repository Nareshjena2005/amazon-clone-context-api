import React, { useEffect } from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthLayout from '../layout/AuthLayout';
import Loginpage from '../pages/Loginpage';
import Registerpage from '../pages/Registerpage';
import MainLayout from '../layout/MainLayout';
import Homepage from '../pages/Homepage';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/authSlice';
import PublicProtected from './protected/PubicProtected';
import MainProtected from './protected/MainProtected';
import Aboutpage from '../pages/Shoppage';
import Cartpage from '../pages/Cartpage';
import Shoppage from '../pages/Shoppage';

const AppRoutes = () => {
  const dispatch = useDispatch();
  const hydration = ()=>{
  let loginUserData  = JSON.parse(localStorage.getItem("loginUser"));
    if(!loginUserData){
      return;
    }
    dispatch(addUser(loginUserData));
  }
  useEffect(()=>{
    hydration();
  },[]);
  const router = createBrowserRouter ([
    // Authication 
    {
      path:"/",
      element:<PublicProtected/>,
      children:[
        {
          path:"",
          element:<AuthLayout/>,
          children:[
            {
              path:"",
              element:<Loginpage/>
            },
            {
              path:"register",
              element:<Registerpage/>
            },
          ]
        }
      ]
    },
//  MainPage
    {
      path:"/main",
      element:<MainProtected/>,
      children:[
        {
          path:"",
          element:<MainLayout/>,
          children:[
            {
              path:"",
              element:<Homepage/>
            },
            {
              path:"shop",
              element:<Shoppage/>
            },
            {
              path:"cart",
              element:<Cartpage/>
            },
          ]
        }

      ]
     

    }
  ]);
  return<RouterProvider router={router}/>
}

export default AppRoutes
