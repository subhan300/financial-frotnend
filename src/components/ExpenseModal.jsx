import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../utils/Transition';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  expenseName: Yup.string()
    .required('Expense title is required'),
  expenseValue: Yup.number()
    .required('Expense value is required')
    .min(0, 'Monthly debts must be a positive number'),
});

function ExpenseModal({
  modalOpen,
  setModalOpen
}) {

  const [formData, setFormData] = useState(null);

  const handleSubmit = (values, { setSubmitting }) => {
    setFormData(values);
    setSubmitting(false);
  };

  const modalContent = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modalOpen || modalContent.current.contains(target)) return
      setModalOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // // close if the esc key is pressed
  // useEffect(() => {
  //   const keyHandler = ({ keyCode }) => {
  //     if (!modalOpen || keyCode !== 27) return;
  //     setModalOpen(false);
  //   };
  //   document.addEventListener('keydown', keyHandler);
  //   return () => document.removeEventListener('keydown', keyHandler);
  // });

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 bg-slate-900 bg-opacity-70 z-50 transition-opacity"
        show={modalOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      {/* Modal dialog */}
      <Transition
        className="fixed inset-0 z-50 overflow-hidden flex items-center top-20 mb-4 justify-center px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={modalOpen}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div
          ref={modalContent}
          className="bg-white dark:bg-slate-800 border border-transparent dark:border-slate-700 overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg p-5"
        >
          <h1 className='text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100'>Add Expense</h1>
          <Formik
                  initialValues={{
                    expenseName: '',
                    expenseValue: '',
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form className="mt-5">
                      <div className="mb-5">
                        <label
                          className="block text-sm font-bold mb-1 text-slate-800 dark:text-slate-100"
                          htmlFor="expenseName"
                        >
                          Expense Name
                        </label>
                        <Field
                          type="text"
                          name="expenseName"
                          className="rounded w-full text-slate-800 dark:text-slate-100 bg-transparent"
                        />
                        <ErrorMessage
                          name="expenseName"
                          component="div"
                          className="text-sm font-medium text-red-600"
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          className="block text-sm font-bold mb-1 text-slate-800 dark:text-slate-100"
                          htmlFor="expenseValue"
                        >
                          Expense Value
                        </label>
                        <Field
                          type="number"
                          name="expenseValue"
                          className="rounded w-full text-slate-800 dark:text-slate-100 bg-transparent"
                        />
                        <ErrorMessage
                          name="expenseValue"
                          component="div"
                          className="text-sm font-medium text-red-600"
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-[#4F46E5] hover:bg-[#433BCB] text-white px-6 py-2 text-sm font-medium rounded-md"
                        disabled={isSubmitting}
                      >
                        Submit
                      </button>
                    </Form>
                  )}
          </Formik>
        </div>
      </Transition>
    </>
  );
}

export default ExpenseModal;
