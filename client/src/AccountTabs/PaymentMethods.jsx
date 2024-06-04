import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import '../../App.css';
import { useSelector, useDispatch } from "react-redux";

const validationSchema = yup.object().shape({
  cardNumber: yup.string().required('Card number is required').matches(/^(\d{4}-){3}\d{4}$/, 'Card number is invalid'),
  expDate: yup.date().required('Expiry date is required').min(new Date(), 'Expiry date cannot be earlier than today'),
  cvc: yup.string().required('CVC is required').matches(/^[0-9]{3,4}$/, 'CVC is invalid'),
});

export const PaymentMethods = () => {
  const [showForm, setShowForm] = useState(false);
  const [cardNumber, setCardNumber] = useState('');

  const email = useSelector((state) => state.email)

  const handlePaymentOptionsClick = () => {
    setShowForm(true);
  };

  const formatCardNumber = (value) => {
    return value
      .replace(/\s+/g, '')
      .replace(/[^0-9]/gi, '')
      .replace(/(\d{4})(?=\d)/g, '$1-')
      .trim();
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9]/g, '').substring(0, 16);
    setCardNumber(formatCardNumber(value));
  };

  const handleSubmit = async (values) => {
    const { cardNumber, expDate, cvc } = values;
    const formattedCardNumber = cardNumber.replace(/-/g, '');
    try {
      const response = await axios.post('http://localhost:3001/verifypayment', { cardNumber: formattedCardNumber, expDate, cvc });
      if (response.data.success) {
        console.log('Payment Intent created successfully', response);
      } else {
        console.log(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error during payment intent creation:', error);
      alert('An error occurred while creating the payment intent.');
    }
  };

  return (
    <div className='flex flex-col w-2/3 overflow-auto'>
      <span className='h-48'></span>
      <p className='text-2xl mb-4'>Saved Payment Methods</p>
      <button
        onClick={handlePaymentOptionsClick}
        className='px-2 py-1 w-1/5 rounded-full text-white bg-zinc-900 hover:bg-zinc-400'
        style={{ fontWeight: 'bold' }}
      >
        Payment Options
      </button>
      {showForm && (
        <Formik
          initialValues={{ cardNumber: '', expDate: '', cvc: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form className='flex flex-col w-full gap-12 mt-20'>
              <div className='flex flex-row w-2/4 gap-20'>
                <div className='flex flex-col w-2/3 gap-3 '>
                  <label className='roboto-condensed-regular text-xl'>Card Number</label>
                  <Field
                    name='cardNumber'
                    type='text'
                    value={cardNumber}
                    onChange={(e) => {
                      handleCardNumberChange(e);
                      setFieldValue('cardNumber', e.target.value);
                    }}
                    className='w-full py-1 border border-slate-700 rounded-md p-2'
                  />
                  <ErrorMessage name="cardNumber" component="div" className="text-red-500" />
                </div>
                <div className='flex flex-col w-2/3 gap-3 '>
                  <label className='roboto-condensed-regular text-xl'>Expiry Date</label>
                  <Field
                    name='expDate'
                    type='date'
                    className='w-full py-1 border border-slate-700 rounded-md p-2'
                  />
                  <ErrorMessage name="expDate" component="div" className="text-red-500" />
                </div>
              </div>
              <div className='flex flex-row w-2/5 justify-between'>
                <button type='submit' className='roboto-condensed-regular p-2 bg-black text-white rounded-xl'>Check</button>
                <div className='flex flex-row gap-3'>
                  <label className='flex flex-col gap-6 roboto-condensed-regular text-xl'>&nbsp;CVC</label>
                  <Field
                    name='cvc'
                    type='password'
                    className='w-1/4 py-1 border border-slate-700 rounded-md p-2'
                  />
                  <ErrorMessage name="cvc" component="div" className="text-red-500" />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};
