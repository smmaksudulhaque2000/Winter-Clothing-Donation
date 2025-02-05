import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import 'animate.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from './provider/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </StrictMode>
);
