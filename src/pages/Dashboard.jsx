import React, { useState } from 'react';

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

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

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
                value={12000}
              />
              
              {/* Expense Card */}
              <FinancialCard 
                title="Total Expense"
                subTitle="Insights"
                value={7000}
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