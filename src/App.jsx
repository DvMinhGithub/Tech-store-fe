// src/App.js
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import AdminLayout from './layouts/AdminLayout/Index'
import CustomerLayout from './layouts/CustomerLayout/Index'
import ProtectedRoute from './routes/ProtectedRoute'
import { routes } from './routes/routes'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const LoginPage = React.lazy(() => import('./pages/LoginPage/Index'))
const RegisterPage = React.lazy(() => import('./pages/RegisterPage/Index'))
const CustomerHomePage = React.lazy(() => import('./pages/HomePage/CustomerHomePage'))
const PageNotFound = React.lazy(() => import('./pages/PageNotFound/PageNotFound'))

// Trang Admin
const adminRoutes = [
  { path: routes.auth.homeAdmin, element: React.lazy(() => import('./pages/HomePage/ManageHomePage')) }
]
const loadingIndicator = <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} fullscreen />

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={loadingIndicator}>
        <Routes>
          <Route path={routes.auth.login} element={<LoginPage />} />
          <Route path={routes.auth.register} element={<RegisterPage />} />
          <Route element={<CustomerLayout />}>
            <Route path={routes.auth.home} element={<CustomerHomePage />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route element={<AdminLayout />}>
              {adminRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={<route.element />} />
              ))}
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  )
}

export default App
