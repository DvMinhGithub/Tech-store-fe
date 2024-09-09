import { Navigate, Outlet } from 'react-router-dom'

import { isManage, removeToken } from '@/utils'

const CustomerLayout = () => {
  if (isManage()) {
    removeToken('token')
    return <Navigate to="/login" />
  }
  return (
    <>
      <Outlet />
    </>
  )
}

export default CustomerLayout
