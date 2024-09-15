import { Outlet } from 'react-router-dom'

import Header from '@/components/Layout/Header/ManageHeader'

import { Layout } from 'antd'
import AdminSidebar from '@/components/Layout/Sidebar'

const { Content } = Layout

const AdminLayout = () => {
  return (
    <Layout className="min-h-screen bg-white">
      <Header />
      <Layout className="bg-white">
        <AdminSidebar />
        <Content className="p-4 lg:p-6">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
