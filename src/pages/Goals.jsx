import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required'),
  price: Yup.number()
    .required('Price is required')
    .min(0, 'Price must be a positive number'),
  percentage: Yup.number()
    .required('Percentage is required')
    .min(0, 'Percentage must be a positive number'),
});

function Goals() {
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
            <div className="flex flex-col items-center justify-center gap-5">
              <div class="w-full lg:w-[60%]">
                <div class="flex flex-row bg-white shadow-sm rounded p-4">
                  <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-100 text-red-500">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 5v14m-6-7h12"
                      ></path>
                      <circle cx="6" cy="12" r="2" fill="currentColor"></circle>
                      <circle cx="18" cy="12" r="2" fill="currentColor"></circle>
                    </svg>
                  </div>

                  <div class="flex flex-col flex-grow ml-4">
                    <div class="text-sm text-gray-500">Your Goals</div>
                    <div class="font-bold text-lg">
                      $<span id="yearly-cost-result">0.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full lg:w-[60%] bg-white dark:bg-slate-800 shadow-lg rounded-md border border-slate-200 dark:border-slate-700 p-5">
                <h1 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100">
                  Setting Your Goals
                </h1>
                <Formik
                  initialValues={{
                    name: '',
                    price: '',
                    percentage: '',
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <>
                      <Form className="mt-5">
                        <div className="mb-5">
                          <label
                            className="block text-sm font-bold mb-1 text-slate-800 dark:text-slate-100"
                            htmlFor="name"
                          >
                            Name
                          </label>
                          <Field
                            type="text"
                            name="name"
                            className="rounded w-full text-slate-800 dark:text-slate-100 bg-transparent"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-sm font-medium text-red-600"
                          />
                        </div>
                        <div className="mb-5">
                          <label
                            className="block text-sm font-bold mb-1 text-slate-800 dark:text-slate-100"
                            htmlFor="price"
                          >
                            Price
                          </label>
                          <Field
                            type="number"
                            name="price"
                            className="rounded w-full text-slate-800 dark:text-slate-100 bg-transparent"
                          />
                          <ErrorMessage
                            name="price"
                            component="div"
                            className="text-sm font-medium text-red-600"
                          />
                        </div>
                        <div className="mb-5">
                          <label
                            className="block text-sm font-bold mb-1 text-slate-800 dark:text-slate-100"
                            htmlFor="percentage"
                          >
                            Percentage
                          </label>
                          <Field
                            type="number"
                            name="percentage"
                            className="rounded w-full text-slate-800 dark:text-slate-100 bg-transparent"
                          />
                          <ErrorMessage
                            name="percentage"
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
                    </>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Goals;
