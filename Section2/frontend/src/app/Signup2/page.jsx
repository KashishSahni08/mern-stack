'use client'
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    
     name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('naam nahi hai kya'),
   email: Yup.string().email('Invalid email').required('Required'),
   password: Yup.string().required('Password is required')
    .matches(/[a-z]/, 'lowercase letter is required')
    .matches(/[A-z]/, 'uppercase  letter is required')
    .matches(/[0-9]/, ' number is required')
    .matches(/\W/, ' special character is required')
    .min(6, '6 characters are required'),
    confirmpassword: Yup.string().required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
 });
 

const SignUp = () => {
  //initialiazation
const SignupForm = useFormik ({
  initialValues: {
   name: '',
   email: '',
   password: '',
   confirmpassword: ''

  },
  onSubmit: (values,{resetForm}) => {
    console.log(values);

     axios.post(`http://localhost:5000/product/add`, values)
      .then((result)=>{
        toast.success("Product registration successful")
      }).catch((err)=>{
        toast.error("Product registration failed");
      });
  },
  validationSchema: SignupSchema,
});

  return (
<section className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-500">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <a
      href="#"
      className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
    >

    </a>
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg:white dark:border-gray-700">
      <div className="p-8 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black text-center">
          Sign Up
        </h1>
        <form onSubmit={SignupForm.handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-black dark:text-black">
              Your name
            </label>
            <input
              type="text"
              id="name"
              onChange={SignupForm.handleChange}
              value={SignupForm.values.name}
              className="bg-white border border-gray-300 focus:text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            />
          </div>
          {
            ( SignupForm.touched.name && SignupForm.errors.name) &&(
              <p className="text-xs text-red-600 mt-2" id="email-error">
                {SignupForm.errors.name}
              </p>
            )
          }
            <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-black dark:text-black">
              Your email
            </label>
            <input
              type="email"
             id="email"
              onChange={SignupForm.handleChange}
              value={SignupForm.values.email}
              className="bg-white border border-gray-300 focus:text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            />
          </div>
          {
            ( SignupForm.touched.email && SignupForm.errors.email) &&(
              <p className="text-xs text-red-600 mt-2" id="email-error">
                {SignupForm.errors.email}
              </p>
            )
          }
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-black dark:text-black"
            >
              Password
            </label>
            <input
              type="password"
               id="password"
              onChange={SignupForm.handleChange}
              value={SignupForm.values.password}
              className="bg-white border border-gray-300 focus:text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            />
          </div>
          {
            ( SignupForm.touched.password && SignupForm.errors.password) &&(
              <p className="text-xs text-red-600 mt-2" id="email-error">
                {SignupForm.errors.password}
              </p>
            )
          }
          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-black dark:text-black"
            >
              Confirm password
            </label>
            <input
           type="password"
          id="confirmpassword"
              onChange={SignupForm.handleChange}
              value={SignupForm.values.confirmpassword}
              placeholder=""
              className="bg-white border border-gray-300 focus:text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          {
            ( SignupForm.touched.confirmpassword && SignupForm.errors.confirmpassword) &&(
              <p className="text-xs text-red-600 mt-2" id="email-error">
                {SignupForm.errors.confirmpassword}
              </p>
            )
          }
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-blue-500 focus:ring-3 focus:ring-gray-300  dark:border-gray-400 dark:focus:ring-gray-200 dark:ring-offset-gray-100"
              />
            </div>
            <div className="ml-2 text-sm">
              <label
                htmlFor="terms"
                className="font-50 text-black "
              >
              I accept the{" "}
                <a
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Create an account
          </button>
          <p className="text-sm  text-black  dark:text-black">
            Already have an account?{" "}
            <a
              href="#"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>
    
  )
}

export default SignUp;