import { lazy } from 'react';
import { Navigate } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Loadable from './Loadable';
// import HomePage from '../pages/home/home.page';

const HomePage = Loadable(lazy(() => import('~/pages/home/home.page')));
// const LoginPage = Loadable(lazy(() => import('~/pages/auth/login.page')));

export const publicRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: 'login', element: <LoginPage /> },
      { path: '404', element: <div>Page Not Found</div> },
      { path: '*', element: <Navigate to="/404" replace /> },
    ],
  },
];
