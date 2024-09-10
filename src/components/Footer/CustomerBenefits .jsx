const CustomerBenefits = () => {
  return (
    <div className="bg-lime-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
          <svg
            className="w-12 h-12 text-green-500 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l4-4 4 4m0-6l-4 4-4-4" />
          </svg>
          <h3 className="text-lg font-semibold">GIAO HÀNG TẬN NƠI</h3>
          <p className="text-sm text-gray-600">Miễn phí giao hàng nội thành</p>
        </div>

        <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
          <svg
            className="w-12 h-12 text-blue-500 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m4-4H8" />
          </svg>
          <h3 className="text-lg font-semibold">ĐỔI TRẢ DỄ DÀNG</h3>
          <p className="text-sm text-gray-600">Miễn phí đổi trả trong 10 ngày</p>
        </div>

        <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
          <svg
            className="w-12 h-12 text-yellow-500 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M5 12a5 5 0 015-5m0 0h4m0 0a5 5 0 015 5M5 12a5 5 0 015 5m0 0h4m0 0a5 5 0 015-5"
            />
          </svg>
          <h3 className="text-lg font-semibold">SẢN PHẨM CHÍNH HÃNG</h3>
          <p className="text-sm text-gray-600">Cam kết hàng chính hãng 100%</p>
        </div>

        <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
          <svg
            className="w-12 h-12 text-red-500 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v4m0 0h4m-4-4H8m4 4v8m4-4H8" />
          </svg>
          <h3 className="text-lg font-semibold">NHẬN HÀNG TRẢ TIỀN</h3>
          <p className="text-sm text-gray-600">Ship COD trên toàn quốc</p>
        </div>
      </div>
    </div>
  )
}

export default CustomerBenefits
