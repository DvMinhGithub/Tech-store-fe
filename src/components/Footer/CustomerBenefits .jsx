const CustomerBenefits = () => {
  return (
    <div className="bg-lime-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold">GIAO HÀNG TẬN NƠI</h3>
          <p className="text-sm text-gray-600">Miễn phí giao hàng nội thành</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold">ĐỔI TRẢ DỄ DÀNG</h3>
          <p className="text-sm text-gray-600">Miễn phí đổi trả trong 10 ngày</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold">SẢN PHẨM CHÍNH HÃNG</h3>
          <p className="text-sm text-gray-600">Cam kết hàng chính hãng 100%</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold">NHẬN HÀNG TRẢ TIỀN</h3>
          <p className="text-sm text-gray-600">Ship COD trên toàn quốc</p>
        </div>
      </div>
    </div>
  )
}

export default CustomerBenefits
