import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import '../../App.css';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const Delivery = () => {

  const [showAddAddress, setShowAddAddress] = useState(false);

  const toggleAddAddress = () => {
    setShowAddAddress(!showAddAddress);
  };

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

 
  const initialValues = {
    first_name: '',
    last_name: '',
    street: '',
    'APP/BUILDING/SUITE': '',
    POSTCODE: '',
    TOWN: '',
    COUNTRY: '',
    PHONE: '',
    default: false,
  };
  
  const validationSchema = yup.object({
    first_name: yup.string().required('First name is required'),
    last_name: yup.string(),
    street: yup.string().required('Street is required'),
    'APP/BUILDING/SUITE': yup.string(),
    POSTCODE: yup.string().required('Postcode is required'),
    TOWN: yup.string().required('Town is required'),
    COUNTRY: yup.string().required('Country is required'),
    PHONE: yup.string(),
    default: yup.boolean(),
  });
  
  const onSubmit = async (values) => {
    try {
      console.log(values);
      const response = await axios.post('http://localhost:3001/address/delivery', values, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Delivery address updated', response.data);
    } catch (error) {
      console.error('Error updating delivery address', error);
    }
  };
  

   
  return (
    <div className='flex flex-col w-1/3 gap-6 overflow-auto'>
    <span className='h-48'></span>
    <p className='text-2xl'>Saved Delivery Addresses</p>
    <p className='roboto-condensed-regular'>You currently don't have any saved delivery addresses.Add an address here to be pre-filled for quicker checkout.</p>
    <div className='flex flex-row justify-between'>
      <span></span>
      <button
          className='p-2 bg-black hover:bg-zinc-600 text-white cursor-pointer rounded-xl roboto-condensed-regular'
          onClick={toggleAddAddress}
        >
          Add address
        </button>
    </div>
    {showAddAddress && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-20'>
          <div className='bg-white p-6 rounded-lg w-1/4 overflow-auto'>
            <div className='flex flex-row justify-between'>
              <h2 className='text-2xl mb-4'>Add Address</h2>
              <FontAwesomeIcon icon={faXmark} className='py-2 px-3 hover:bg-slate-300 rounded-full cursor-pointer ' onClick={toggleAddAddress} />
              </div>
              <Formik
  initialValues={initialValues}
  validationSchema={validationSchema}
  onSubmit={onSubmit}
>
  <Form className='flex flex-col gap-6'>
    <div className='flex flex-row justify-between gap-3'>
      <Field
        name="first_name"
        type="text"
        className='w-full p-2 border border-gray-300 rounded mt-2'
        placeholder="First Name*"
      />
      <Field
        name="last_name"
        type="text"
        className='w-full p-2 border border-gray-300 rounded mt-2'
        placeholder="Last Name*"
      />
    </div>
    <Field
      name="street"
      type="text"
      className='w-full p-2 border border-gray-300 rounded mt-2'
      placeholder="Street Address*"
    />
    <Field
      name="APP/BUILDING/SUITE"
      type="text"
      className='w-full p-2 border border-gray-300 rounded mt-2'
      placeholder="Apt, Suite, Building"
    />
    <div className='flex flex-row justify-between gap-3'>
      <Field
        name="POSTCODE"
        type="text"
        className='w-full p-2 border border-gray-300 rounded mt-2'
        placeholder="Postcode*"
      />
      <Field
        name="TOWN"
        type="text"
        className='w-full p-2 border border-gray-300 rounded mt-2'
        placeholder="Town/City*"
      />
    </div>
    <Field as="select" name="COUNTRY" className="mb-3 p-3 border-2 border-slate-300 rounded-lg">
      <option value="" label="Select a country" />
      {countries.map((country) => (
        <option key={country.value} value={country.value}>
          {country.label}
        </option>
      ))}
    </Field>
    <Field
      name="PHONE"
      type="text"
      className='w-full p-2 border border-gray-300 rounded mt-2'
      placeholder="Phone Number*"
    />
    <label className='roboto-condensed-regular text-base mb-12'>
      <Field type="checkbox" name="default" value="default" className="p-2 cursor-pointer"/>
      &nbsp; Set as default delivery address
    </label>
    <div className='flex flex-row justify-between'>
      <span></span>
      <button
         type="submit"
         className="p-2 text-white bg-black hover:bg-zinc-500 cursor-pointer rounded-xl">Save
                    </button>
    </div>
  </Form>
</Formik>

          </div>
        </div>
      )}
    </div>
  )
}
