import { useCallback, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import useUserStore from '@/store/userStore'
import { tokenOperations } from '@/utils'

import { UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown } from 'antd'

const ManageHeaderComponent = () => {
  const { getProfile, user } = useUserStore()
  const navigate = useNavigate()
  const { name, avatar } = user || {}

  const handleLogout = useCallback(() => {
    tokenOperations.remove('token')
    navigate('/login')
  }, [navigate])

  const menuItems = [
    {
      key: 'profile',
      label: (
        <Link to="/store-info" className="flex gap-2">
          Tài khoản của tôi
        </Link>
      )
    },
    {
      key: 'logout',
      label: (
        <button onClick={handleLogout} className="flex gap-2 w-full cursor-pointer">
          Đăng xuất
        </button>
      )
    }
  ]

  useEffect(() => {
    getProfile()
  }, [getProfile])

  return (
    <div className="px-4 flex justify-between py-3 bg-white border-b lg:px-6">
      <Link to="/admin" className="ml-12 text-2xl font-bold text-blue-600 lg:mr-8">
        TechStore
      </Link>
      <div className="flex items-center w-fit">
        <Dropdown menu={{ items: menuItems }} placement="bottomLeft" arrow>
          <div className="flex items-center gap-3 cursor-pointer">
            <span className="text-gray-800 text-base font-medium px-2.5 py-0.5 capitalize max-w-40 truncate">
              {name}
            </span>
            {avatar ? (
              <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full object-cover" />
            ) : (
              <Avatar icon={<UserOutlined />} />
            )}
          </div>
        </Dropdown>
      </div>
    </div>
  )
}

export default ManageHeaderComponent
