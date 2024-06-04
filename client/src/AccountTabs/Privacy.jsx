import React, {useEffect, useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import '../../App.css';

import { useSelector } from 'react-redux'


export const Privacy = () => {
  const email = useSelector((state) => state.email);

  const [initialValues, setInitialValues] = useState({
    strict: false,
    performance: false,
    experiences: false,
    advertising: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/cookies/${email}`);
        console.log(response.data)
        const responseData = response.data;
        setInitialValues({
          strict: Boolean(responseData.strict),
          performance: Boolean(responseData.performance),
          experiences: Boolean(responseData.experiences),
          advertising: Boolean(responseData.advertising),
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (email) {
      fetchData(); // Call the function on component mount if email is available
    }
  }, [email]);

  useEffect(() => {
    if (initialValues.performance) {
      document.querySelector('input[name="performance"]').checked = true;
    } else {
      document.querySelector('input[name="performance"]').checked = false;
    }
  }, [initialValues.performance]);

  useEffect(() => {
    console.log('Checkbox values:');
    console.log('Performance:', document.querySelector('input[name="performance"]').checked);
    console.log('Strict:', document.querySelector('input[name="strict"]').checked);
    console.log('Experiences:', document.querySelector('input[name="experiences"]').checked);
    console.log('Advertising:', document.querySelector('input[name="advertising"]').checked);
  }, [initialValues]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setInitialValues((prevValues) => ({ ...prevValues, [name]: checked }));
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3001/cookies/privacy', initialValues);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className='flex flex-col w-1/3 gap-6 overflow-auto'>
    <span className='h-48'></span>
    <p className='text-2xl'>Privacy</p>
    <p className='text-base mb-8'>In order to enhance your experience across our platforms and show you more relevant information, we use cookies and similar technologies, both Woop-owned and third-party. You may adjust your cookie and other privacy preferences below.

Changes you make to your privacy settings apply across Woop.com and all of the Woop apps you use. For more information, see our Privacy & Cookie Policy. 

</p>
<Formik
      initialValues={initialValues}
      onSubmit={onSubmit}>
      <Form className='flex flex-col'>

        {/* Strict cookies */}
      <div className="checkboxes__row cursor-not-allowed">
      <div className="checkboxes__item border-t-2 border-black border-opacity-60 py-3 px-2 cursor-not-allowed">
        <label className="checkbox style-c cursor-not-allowed">
        <Field type="checkbox" name="strict" className="checkbox__input cursor-not-allowed" checked={initialValues.strict} disabled={true}/>

          <div className="checkbox__checkmark"></div>
          <div className="flex flex-col gap-4 checkbox__body">
            <p className='cursor-not-allowed'>Stricly necesary  (always on)</p>
          <p className='opacity-50 cursor-not-allowed'>Enables core functionality to power your language, location and shopping bag. Also supports security, network management and accessibility.</p></div>
        </label>
      </div>
    </div>

     {/* Performance and analytics */}
    <div className="checkboxes__row">
      <div className="checkboxes__item border-t-2 border-black border-opacity-60 py-3 px-2">
        <label className="checkbox style-c">
        <Field
        type="checkbox"
        name="performance"
        className="checkbox__input"
        checked={initialValues.performance}
        onChange={handleCheckboxChange}
      />
          <div className="checkbox__checkmark"></div>
          <div className="flex flex-col gap-4 checkbox__body">
            <p>Performance & analytics</p>
          <p className='opacity-50'>Allows use of behavioural data to optimise performance, review how you interact with our sites and apps, and improve Woop experiences. (Don't worry all data is deleted)</p></div>
        </label>
      </div>
    </div>
 

    {/* Personalised experiences */}

    <div className="checkboxes__row">
      <div className="checkboxes__item border-t-2 border-black border-opacity-60 py-3 px-2">
        <label className="checkbox style-c">
        <Field
        type="checkbox"
        name="experiences"
        className="checkbox__input"
        checked={initialValues.experiences}
        onChange={handleCheckboxChange}
      />
          <div className="checkbox__checkmark"></div>
          <div className="flex flex-col gap-4 checkbox__body">
            <p>Personalised experiences</p>
          <p className='opacity-50'>Allows use of behavioural data, using cookies and other technologies, to improve your experience and provide relevant content on Woop platforms and in communications.</p></div>
        </label>
      </div>
    </div>

    {/* Personnalised advertising */}

    <div className="checkboxes__row">
      <div className="checkboxes__item border-t-2 border-black border-opacity-60 py-3 px-2">
        <label className="checkbox style-c">
        <Field
        type="checkbox"
        name="advertising"
        className="checkbox__input"
        checked={initialValues.advertising}
        onChange={handleCheckboxChange}
      />
                <div className="checkbox__checkmark"></div>
          <div className="checkbox__checkmark"></div>
          <div className="flex flex-col gap-4 checkbox__body">
            <p>Personalised advertising</p>
          <p className='opacity-50'>Allows sharing of behavioural data with advertising partners. This data is used to enhance and report on the personalised advertising experience on partner sites.</p></div>
        </label>
      </div>
    </div>



        <div className='flex flex-row justify-between mb-20'>
      <span></span>
      <button
         type="submit"
         className="p-2 text-white bg-black hover:bg-zinc-500 cursor-pointer rounded-xl mt-8">Save
                    </button>
    </div>
      </Form>
    </Formik>
        </div>
  )
}
