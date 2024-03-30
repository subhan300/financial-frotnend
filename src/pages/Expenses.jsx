import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ExpenseModal from '../components/ExpenseModal';

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
  const [expenseModalOpen, setExpenseModalOpen] = useState(false);


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
            <div className="flex items-center justify-center gap-6">
              
              <div className='flex flex-col w-full lg:w-[60%] bg-white dark:bg-slate-800 shadow-lg rounded-md border border-slate-200 dark:border-slate-700 p-5'>
                <h1 className='text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100'>Add Monthly Expenses</h1>
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
                        <label className='block text-sm font-bold mb-1 text-slate-800 dark:text-slate-100' htmlFor="monthlyRent">Monthly Rent</label>
                        <Field type="number" name="monthlyRent" className='rounded w-full text-slate-800 dark:text-slate-100 bg-transparent' />
                        <ErrorMessage name="monthlyRent" component="div" className='text-sm font-medium text-red-600' />
                      </div>
                      <div className='mb-5'>
                        <label className='block text-sm font-bold mb-1 text-slate-800 dark:text-slate-100' htmlFor="monthlyDebts">Monthly Debts</label>
                        <Field type="number" name="monthlyDebts" className='rounded w-full text-slate-800 dark:text-slate-100 bg-transparent' />
                        <ErrorMessage name="monthlyDebts" component="div" className='text-sm font-medium text-red-600' />
                      </div>
                      <div className='mb-5'>
                        <label className='block text-sm font-bold mb-1 text-slate-800 dark:text-slate-100' htmlFor="periodOfDebt">Period of Debt (in time)</label>
                        <Field type="number" name="periodOfDebt" className='rounded w-full text-slate-800 dark:text-slate-100 bg-transparent' />
                        <ErrorMessage name="periodOfDebt" component="div" className='text-sm font-medium text-red-600' />
                      </div>
                      

                      <button type="submit" className='bg-[#4F46E5] hover:bg-[#433BCB] text-white px-6 py-2 text-sm font-medium rounded-md' disabled={isSubmitting}>
                        Submit
                      </button>
                      <button type="submit" className='border bg-white border-[#4F46E5] hover:bg-[#433BCB] text-[#4F46E5] hover:text-white px-6 py-2 text-sm font-medium rounded-md ml-2' onClick={(e) => {
                        e.stopPropagation();
                        setExpenseModalOpen(true);
                      }} >
                        Add Expense
                      </button>
                      <ExpenseModal modalOpen={expenseModalOpen} setModalOpen={setExpenseModalOpen} />
                    </Form>
                  )}
                </Formik>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Expenses