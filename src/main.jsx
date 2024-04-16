import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Root from './Root.jsx';
import Home from './components/Home.jsx';
import './index.css';
import ErrorPage from './components/ErrorPage';
import Update from './components/Update';
import Login from './components/Login.jsx';
import Register from './components/Register';
import EstateDetails from './components/EstateDetails.jsx';
import Contact from './components/Contact.jsx';
import AuthProvider from './components/AuthProvider.jsx';
import Private from './components/Private.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/update-profile",
        element: <Private><Update /></Private>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/details/:id",
        element: <Private><EstateDetails /></Private>,
        loader: () => fetch('https://shawonece.github.io/fake-data/estate.json')
      },
      {
        path: "/contact",
        element: <Private><Contact /></Private>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
