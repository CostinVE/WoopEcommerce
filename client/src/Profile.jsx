import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios'; 
import '../App.css'

export const Profile = () => {
  return (
    <div className='flex flex-col w-1/3 overflow-auto'>
        <span className='h-48'></span>
       <p className='text-2xl mb-16'>Account Details</p>
       <Formik>
        <Form className='flex flex-col gap-6'>
            <label>Email*</label>
            <Field 
             className="w-3/4 p-3 border-2 border-slate-500 rounded-lg"
             placeholder="costinve@gmail.com"
            />
            <label className='roboto-condensed-bold'>Password</label>
            <div className='flex flex-row justify-between w-3/4'>
            <Field 
             className="w-3/4 p-3 "
             autocomplete="off"
             type="password"
             id="password"
             name="password"
             placeholder="Password*"
            />
            <p className='roboto-condensed-bold underline py-3 cursor-pointer'>Edit</p>
            </div>
            <div className='flex flex-row justify-between w-3/4'>
                <p className='roboto-condensed-bold'>Phone Number</p>
                <p className='roboto-condensed-bold underline py-3 cursor-pointer'>Add</p>
            </div>
            <Field
             type="date"
             className="w-3/4 mb-3 p-3 border-2 border-slate-500 rounded-lg"
             id="birthday"
             name="birthday"
             min="1960-01-01"
             max="2024-12-31"
              />
           <p className='roboto-condensed-bold'>Location</p>

        </Form>
       </Formik>
    
    </div>
  )
}
