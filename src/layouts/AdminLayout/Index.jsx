import { Outlet } from 'react-router-dom'

import Header from '@/components/Header/ManageHeader'
import Sidebar from '@/components/Sidebar'

import { Layout } from 'antd'

const { Content } = Layout

const AdminLayout = () => {
  return (
    <Layout className="min-h-screen bg-white">
      <Header />
      <Layout className="bg-white">
        <Sidebar />
        <Content className="p-4 lg:p-6">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
