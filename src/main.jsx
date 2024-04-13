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
import Profile from './components/Profile';
import Update from './components/Update';
import Login from './components/Login.jsx';
import Register from './components/Register';
import EstateDetails from './components/EstateDetails.jsx';
import About from './components/Contact.jsx';
import Contact from './components/Contact.jsx';
import AuthProvider from './components/AuthProvider.jsx';

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
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/update-profile",
        element: <Update />,
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
        element: <EstateDetails />,
        loader: () => fetch('https://shawonece.github.io/fake-data/estate.json')
      },
      {
        path: "/contact",
        element: <Contact />,
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
