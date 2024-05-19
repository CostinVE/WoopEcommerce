import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCreditCard, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBox, faFingerprint, faLink } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import { Profile } from './AccountTabs/Profile';
import { PaymentMethods } from './AccountTabs/PaymentMethods';
import { ShopPreferences } from './AccountTabs/ShopPreferences';
import { Delivery } from './AccountTabs/Delivery';
import { Privacy } from './AccountTabs/Privacy';
import { LinkedAccounts } from './AccountTabs/LinkedAccounts';

export const Member = () => {

  const navigate = useNavigate();
  const [tab, setTab] = useState('Account');

  const handleTabChange = (option) => {
    setTab(option);
    
  };

  useEffect(() => {
    navigate(`/member/${tab.replace(' ', '')}`);
  }, [tab, navigate]);

  return (
    <div className='flex flex-col gap-4 overflow-scroll'> 
    <div className='flex flex-row w-full'>
       <div className='flex flex-col w-1/4 ml-24 mt-16 gap-8'>
        <p className='text-3xl mb-8'>Profile</p>
              <p onClick={() => handleTabChange("Account")} className='text-xl cursor-pointer'>
              <FontAwesomeIcon icon={faUser} fontSize={25} style={{marginRight:"5%"}} />  Account Details</p>
              <p onClick={() => handleTabChange("Payment")} className='text-xl cursor-pointer'>
              <FontAwesomeIcon icon={faCreditCard} fontSize={25} style={{marginRight:"5%"}} />  Payment Methods</p>
              <p onClick={() => handleTabChange("Shop")} className='text-xl cursor-pointer'>
              <FontAwesomeIcon icon={faBox} fontSize={25} style={{marginRight:"5%"}} />   Shop Preferences</p>
              <p onClick={() => handleTabChange("Delivery")} className='text-xl cursor-pointer'>
              <FontAwesomeIcon icon={faEnvelope} fontSize={25} style={{marginRight:"5%"}} />   Delivery Address</p>
              <p onClick={() => handleTabChange("Privacy")} className='text-xl cursor-pointer'>
              <FontAwesomeIcon icon={faFingerprint} fontSize={25} style={{marginRight:"5%"}} />    Privacy</p>
              <p onClick={() => handleTabChange("Linked")} className='text-xl cursor-pointer'>
              <FontAwesomeIcon icon={faLink} fontSize={25} style={{marginRight:"5%"}} />   Linked Accounts</p>
       </div>
       {tab === 'Account' && <Profile />}
       {tab === 'Payment' && <PaymentMethods/>}
       {tab === 'Shop' && <ShopPreferences/>}
       {tab === 'Delivery' && <Delivery/>}
       {tab === 'Privacy' && <Privacy/>}
       {tab === 'Linked' && <LinkedAccounts/>}
      </div>
    </div>
  );
};
