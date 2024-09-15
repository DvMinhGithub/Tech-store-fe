import { useState } from 'react'
import { decodeToken } from 'react-jwt'
import { Link, useLocation } from 'react-router-dom'

import { tokenOperations } from '@/utils'

import {
  BankOutlined,
  ContainerOutlined,
  DashboardOutlined,
  GiftOutlined,
  MenuOutlined,
  ShopOutlined,
  TagOutlined,
  TeamOutlined,
  UnorderedListOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Button, Drawer, Layout, Menu } from 'antd'

const { Sider } = Layout

const menuData = [
  {
    key: 'admin',
    icon: <DashboardOutlined />,
    label: <Link to="/admin">Tổng quan</Link>,
    roles: ['ADMIN']
  },
  {
    key: 'admin-product',
    icon: <UnorderedListOutlined />,
    label: <Link to="/admin/product">Danh sách sản phẩm</Link>,
    roles: ['ADMIN', 'EMPLOYEE']
  },
  {
    key: 'admin-category',
    icon: <ContainerOutlined />,
    label: <Link to="/admin/category">Danh mục sản phẩm</Link>,
    roles: ['ADMIN', 'EMPLOYEE']
  },
  {
    key: 'admin-brand',
    icon: <ShopOutlined />,
    label: <Link to="/admin/brand">Thương hiệu</Link>,
    roles: ['ADMIN', 'EMPLOYEE']
  },
  {
    key: 'admin-supplier',
    icon: <BankOutlined />,
    label: <Link to="/admin/supplier">Nhà cung cấp</Link>,
    roles: ['ADMIN']
  },
  {
    key: 'admin-product-batch',
    icon: <ShopOutlined />,
    label: <Link to="/admin/product-batch">Lô hàng</Link>,
    roles: ['ADMIN', 'EMPLOYEE']
  },
  {
    key: 'admin-employee',
    icon: <TeamOutlined />,
    label: <Link to="/admin/employee">Nhân viên</Link>,
    roles: ['ADMIN']
  },
  {
    key: 'admin-promotion',
    icon: <GiftOutlined />,
    label: <Link to="/admin/promotion">Khuyến mãi</Link>,
    roles: ['ADMIN', 'EMPLOYEE']
  },
  {
    key: 'admin-voucher',
    icon: <TagOutlined />,
    label: <Link to="/admin/voucher">Voucher</Link>,
    roles: ['ADMIN', 'EMPLOYEE']
  },
  {
    key: 'admin-employee-profile',
    icon: <UserOutlined />,
    label: <Link to="/admin/employee/profile">Thông tin cá nhân</Link>,
    roles: ['EMPLOYEE']
  }
]

const filterMenuByRole = (menuItems, userRoles) => {
  return menuItems.filter((item) => item.roles.some((role) => userRoles.includes(role)))
}

const AdminSidebar = () => {
  const location = useLocation()
  const [isSlideMenuMobileOpen, setIsSlideMenuMobileOpen] = useState(false)

  const token = tokenOperations.get()
  const dataFromToken = decodeToken(token)

  const getSelectedKeys = () => {
    const path = location.pathname.split('/').filter((i) => i)
    return path.length > 0 ? [path.join('-')] : ['/']
  }

  const generateMenuItems = (data) => {
    return filterMenuByRole(data, dataFromToken.roles).map((item) => ({
      key: item.key,
      icon: item.icon,
      label: item.label
    }))
  }

  return (
    <>
      <Sider width={250} className="lg-max:hidden">
        <Menu
          mode="inline"
          selectedKeys={getSelectedKeys()}
          className="hidden h-full lg:block"
          items={generateMenuItems(menuData)}
        />
      </Sider>
      <Button
        icon={<MenuOutlined />}
        onClick={() => setIsSlideMenuMobileOpen(!isSlideMenuMobileOpen)}
        className="absolute top-3 left-4 lg:hidden"
      />

      <Drawer
        placement="left"
        closable={true}
        closeIcon={true}
        onClose={() => setIsSlideMenuMobileOpen(false)}
        open={isSlideMenuMobileOpen}
        className="[&>div:nth-child(1)]:!p-4 [&>div:nth-child(2)]:!p-0 lg-max:hidden">
        <Menu
          mode="inline"
          selectedKeys={getSelectedKeys()}
          style={{ height: '100%', borderRight: 0 }}
          items={generateMenuItems(menuData)}
        />
      </Drawer>
    </>
  )
}

export default AdminSidebar
