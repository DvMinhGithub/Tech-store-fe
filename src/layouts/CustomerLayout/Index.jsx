import { Navigate, Outlet } from 'react-router-dom'

import CustomerBenefits from '@/components/Footer/CustomerBenefits '
import CustomerFooter from '@/components/Footer/CustomerFooter'
import CustomerHeader from '@/components/Header/CustomerHeadrer'
import { isManage, removeToken } from '@/utils'

const CustomerLayout = () => {
  if (isManage()) {
    removeToken('token')
    return <Navigate to="/login" />
  }
  return (
    <>
      <CustomerHeader />
      <Outlet />
      <CustomerBenefits />
      <CustomerFooter />
    </>
  )
}

export default CustomerLayout
