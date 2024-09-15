import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons'
import { Button, Divider, Input } from 'antd'

function CustomerFooter() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // Process data from form
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Về Chúng Tôi</h3>
            <div className="flex flex-col gap-1.5 text-sm text-gray-300">
              <p>
                <span className="text-lime-300 font-medium">0999.999.999</span> : Hotline tư vấn
              </p>
              <p>
                <span className="text-lime-300 font-medium">0999.999.999</span>: Tư vấn bán hàng
              </p>
              <p>
                Thời gian làm việc: <span className="text-lime-300 font-medium">9h - 20h30</span>
              </p>
              <p>Email: email@gmail.com</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên Kết Nhanh</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Trang Chủ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Sản Phẩm
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Giới Thiệu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Dịch Vụ Khách Hàng</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Câu Hỏi Thường Gặp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Vận Chuyển & Đổi Trả
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Điều Khoản & Điều Kiện
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Chính Sách Bảo Mật
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Thông Tin</h3>
            <p className="text-sm text-gray-300 mb-2">Nhận thông tin cập nhật mới nhất về ưu đãi và sản phẩm.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <Input
                placeholder="Nhập email của bạn"
                className="mr-2 flex-grow placeholder-white"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.2)'
                }}
              />
              <Button type="primary" htmlType="submit">
                Đăng Ký
              </Button>
            </form>
          </div>
        </div>
        <Divider className="border-gray-600 my-6" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Cửa Hàng Máy Tính. Mọi quyền được bảo lưu.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FacebookOutlined className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <TwitterOutlined className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <InstagramOutlined className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <LinkedinOutlined className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default CustomerFooter
