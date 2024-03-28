import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';
import './charts/ChartjsConfig';

// Import pages
import { Dashboard, Expenses, Goals, Income, Login, Register } from './pages/index';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/income" element={<Income />} />
        <Route exact path="/expenses" element={<Expenses />} />
        <Route exact path="/goals" element={<Goals />} />
      </Routes>
    </>
  );
}

export default App;
