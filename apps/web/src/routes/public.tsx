import { lazy } from 'react';
import { Navigate } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Loadable from './Loadable';
// import HomePage from '../pages/home/home.page';

const HomePage = Loadable(lazy(() => import('~/pages/home/home.page')));
const HistoriesPage = Loadable(lazy(() => import('~/pages/histories/histories.page')));
const LoginPage = Loadable(lazy(() => import('~/pages/auth/login/login.page')));
const ViolationsPage = Loadable(lazy(() => import('~/pages/violations/violations.page')));

export const publicRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'history-transactions', element: <HistoriesPage /> },
      { path: 'violations', element: <ViolationsPage /> },
      { path: 'login', element: <LoginPage /> },
      // { path: 'login', element: <LoginPage /> },
      { path: '404', element: <div>Page Not Found</div> },
      { path: '*', element: <Navigate to="/404" replace /> },
    ],
  },
];
