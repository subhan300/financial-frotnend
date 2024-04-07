import React, { useEffect } from 'react';
import './css/style.css';
import './charts/ChartjsConfig';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Import pages
import AppRoutes from './routes/index';

function App() {
  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change
  return (
    <>
      <ToastContainer />
      <AppRoutes />
    </>
  );
}

export default App;
