import { useEffect, useState } from 'react'

import useVoucherStore from '@/store/voucherStore'

import { Col, DatePicker, Form, Input, Modal, Row } from 'antd'
import dayjs from 'dayjs'

const { RangePicker } = DatePicker
const { TextArea } = Input

const AddEditVoucher = ({ voucher = {}, classButton = '', textButton = 'Sửa' }) => {
  const { createVoucher } = useVoucherStore()
  const [form] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [timeRange, setTimeRange] = useState([])

  useEffect(() => {
    if (voucher.startTime && voucher.endTime) {
      setTimeRange([dayjs(voucher.startTime), dayjs(voucher.endTime)])
    }
    form.setFieldsValue(voucher)
  }, [voucher, form])

  const showModal = () => setIsModalOpen(true)

  const handleCancel = () => {
    setIsModalOpen(false)
    form.resetFields()
    setTimeRange([])
  }

  const handleSubmit = (values) => {
    createVoucher({
      ...values,
      startTime: timeRange[0]?.format('YYYY-MM-DD'),
      endTime: timeRange[1]?.format('YYYY-MM-DD')
    })
    setIsModalOpen(false)
  }

  const handleOk = () => form.submit()

  const handleTimeRangeChange = (dates) => setTimeRange(dates)

  return (
    <>
      <button className={classButton} onClick={showModal}>
        {textButton}
      </button>
      <Modal
        title="Tạo voucher"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Tạo voucher"
        cancelText="Hủy">
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item name="code" label="Mã voucher" rules={[{ required: true, message: 'Vui lòng nhập Mã voucher!' }]}>
            <Input placeholder="Mã voucher" />
          </Form.Item>
          <Row gutter={32}>
            <Col span={12}>
              <Form.Item
                name="totalQuantity"
                label="Số lượng"
                rules={[{ required: true, message: 'Vui lòng nhập Số lượng!' }]}>
                <Input placeholder="Số lượng" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="discountPrice"
                label="Giảm giá"
                rules={[{ required: true, message: 'Vui lòng nhập Giảm giá!' }]}>
                <Input placeholder="Giảm giá" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="description" label="Mô tả" rules={[{ required: true, message: 'Vui lòng nhập Mô tả!' }]}>
            <TextArea placeholder="Mô tả" autoSize={{ minRows: 2, maxRows: 6 }} />
          </Form.Item>
          <Form.Item label="Thời gian bắt đầu - kết thúc" required>
            <RangePicker
              className="w-full"
              format="YYYY-MM-DD"
              placeholder={['Bắt đầu', 'Kết thúc']}
              onChange={handleTimeRangeChange}
              value={timeRange}
            />
          </Form.Item>
          <Form.Item
            name="condition"
            label="Điều kiện giảm giá"
            rules={[{ required: true, message: 'Vui lòng nhập Điều kiện!' }]}>
            <Input placeholder="Điều kiện" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default AddEditVoucher
