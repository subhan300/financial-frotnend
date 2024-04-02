import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ExpenseModal from '../components/ExpenseModal';
import { useDispatch } from 'react-redux';
import { createExpense } from '../redux/features/expense/expense.reducer';
import { getUserId } from '../utils/Utils';

const validationSchema = Yup.object().shape({
  monthly_rent: Yup.number()
    .required('Monthly rent is required')
    .min(0, 'Monthly rent must be a positive number'),
  monthly_debts: Yup.number()
    .required('Monthly debts are required')
    .min(0, 'Monthly debts must be a positive number'),
  debts_period: Yup.date()
    .required('Period of debt is required')
    .min(0, 'Period of debt must be a positive number'),
});

function Expenses() {
  const userId = getUserId();
  const dispatch = useDispatch();
  const [total_expense, setTotalExpense] = useState('');
  const [expense, setAddExpense] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expenseModalOpen, setExpenseModalOpen] = useState(false);
  // Reducer function to calculate the total price
  const totalPriceReducer = (accumulator, currentValue) => accumulator + currentValue.price;
  // Calculate the total price using the reducer
  let totalPrice = expense.reduce(totalPriceReducer, 0);
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>

                  <div class="flex flex-col flex-grow ml-4">
                    <div class="text-sm text-gray-500">Monthly Expenses</div>
                    <div class="font-bold text-lg">
                      $<span id="yearly-cost-result">{total_expense}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full lg:w-[60%] bg-white dark:bg-slate-800 shadow-lg rounded-md border border-slate-200 dark:border-slate-700 p-5">
                <h1 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100">
                  Add Monthly Expenses
                </h1>
                <Formik
                  initialValues={{
                    monthly_rent: '',
                    monthly_debts: '',
                    debts_period: '',
                    other_expense: '',
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    const { monthly_rent, monthly_debts, debts_period } = values;
                    let data = {
                      UserId: String(userId),
                      monthly_rent: monthly_rent,
                      monthly_debts: monthly_debts,
                      debts_period: debts_period,
                      other_expense: expense,
                      total_expense: total_expense,
                    };
                    dispatch(createExpense(data));
                    setSubmitting(false);
                  }}
                >
                  {({ values, isSubmitting }) => {
                    setTotalExpense(
                      Number(values.monthly_rent) +
                        Number(values.monthly_debts) +
                        Number(totalPrice)
                    );
                    return (
                      <>
                        <Form className="mt-5">
                          <div className="mb-5">
                            <label
                              className="block text-sm font-bold mb-1 text-slate-800 dark:text-slate-100"
                              htmlFor="monthlyRent"
                            >
                              Monthly Rent
                            </label>
                            <Field
                              type="number"
                              name="monthly_rent"
                              className="rounded w-full text-slate-800 dark:text-slate-100 bg-transparent"
                            />
                            <ErrorMessage
                              name="monthly_rent"
                              component="div"
                              className="text-sm font-medium text-red-600"
                            />
                          </div>
                          <div className="mb-5">
                            <label
                              className="block text-sm font-bold mb-1 text-slate-800 dark:text-slate-100"
                              htmlFor="monthlyDebts"
                            >
                              Monthly Debts
                            </label>
                            <Field
                              type="number"
                              name="monthly_debts"
                              className="rounded w-full text-slate-800 dark:text-slate-100 bg-transparent"
                            />
                            <ErrorMessage
                              name="monthly_debts"
                              component="div"
                              className="text-sm font-medium text-red-600"
                            />
                          </div>
                          <div className="mb-5">
                            <label
                              className="block text-sm font-bold mb-1 text-slate-800 dark:text-slate-100"
                              htmlFor="periodOfDebt"
                            >
                              Period of Debt (in time)
                            </label>
                            <Field
                              type="number"
                              name="debts_period"
                              className="rounded w-full text-slate-800 dark:text-slate-100 bg-transparent"
                            />
                            <ErrorMessage
                              name="debts_period"
                              component="div"
                              className="text-sm font-medium text-red-600"
                            />
                          </div>
                          <div className="mb-5 flex justify-end">
                            <div>
                              <svg
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setExpenseModalOpen(true);
                                }}
                                class="w-6 h-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                              </svg>
                            </div>
                          </div>

                          <div className="max-w-2xl mx-auto mb-5">
                            <div className="flex flex-col">
                              <div className="overflow-x-auto shadow-md sm:rounded-lg">
                                <div className="inline-block min-w-full align-middle">
                                  <div className="overflow-hidden ">
                                    <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                      <thead className="bg-gray-100 dark:bg-gray-700">
                                        <tr>
                                          <th
                                            scope="col"
                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                          >
                                            Name
                                          </th>

                                          <th
                                            scope="col"
                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                          >
                                            Price
                                          </th>
                                          <th scope="col" className="p-4">
                                            <span className="sr-only">Edit</span>
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                        {expense?.map((item, index) => {
                                          return (
                                            <>
                                              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <td className="py-4 px-6 text-sm font-medium capitalize text-gray-900 whitespace-nowrap dark:text-white">
                                                  {item?.expense_name}
                                                </td>

                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                  {`${item?.price}$`}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                  <a
                                                    href="#"
                                                    className="text-blue-600 dark:text-blue-500 hover:underline"
                                                  >
                                                    Edit
                                                  </a>
                                                </td>
                                              </tr>
                                            </>
                                          );
                                        })}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="bg-[#4F46E5] hover:bg-[#433BCB] text-white px-6 py-2 text-sm font-medium rounded-md"
                            disabled={isSubmitting}
                          >
                            Submit
                          </button>
                        </Form>
                        <ExpenseModal
                          setAddExpense={setAddExpense}
                          modalOpen={expenseModalOpen}
                          setModalOpen={setExpenseModalOpen}
                        />
                      </>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Expenses;
