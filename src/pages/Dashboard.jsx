import React, { useState, useEffect } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';

import FinancialCard from '../partials/dashboard/FinancialCard';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import FinanceGrid from '../partials/dashboard/FinanceGrid';
import Banner from '../partials/Banner';
import { useDispatch, useSelector } from 'react-redux';
import { getIncome } from '../redux/features/income/income.reducer';
import { getUserToken } from '../utils/Utils';
import { getExpense } from '../redux/features/expense/expense.reducer';

function Dashboard() {
  const dispatch = useDispatch();
  const { incomes, isLoading, isSucess } = useSelector((state) => state.income);
  const { expenses } = useSelector((state) => state.expense);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    dispatch(getIncome('66098cbee88dfcb4dfb78056'));
    dispatch(getExpense('66098cbee88dfcb4dfb78056'));
  }, []);
  console.log(expenses, 'expenses===');
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
              <FinancialCard
                title="Total Income"
                subTitle="Insights"
                value={incomes?.total_income}
              />

              {/* Expense Card */}
              <FinancialCard
                title="Total Expense"
                subTitle="Insights"
                value={expenses?.total_expense}
              />
              {/* Card (Income/Expenses) */}
              <FinanceGrid />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
