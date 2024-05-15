import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useNavigate } from 'react-router-dom';

const DropdownMenu = ({ optionsData, message }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuChange = (selectedOption) => {
    console.log('Selected option:', selectedOption);
    navigate(`member/${selectedOption.value}`)
  };

  const dropdownOptions = optionsData.map(option => ({
    value: option.value,
    label: option.label
  }));

  return (
    <div className="relative min-w-40">
      <p onMouseOver={toggleMenu}  className="roboto-condensed-bold p-2 cursor-pointer hover:opacity-50 relative">{message}</p>
      {isOpen && (
        <div  onMouseLeave={toggleMenu} className="absolute bg-white border border-gray-300 rounded shadow-lg" style={{ width: '200px' }}>
          <ul className="list-none p-0 m-0">
            {optionsData.map(option => (
              <li key={option.value} className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => handleMenuChange(option)}>{option.label}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};



export default DropdownMenu;

