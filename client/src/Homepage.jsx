import React,{useEffect, useState} from 'react';
import axios from 'axios';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faTornado} from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import ShoppingCartIcon from '../assets/ShoppingCart.svg'
import MagnifyingGlassIcon from '../assets/MagnifyingGlass.svg'
import LogoSVG from '../assets/Logo.svg'



export const Homepage = () => {
  

  const [hoveredElement, setHoveredElement] = useState(null);
  const [MenuData, setMenuData] = useState([]);
  

  const handleMouseOver = (event) => {
    setHoveredElement(event.target);
  };

  const handleMouseOut = () => {
    setHoveredElement(null);
  };

  useEffect(() => {
    axios.get('http://localhost:3001/stores')
     .then(response => {
        setMenuData(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

 


  return (
    <div className='flex flex-row gap-x-4 relative'>
      {hoveredElement && (
    <div
      className='absolute top-full w-screen h-screen bg-black opacity-40 z-20'
    >
      <div
        className='absolute top-0 left-0 w-full h-1/3 bg-white z-20'
        onMouseOut={handleMouseOut}
      >
         <div>
      {/* render MenuData here */}
      {MenuData.map(item => (
        <div key={item.id}>{item.category}</div>
      ))}
    </div>
      </div>
    </div>
  )}
    <div className='flex flex-row justify-between w-full h-vh-8 mt-4'>
      <img src={LogoSVG}  alt="Logo" style={{width:"128px", height:"48px", marginLeft:"1%", cursor:"pointer"}}/>
      <div className='flex flex-row justify-between gap-8'>
      <p
        className='roboto-condensed-bold hoverable-underline h-2/5'
        onMouseOver={(event) => handleMouseOver(event)}
      >
        New & Featured
      </p>
      <p
        className='roboto-condensed-bold hoverable-underline h-2/5'
        onMouseOver={(event) => handleMouseOver(event)}>
        Men
      </p>
      <p
        className='roboto-condensed-bold hoverable-underline h-2/5'
        onMouseOver={(event) => handleMouseOver(event)}>
        Women
      </p>
      <p
        className='roboto-condensed-bold hoverable-underline h-2/5'
        onMouseOver={(event) => handleMouseOver(event)}>
        Sale
      </p>
      </div>
    <div className='flex flex-row -mr-10'>
    <FontAwesomeIcon className='hoverable-element p-2 rounded-full cursor-pointer' icon={faMagnifyingGlass} fontSize={18}/>
    <input className='h-8 rounded-full px-3 bg-red-100 hoverable-element' placeholder='Search'/>
    </div>
    <div className='flex flex-row gap-x-4 mr-8'>
    <FontAwesomeIcon className='hoverable-element p-2 rounded-full' icon={faHeart} fontSize={24} />
    <FontAwesomeIcon className='hoverable-element p-2 rounded-full' icon={faBagShopping} fontSize={23} />
    </div>
  </div>
</div>
   
  )
}
