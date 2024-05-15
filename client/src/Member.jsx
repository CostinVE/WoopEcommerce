import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCreditCard, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBox, faFingerprint, faLink } from '@fortawesome/free-solid-svg-icons';
import { Profile } from './Profile';

export const Member = (details) => {
    const [tab, setTab] = useState(details);
   
   const handleTabChange = (option) => {
     setTab(option); // Use the parameter passed to setTab
     console.log(`Tab switched to ${option}`)
   };

  return (
    <div className='flex flex-col gap-4 overflow-scroll'> 
    <div className='flex flex-row w-full'>
       <div className='flex flex-col w-1/4 ml-24 mt-16 gap-8'>
        <p className='text-3xl mb-8'>Profile</p>
              <p onClick={() => handleTabChange("Account Details")} className='text-xl cursor-pointer'>
              <FontAwesomeIcon icon={faUser} fontSize={25} style={{marginRight:"5%"}} />  Account Details</p>
              <p onClick={() => handleTabChange("Payment Methods")} className='text-xl cursor-pointer'>
              <FontAwesomeIcon icon={faCreditCard} fontSize={25} style={{marginRight:"5%"}} />  Payment Methods</p>
              <p onClick={() => handleTabChange("Shop Preferences")} className='text-xl cursor-pointer'>
              <FontAwesomeIcon icon={faBox} fontSize={25} style={{marginRight:"5%"}} />   Shop Preferences</p>
              <p onClick={() => handleTabChange("Delivery Address")} className='text-xl cursor-pointer'>
              <FontAwesomeIcon icon={faEnvelope} fontSize={25} style={{marginRight:"5%"}} />   Delivery Address</p>
              <p onClick={() => handleTabChange("Privacy")} className='text-xl cursor-pointer'>
              <FontAwesomeIcon icon={faFingerprint} fontSize={25} style={{marginRight:"5%"}} />    Privacy</p>
              <p onClick={() => handleTabChange("Linked Accounts")} className='text-xl cursor-pointer'>
              <FontAwesomeIcon icon={faLink} fontSize={25} style={{marginRight:"5%"}} />   Linked Accounts</p>
       </div>
       <Profile/>
      </div>
    </div>
  );
};
