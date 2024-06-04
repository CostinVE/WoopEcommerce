import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios'; 
import '../App.css'

export const Register = () => {
  const [email, setEmail] = useState('');
  const [emailValue, setEmailValue] = useState(''); // Temporary email state for input

  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];

  const initialValues = {
    first_name: "",
    last_name: "",
    email: email,
    password: "",
    gender: "",
    datejoined: formattedDate,
    birthday: "",
    productsSales: false,
    termsAndPrivacy: false,
  }

  // Validation schema using Yup
  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
  });

  const validationSchemaAccount = yup.object().shape({
    first_name: yup.string().min(3).max(20).required("Those fields are required!"),
    last_name: yup.string().min(3).max(20).required("Those fields are required!"),
    password: yup.string().min(8).max(25).required("This field is required!"),
    birthday: yup.date().required("Please select a date"),
  })

  const handleChangeEmail = (event) => {
    setEmailValue(event.target.value);
  };

  const handleEmailSubmit = () => {
    validationSchema
      .validate({ email: emailValue })
      .then(() => {
        setEmail(emailValue);
        console.log('Email:', emailValue);

        // Make a POST request to send the email
        axios.post('http://localhost:3001/send-email', { email: emailValue })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error('Error sending email:', error);
          });
      })
      .catch((error) => {
        console.error('Validation Error:', error.message);
      });
  };

 

  const onSubmit = (values) => {
    axios.post("http://localhost:3001/auth", values)
      .then(response => {
        console.log(response.data);
  
        // Combine form values with additional cookie values and email from state
        const requestBody = {
          email: emailValue,
          strict: true,
          performance: true,
          experiences: true,
          advertising: true
        };
  
        // Send the second request to update privacy settings
        return axios.post("http://localhost:3001/cookies/privacy", requestBody);
      })
      .then(response => {
        console.log('Privacy settings updated:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      })
    }

  

  return (
    <div className='flex flex-col overflow-scroll'>
      {email ? ( // Render second page if email is not empty
        <div className='flex flex-col gap-5 self-center w-1/4'>
          <h4 className='roboto-condensed text-2xl'>Woop.com</h4>
          <h4 className='roboto-condensed text-3xl'>Now let's make you a Woop Member.</h4>
          <p className='roboto-condensed'>We've sent a code to {email}</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchemaAccount}
            onSubmit={onSubmit}
          >
              <Form>
                <div className='flex flex-col gap-7 mb-6'>
                  <div>
                    <ErrorMessage name="first_name" component="span" />
                  </div>
                  <div className='flex flex-row gap-4'>
                    <Field
                      className="w-2/4 p-3 border-2 border-slate-500 rounded-lg"
                      autocomplete="on"
                      id="first_name"
                      name="first_name"
                      placeholder="First Name*"
                    />
                    <Field
                      className="w-2/4 p-3 border-2 border-slate-500 rounded-lg"
                      autocomplete="on"
                      id="last_name"
                      name="last_name"
                      placeholder="Last Name*"
                    />
                  </div>
                  <div>
                    <ErrorMessage name="password" component="span" />
                    <Field
                      className="w-full mb-3 p-3 border-2 border-slate-500 rounded-lg"
                      autocomplete="off"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password*"
                    />
                    <p className='roboto-condensed text-sm opacity-75'>Minimum of 8 characters</p>
                    <p className='roboto-condensed text-sm opacity-75'>Uppercase, lowercase letter, and one number</p>
                  </div>

                  <ErrorMessage name="gender" component="span" />
                  <Field as="select" className="w-full mb-3 p-3 border-2 border-slate-500 rounded-lg" id="gender" name="gender" placeholder="Gender*">
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="preferNotToSay">Prefer not to say</option>
                  </Field>

                  <ErrorMessage name="birthday" component="span" />
                  <Field
                    type="date"
                    className="w-full mb-3 p-3 border-2 border-slate-500 rounded-lg"
                    id="birthday"
                    name="birthday"
                    min="1960-01-01"
                    max="2024-12-31"
                  />

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="productsSales"
                      name="productsSales"
                      className="mr-4 custom-checkbox"
                    />
                    <label htmlFor="productsSales" className='roboto-condensed'>Sign up for emails to get updates from Woop on products, offers and your Member benefits.</label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="termsAndPrivacy"
                      name="termsAndPrivacy"
                      className="mr-4 custom-checkbox"
                    />
                    <label htmlFor="termsAndPrivacy" className='roboto-condensed'>I have read Woop's Terms of Service and agree to Woop's Privacy Policy</label>
                  </div>

                  <div className='flex flex-row justify-between mb-8'>
                    <span></span>
                    <button type='submit' onSubmit={onSubmit} className='px-6 py-3 rounded-full bg-black text-white'>
                      <p className='roboto-condensed-bold'>Create Account</p>
                    </button>
                  </div>
                </div>
              </Form>
           
          </Formik>
        </div>
      ) : ( // Render first page if email is empty
        <div className='flex flex-col gap-5 self-center w-1/4'>
          <div>
            <h4 className='roboto-condensed text-2xl'>Woop.com</h4>
          </div>
          <h4 className='roboto-condensed text-4xl'>Enter your email to join us or sign in.</h4>
          <div className='flex flex-row gap-4'>
            <p className='roboto-condensed text-base'>Romania</p>
            <p className='roboto-condensed-bold text-base cursor-pointer opacity-50 underline mt-0.5'> Change</p>
          </div>
          <input className='p-4 border-2 border-slate-500 rounded-lg' placeholder='Email*' value={emailValue} onChange={handleChangeEmail} />
          <p className='roboto-condensed text-xl text-slate-500'>By continuing, you agree to Woop’s Terms of Use and you confirm you have read Woop’s Privacy Policy.
          PS.It's a test website your data will be deleted in one hour</p>
          <div className='flex flex-row justify-between'>
            <span></span>
            <button className='px-6 py-3 rounded-full bg-black text-white' onClick={handleEmailSubmit}><p className='roboto-condensed-bold'>Continue</p></button>
          </div>
        </div>
      )}
    </div>
  );
};
