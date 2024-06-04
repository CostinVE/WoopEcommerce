import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import '../../App.css';

export const ShopPreferences = () => {
  const shoesizes = [
    { value: 4, label: 4 },
    { value: 4.5, label: 4.5 },
    { value: 5, label: 5 },
    { value: 5.5, label: 5.5 },
    { value: 6, label: 6 },
    { value: 6.5, label: 6.5 },
    { value: 7, label: 7 },
    { value: 7.5, label: 7.5 },
    { value: 8, label: 8 },
    { value: 8.5, label: 8.5 },
    { value: 9, label: 9 },
    { value: 9.5, label: 9.5 },
    { value: 10, label: 10 },
    { value: 10.5, label: 10.5 },
    { value: 11, label: 11 },
  ];

  const initialValues = {
    shoesize: '',
    preference:'',
    metric$imperial: ''
  };

  const validationSchema = yup.object({
    shoesize: yup.number().required('Shoe size is required'),
  });

  const onSubmit = async (values) => {
    try {
      const response = await axios.post('/api/shop-preferences', values);
      console.log('Form data submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div className='flex flex-col w-1/3 gap-6 overflow-auto'>
      <span className='h-48'></span>
      <p className='text-2xl'>Shop Preferences</p>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className='flex flex-col gap-6'>
          <Field
            as="select"
            name="shoesize"
            className="w-3/4 p-3 border-2 border-slate-500 rounded-lg mb-8"
            placeholder="Shoe size"
            
          >
            <option value="" label="Shoe size" />
            {shoesizes.map((size) => (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            ))}
          </Field>
          <p className='roboto-condensed-regular'>Shopping Preferences</p>
          <div className='flex flex-col gap-2 mb-8 '>
          <label className='roboto-condensed-regular text-base '>
          <Field type="radio" name="preferences" value="female" className="px-2 cursor-pointer" />
           &nbsp; Women's
          </label>
          <label className='roboto-condensed-regular text-base '>
          <Field type="radio" name="preferences" value="male" />
           &nbsp; Man's
          </label>
          </div>

          <p className='roboto-condensed-regular'>Unit of measure</p>
          <div className='flex flex-col gap-2 '>
          <label className='roboto-condensed-regular text-base '>
          <Field type="radio" name="metric$imperial" value="metric" className="p-2 cursor-pointer"/>
          &nbsp; Metric
          </label>
          <label className='roboto-condensed-regular text-base '>
          <Field type="radio" name="metric$imperial" value="imperial" className="p-2 cursor-pointer"/>
          &nbsp; Imperial
          </label>
         </div>
         <div className='flex flex-row justify-between mb-20'>
        <span></span>
        <button className='p-2 bg-black text-white rounded-xl hover:bg-zinc-600'>Save</button>
      </div>
        </Form>
      </Formik>

    </div>
  );
};
