import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserData, updateIsSigned } from "./Redux/actions"
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Homepage } from "./src/Homepage";
import "./App.css";

import { Register } from "./src/Register";
import Layout from "./Layout";
import { Login } from "./src/Login";
import DropdownMenu from "./DropdownMenu";
import { Member } from "./src/Member";
import { Footer } from "./src/Footer";
import { Profile } from "./src/AccountTabs/Profile";
import { PaymentMethods } from "./src/AccountTabs/PaymentMethods";


function App() {


  
  const isSigned = useSelector((state) => state.isSigned); 
  const name = useSelector((state) => state.first_name)
  const dispatch = useDispatch();

  const options = [
    { value: 'Account', label: 'Account Details' },
    { value: 'Profile', label: 'Profile' },
    { value: 'Orders', label: 'Orders' },
    { value: 'Favorites', label: 'Favoires'},
    { value: 'Inbox', label: 'Inbox'},
    { value: 'Settings', label: 'Account Settings'},
    { value: 'Log Out', label: 'Log Out'}
  ];

  const message = `Hi, ${name}`;


  useEffect(() => {
    // Function to retrieve cookies  from browser
    function getCookie(cookieName) {
      const allCookies = document.cookie;
    
      if (!allCookies) {
        return null;
      }
    
      const cookiePairs = allCookies.split(';');
    
      for (const cookiePair of cookiePairs) {
        const [key, value] = cookiePair.trim().split('=');
    
        if (key === cookieName) {
          return value;
        }
      }
    
      return null;
    }

    // If you need to extract the value of the cookie rather than the cookie object
    function extractEmailFromCookie(cookieName) {
      const cookies = document.cookie.split(';');
      for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === cookieName) {
          return decodeURIComponent(value);
        }
      }
      return null;
    }
    

    const accessToken = getCookie('accessToken')
    const email = extractEmailFromCookie('email');
    
  
    if (accessToken) {
      axios.post('http://localhost:3001/verifyToken', { accessToken })
        .then(response => {
          const isValid = response.data.isValid; 
          if (isValid) {
            console.log('Sign In successful');
            dispatch(updateIsSigned({isSigned: true}));  //Verify token to authenticate

            axios.get('http://localhost:3001/auth/data', { params: { email } })
          .then(dataResponse => {
            console.log('User data:', dataResponse.data);
            dispatch(updateUserData(dataResponse.data)) //Get the data for the user and set it to reduxValues
          })
          } else {
            console.log('Sign In failed');
          }
        })
        .catch(error => {
          console.error('Error verifying token:', error);
        });
    } else {
      console.error('Access token cookie not found');
    }
  }, [dispatch]); // Include dispatch in the dependency array


  return (
    <Router>
      <div>
        {isSigned ? (
          <div className="flex flex-row justify-between w-full h-1/4 bg-slate-100" >
            <span></span>
            <div className="flex flex-row gap-3">
    <Link to="/stores" className="roboto-condensed-bold p-2 cursor-pointer hover:opacity-50 relative">Find a store
        <span className="absolute h-4 w-0.5 bg-black top-1/2 transform -translate-y-1/2 right-0"></span>
    </Link>
    <p className="roboto-condensed-bold p-2 cursor-pointer hover:opacity-50 -ml-2 relative">Help
        <span className="absolute h-4 w-0.5 bg-black top-1/2 transform -translate-y-1/2 right-0"></span>
    </p>
    <DropdownMenu  optionsData={options} message={message} />
    
</div>

          </div>
        ) : (
          <div className='flex flex-row justify-between w-full h-1/4 bg-red-100'>
          <span></span>
          <div className="flex flex-row gap-3">
            <Link to="/Register" className="roboto-condensed-regular cursor-pointer hover:underline px-2">Register</Link>
            <Link to="/Login" className="roboto-condensed-regular cursor-pointer hover:underline px-2">Sign In</Link>
          </div>
        </div>
        )}
        <Routes>
          <Route path="/" element={<Layout><Homepage /></Layout>} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/member/Account" element={<Layout><Member><Profile/></Member></Layout>} />
          <Route path="/member/Payment" element={<Layout><Member><PaymentMethods/></Member></Layout>} />
        </Routes>
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
