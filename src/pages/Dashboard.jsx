import React, { useState, useEffect } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';

import FinancialCard from '../partials/dashboard/FinancialCard';

import FinanceGrid from '../partials/dashboard/IncomeGrid';
import Banner from '../partials/Banner';
import { useDispatch, useSelector } from 'react-redux';
import { getIncome } from '../redux/features/income/income.reducer';
import { getUserId, getUserToken } from '../utils/Utils';
import { getExpense } from '../redux/features/expense/expense.reducer';
import ExpenseGrid from '../partials/dashboard/ExpenseGrid';
import { getGoal } from '../redux/features/goal.reducer';

function Dashboard() {
  const UserId = getUserId();
  const dispatch = useDispatch();
  const { goal } = useSelector((state) => state.goal);
  const { incomes, isLoading, isSucess } = useSelector((state) => state.income);
  const { expenses } = useSelector((state) => state.expense);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (UserId) {
          await Promise.all([
            dispatch(getIncome(String(UserId))),
            dispatch(getExpense(String(UserId))),
            dispatch(getGoal(String(UserId))),
          ]);
        }
      } catch (error) {
        // Handle errors if any of the dispatches fail
        console.error('Error fetching data:', error);
      }
    };
    // Call fetchData function
    fetchData();
    // Since we have no dependencies, pass an empty dependency array to run this effect only once
  }, []);

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
            {/* Welcome banner */}
            <WelcomeBanner />
            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {/* Income Card */}
              {/* <FinancialCard
                monthly_saving={goal.length > 0 ? goal[0].monthly_saving || 0 : 0}
                fixed_expense={incomes?.[0]?.total_income ? incomes[0].total_income : 0}
                money_toused={
                  (goal?.[0]?.monthly_saving ?? 0) -
                  (incomes?.[0]?.total_income ?? 0) -
                  (expenses?.[0]?.total_expense ?? 0)
                }
                title="Monthly Planing"
              /> */}

              {/* Expense Card */}
              {/* <FinancialCard
                monthly_saving={goal?.length > 0 ? goal?.[0]?.monthly_saving || 0 : 0}
                fixed_expense={expenses?.length > 0 ? expenses?.[0]?.total_expense || 0 : 0}
                money_toused={
                  (goal?.[0]?.monthly_saving ?? 0) -
                  (incomes?.[0]?.total_income ?? 0) -
                  (expenses?.[0]?.total_expense ?? 0)
                }
                title="Actual Transactions"
              /> */}
              {/* Card (Income/Expenses) */}
              <FinanceGrid />
              <ExpenseGrid />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
