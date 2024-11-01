import { createBrowserRouter, RouteObject } from 'react-router-dom';
import MLayout from '../layout';
import Home from '@/views/Home';
import Login from '@/views/Login';
import { ReactNode } from 'react';

export type RouteType = RouteObject & {
  children?: RouteType[];
  meta?: {
    name?: string;
    title?: string;
    icon?: ReactNode;
  };
};

/**
 * 公共路由
 */
export const constantRoutes: RouteType[] = [
  {
    path: '/',
    id: 'Home',
    element: <MLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        meta: {
          title: '首页',
        },
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
];

// 创建一个可以被 React 应用程序使用的路由实例
const router = () => {
  const routes = createBrowserRouter(constantRoutes);
  return routes;
};

export default router;
