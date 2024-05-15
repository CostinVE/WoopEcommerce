import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react'
import * as yup from "yup"
import axios from 'axios';

export const Login = () => {

   const initialValues = {
    email: "",
    password: ""
   }

   const validationSchema = yup.object().shape({
     email: yup.string().email("Invalid email address").required("Email address required!"),
     password: yup.string().min(8).max(25).required("Password is required!")
   })
   
   

   const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth/Login", data, { withCredentials: true }) // Set withCredentials to true to allow cookies in CORS requests
      .then(response => {
        console.log(response.data);
        if (response.headers['set-cookie']) {
          // Extract the access_token from the set-cookie header
          const cookie = response.headers['set-cookie'][0];
          const accessToken = cookie.split(';')[0].split('=')[1];
          console.log("Access Token:", accessToken);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      })
};

  
  
  

  return (
    <div className='flex flex-col overflow-scroll'>
        <div className='flex flex-col items-center gap-6 mt-8 self-center w-1/4'>
            <h2 className='roboto-condensed text-3xl'>Sign into your account!</h2>
        <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}>
            <Form className='flex flex-col self-center w-3/4'>
                <div className='flex flex-col gap-7 mb-6'>
                <ErrorMessage name="email" component="span"/>
                <Field
                 className="w-full p-3 border-2 border-slate-500 rounded-lg"
                 autocomplete="on"
                 id="email"
                 name="email"
                 placeholder="Email*"
                />
                <ErrorMessage name="password" component="span"/>
                <Field
                 className="w-full p-3  border-2 border-slate-500 rounded-lg"
                 autocomplete="on"
                 type="password"
                 id="password"
                 name="password"
                 placeholder="Password*"
                />
                <p className='roboto-condensed-bold text-base text-slate-500'>Forgot credentials ?</p>
                <div className='w-full self-center mt-12'>
                    <button type='submit' className='py-3 w-full rounded-full bg-black text-white'>
                      <p className='roboto-condensed-bold'>Login</p>
                    </button>
                  </div>
            </div>
            </Form>
        </Formik>
        </div>
    </div>
  )
}
