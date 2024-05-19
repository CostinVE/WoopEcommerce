import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios'; 
import '../../App.css'

export const PaymentMethods = () => {
  return (
    <div className='flex flex-col w-1/3 overflow-auto'>
    <span className='h-48'></span>
   <p className='text-2xl mb-4'>Saved Payment Methods</p>
   <button className='px-2 py-1 w-1/3 rounded-full text-white bg-zinc-900 hover:bg-zinc-400' style={{fontWeight:"bold"}}>Payment Options</button>
 
              <span className='h-48'></span>
   

</div>
  )
}
