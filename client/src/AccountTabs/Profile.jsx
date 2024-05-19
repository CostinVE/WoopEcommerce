import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios'; 
import '../../App.css'


export const Profile = () => {


  const countries = [
    { value: 'USA', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'GB', label: 'United Kingdom' },
    { value: 'AU', label: 'Australia' },
    { value: 'IN', label: 'India' },
    { value: 'DE', label: 'Germany' },
    { value: 'FR', label: 'France' },
    { value: 'JP', label: 'Japan' },
    { value: 'KR', label: 'South Korea' },
    { value: 'SE', label: 'Sweden' },
    { value: 'CH', label: 'Switzerland' },
    { value: 'NL', label: 'Netherlands' },
    { value: 'NO', label: 'Norway' },
    { value: 'DK', label: 'Denmark' },
    { value: 'FI', label: 'Finland' },
    { value: 'NZ', label: 'New Zealand' },
    { value: 'SG', label: 'Singapore' },
    { value: 'IE', label: 'Ireland' },
    { value: 'AT', label: 'Austria' },
    { value: 'BE', label: 'Belgium' },
    { value: 'IS', label: 'Iceland' },
    { value: 'IT', label: 'Italy' },
    { value: 'ES', label: 'Spain' },
    { value: 'LU', label: 'Luxembourg' },
    { value: 'IL', label: 'Israel' },
    { value: 'AE', label: 'United Arab Emirates' }
  ];
  


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

             <Field as="select" name="country" className="w-3/4 mb-3 p-3 border-2 border-slate-500 rounded-lg">
                <option value="" label="Select a country" />
             {countries.map((country) => (
                          <option key={country.value} value={country.value}>
                            {country.label}
                          </option>))}
                   </Field>
                  <ErrorMessage name="country" component="div" className="text-red-500" />

                  <Field
                  className="w-3/4 mb-3 p-3 border-2 border-slate-500 rounded-lg"
                  name="city"
                  placeholder="Town/City*"
                  />
                  <Field
                   className="w-3/4 mb-3 p-3 border-2 border-slate-500 rounded-lg"
                   name="postalcode"
                   placeholder="PostalCode"
                  />
                  <span className='w-3/4 border-b border-black '></span>
                  <div className='flex flex-row justify-between w-3/4'>
                    <p className='roboto-condensed' style={{fontSize:"18px"}}>Delete Account</p>
                    <button className='px-2 py-1 rounded-full border border-black text-lg hover:bg-zinc-200  roboto-condensed-bold'style={{fontSize:"18px"}}>Delete</button>
                  </div>
                  <span className='w-3/4 border-b border-black '></span>
                  <div className='flex flex-row justify-between w-3/4'>
                        <span></span>
                        <button className='px-2 py-1 rounded-xl bg-zinc-100 cursor-pointer'>Save</button>
                  </div>
                  <span className='h-48'></span>
        </Form>
       </Formik>
    
    </div>
  )
}
