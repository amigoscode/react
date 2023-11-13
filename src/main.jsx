import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import AboutUs from './pages/AboutUs.jsx';
import styles from './App.module.css';
import App from './App.jsx';
import Details from './components/Details.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/:name',
        element: <Details />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className={styles.wrapper}>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
