import { Navigate, Outlet } from 'react-router-dom'

import CustomerBenefits from '@/components/Footer/CustomerBenefits '
import CustomerFooter from '@/components/Footer/CustomerFooter'
import { isManage, removeToken } from '@/utils'

const CustomerLayout = () => {
  if (isManage()) {
    removeToken('token')
    return <Navigate to="/login" />
  }
  return (
    <>
      <Outlet />
      <CustomerBenefits />
      <CustomerFooter />
    </>
  )
}

export default CustomerLayout
