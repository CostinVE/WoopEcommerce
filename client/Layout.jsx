import React, {useState, useEffect} from 'react';
import { Homepage } from './src/Homepage'

export const body = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    overflow:'auto',
  };
  

const Layout = ({ children }) => {
  useEffect(() => {
    const handleMouseEnter = (event) => {
      event.target.classList.add('hovered');
    };

    const handleMouseLeave = (event) => {
      event.target.classList.remove('hovered');
    };

    const elements = document.querySelectorAll('.hoverable-element');

    elements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div style={body}>
      {children}
    </div>
  );
};

export default Layout;