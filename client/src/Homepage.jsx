import React,{useEffect, useState} from 'react';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faTornado} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import ShoppingCartIcon from '../assets/ShoppingCart.svg'
import MagnifyingGlassIcon from '../assets/MagnifyingGlass.svg'
import LogoSVG from '../assets/Logo.svg'



export const Homepage = () => {

  return (
    <div>
    <div className='flex flex-row justify-between w-full h-vh-8 mt-4'>
      <img src={LogoSVG}  alt="Logo" style={{width:"128px", height:"48px", marginLeft:"1%", cursor:"pointer"}}/>
      <div className='flex flex-row gap-x-4'>
    <p className='roboto-condensed-bold'>New & Featured</p>
    <p className='roboto-condensed-bold'>Men</p>
    <p className='roboto-condensed-bold'>Women</p>
    <p className='roboto-condensed-bold'>Sale</p>
    </div>
    <div className='flex flex-row -mr-10'>
    <img src={MagnifyingGlassIcon} className='rounded-full hoverable-element ' alt="Shopping Cart" style={{ width: '36px', height: '36px', padding:8 }} />
    <input className='h-8 rounded-full px-3 bg-red-100 hoverable-element' placeholder='Search'/>
    </div>
    <div className='flex flex-row gap-x-12 mr-4'>
    <FontAwesomeIcon className='hoverable-element p-2 rounded-full' icon={faHeart} fontSize={24} />
    <FontAwesomeIcon className='hoverable-element p-2 rounded-full' icon={faBagShopping} fontSize={23} />
    </div>
  </div>
</div>
   
  )
}
