import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteExpense } from '../../redux/features/expense/expense.reducer';
import ConfirmModal from '../../components/ConfirmModal';
import ExtraExpenseModal from '../../components/ExtraExpenseModal';

function ExpenseGrid() {
  const [modalOpen, setModalOpen] = useState(false);
  const [extraIncomeModalOpen, setExtraIncomeModalOpen] = useState(false);

  const { expenses } = useSelector((state) => state.expense);
  const dispatch = useDispatch();
  const handleDeleteExpense = (id) => {
    dispatch(deleteExpense(id));
  };
  return (
    <>
      <div className="col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">Expense</h2>
        </header>
        <div className="p-3">
          {/* Card content */}
          {/* "Today" group */}
          <div>
            <header className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm font-semibold p-2 flex items-center">
              <div className="w-full">Monthly Rent</div>
              <div className="w-full">Monthly Debts</div>

              <div className="w-full cursor-pointer" onClick={() => setExtraIncomeModalOpen(true)}>
                Extra Expense ...
              </div>
              <div className="w-full">Price</div>
              <ExtraExpenseModal
                modalOpen={extraIncomeModalOpen}
                setModalOpen={setExtraIncomeModalOpen}
                value={expenses}
              />
            </header>
            <ul className="my-1">
              {/* Item */}
              {expenses?.length > 0 ? (
                expenses.map((item, index) => (
                  <ul>
                    <li key={index} className="flex px-2">
                      <div className="w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3">
                        <svg className="w-9 h-9 fill-current text-emerald-50" viewBox="0 0 36 36">
                          <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                        </svg>
                      </div>
                      <div className="grow flex items-center border-b border-slate-100 dark:border-slate-700 text-sm py-2">
                        <div className="grow flex justify-between items-center">
                          <div>
                            <a
                              className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white"
                              href="#0"
                            >
                              {`$${item?.monthly_rent}`}
                            </a>
                          </div>
                          <div>
                            <a
                              className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white"
                              href="#0"
                            >
                              {item?.monthly_rent}
                            </a>
                          </div>
                          <div>
                            <a
                              className="text-center font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white"
                              href="#0"
                            >
                              {`${item?.other_expense[0]?.expense_name}`}
                            </a>
                          </div>
                          <div>
                            <a
                              className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white"
                              href="#0"
                            >
                              {`${item?.other_expense[0]?.price}`}
                            </a>
                          </div>
                          <div className="flex items-center ml-2">
                            <span className="font-medium text-emerald-500"></span>
                            <svg
                              onClick={() => {
                                navigation(`income/${item._id}`);
                              }}
                              className="w-6 h-6 text-gray-800 hover:text-[#4F46E5] cursor-pointer dark:text-white ml-2" // Added ml-2 for margin
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                              />
                            </svg>
                            <svg
                              onClick={() => setModalOpen(true)}
                              class="w-6 h-6 text-gray-800 hover:text-[#4F46E5] cursor-pointer dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <ConfirmModal
                              modalOpen={modalOpen}
                              setModalOpen={setModalOpen}
                              value={expenses[0]._id}
                              valueType={'expense'}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                ))
              ) : (
                <p className="text-center">No Records</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpenseGrid;
