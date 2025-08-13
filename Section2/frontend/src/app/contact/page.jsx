'use client'
import { useFormik } from 'formik'
import React from 'react'

const Contact = () => {
  const contactform = useFormik({
    initialValues: {
      FirstName: '',
      LastName: '',
      Email: '',
      Phone: '',
      Typeyourmessagehere: '',
    },
    onSubmit: (values) => {
      console.log(values)
    }
  });

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="bg-white max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-6 h-full">
          <div className="bg-blue-900 p-10 col-span-2">
            <h2 className="mb-10 font-bold text-2xl text-blue-100 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
              Contact Info
            </h2>
            <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
              Location Address
              <span className="font-normal text-xl text-blue-300 block">
                Romada, 16/A, YoYo City, USA
              </span>
            </p>
            <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
              Phone Number
              <span className="font-normal text-xl text-blue-300 block">
                9189779064
              </span>
            </p>
            <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
              Email Address
              <span className="font-normal text-xl text-blue-300 block">
                example@example.com
              </span>
            </p>
            <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
              Web Address
              <span className="font-normal text-xl text-blue-300 block">
                designer.com
              </span>
            </p>
          </div>

          <div className="bg-blue-50 p-14 col-span-4">
            <h2 className="mb-14 font-bold text-4xl text-blue-900 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
              Get In Touch
            </h2>

            <form onSubmit={contactform.handleSubmit}>
              <div className="grid gap-6 mb-6 grid-cols-2">
                <input
                  name="FirstName"
                  placeholder="First Name"
                  onChange={contactform.handleChange}
                  value={contactform.values.FirstName}
                  className="py-4 bg-white rounded-full px-6 placeholder:text-xl"
                />
                <input
                  name="LastName"
                  placeholder="Last Name"
                  onChange={contactform.handleChange}
                  value={contactform.values.LastName}
                  className="py-4 bg-white rounded-full px-6 placeholder:text-xl"
                />
              </div>

              <div className="grid gap-6 mb-6 grid-cols-2">
                <input
                  name="Email"
                  placeholder="Email"
                  onChange={contactform.handleChange}
                  value={contactform.values.Email}
                  className="py-4 bg-white rounded-full px-6 placeholder:text-xl"
                />
                <input
                  name="Phone"
                  placeholder="Phone"
                  onChange={contactform.handleChange}
                  value={contactform.values.Phone}
                  className="py-4 bg-white rounded-full px-6 placeholder:text-xl"
                />
              </div>

              <div className="mb-6">
                <textarea
                  name="Typeyourmessagehere"
                  placeholder="Type your message here"
                  onChange={contactform.handleChange}
                  value={contactform.values.Typeyourmessagehere}
                  className="w-full bg-white rounded-2xl placeholder:text-xl px-6 py-4"
                  rows={8}
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="rounded-full bg-blue-900 text-white font-bold py-4 px-6 min-w-40 hover:bg-blue-800 transition-all"
                >
                  Submit
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
