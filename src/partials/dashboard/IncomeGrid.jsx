import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function FinanceGrid() {
  const navigation = useNavigate();
  const { incomes } = useSelector((state) => state.income);
  console.log(incomes);
  return (
    <div className="col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Income</h2>
      </header>
      <div className="p-3">
        {/* Card content */}
        {/* "Today" group */}
        <div>
          <header className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm font-semibold p-2">
            Today
          </header>
          <ul className="my-1">
            {/* Item */}
            {incomes?.map((incomeItem, incomeIndex) => (
              <ul key={incomeIndex}>
                {incomeItem.extra_income.map((extraIncomeItem, extraIncomeIndex) => (
                  <li key={extraIncomeIndex} className="flex px-2">
                    <div className="w-9 h-9 rounded-full shrink-0 bg-emerald-500 my-2 mr-3">
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
                            {extraIncomeItem.income_name}
                          </a>
                        </div>
                        <div className="flex items-center ml-2">
                          <span className="font-medium text-emerald-500">
                            +{extraIncomeItem.price}
                          </span>
                          <svg
                            onClick={() => {
                              navigation(`income/${incomeItem._id}`);
                            }}
                            className="w-6 h-6 text-gray-800 dark:text-white ml-2" // Added ml-2 for margin
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
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FinanceGrid;