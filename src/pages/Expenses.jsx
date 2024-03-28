import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  monthlyRent: Yup.number()
    .required('Monthly rent is required')
    .min(0, 'Monthly rent must be a positive number'),
  monthlyDebts: Yup.number()
    .required('Monthly debts are required')
    .min(0, 'Monthly debts must be a positive number'),
  periodOfDebt: Yup.date()
    .required('Period of debt is required')
    .min(0, 'Period of debt must be a positive number'),
});


function Expenses() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState(null);


  const handleSubmit = (values, { setSubmitting }) => {
    setFormData(values);
    setSubmitting(false);
  };

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <h1 className='text-xl md:text-2xl font-bold'>Add Monthly Expenses</h1>
            <Formik
              initialValues={{
                monthlyRent: '',
                monthlyDebts: '',
                periodOfDebt: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className='mt-5'>
                  <div className='mb-5'>
                    <label className='block text-sm font-bold mb-1' htmlFor="monthlyRent">Monthly Rent</label>
                    <Field type="number" name="monthlyRent" className='rounded w-full md:w-[400px]' />
                    <ErrorMessage name="monthlyRent" component="div" className='text-sm font-medium text-red-600' />
                  </div>
                  <div className='mb-5'>
                    <label className='block text-sm font-bold mb-1' htmlFor="monthlyDebts">Monthly Debts</label>
                    <Field type="number" name="monthlyDebts" className='rounded w-full md:w-[400px]' />
                    <ErrorMessage name="monthlyDebts" component="div" className='text-sm font-medium text-red-600' />
                  </div>
                  <div className='mb-5'>
                    <label className='block text-sm font-bold mb-1' htmlFor="periodOfDebt">Period of Debt (in time)</label>
                    <Field type="number" name="periodOfDebt" className='rounded w-full md:w-[400px]' />
                    <ErrorMessage name="periodOfDebt" component="div" className='text-sm font-medium text-red-600' />
                  </div>
                  <button type="submit" className='bg-[#4F46E5] hover:bg-[#433BCB] text-white px-4 py-2 text-sm font-medium rounded-md' disabled={isSubmitting}>
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Expenses