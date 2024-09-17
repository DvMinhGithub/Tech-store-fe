import { useNavigate } from 'react-router-dom'

import useEmployeeStore from '@/store/employeeStore'

import { Card, Col, Form, Input, Row, Select } from 'antd'

const { Item } = Form
const { Password } = Input

const FORM_LAYOUT = { labelCol: { span: 24 }, wrapperCol: { span: 24 } }
const FORM_RULES = { required: { required: true, message: 'Vui lòng nhập ${label}!' } }

const FORM_ITEMS = [
  { name: 'name', label: 'Họ và tên', placeholder: 'Họ và tên' },
  { name: 'email', label: 'Email', placeholder: 'Email', type: 'email' },
  { name: 'address', label: 'Địa chỉ', placeholder: 'Địa chỉ', colSpan: 24 },
  { name: 'password', label: 'Mật khẩu', placeholder: 'Mật khẩu', isPassword: true },
  { name: 'phoneNumber', label: 'Số điện thoại', placeholder: 'Số điện thoại', type: 'tel' },
  { name: 'dob', label: 'Ngày sinh', placeholder: 'Ngày sinh', type: 'date' },
  {
    name: 'gender',
    label: 'Giới tính',
    type: 'select',
    options: [
      { value: 'MALE', label: 'Nam' },
      { value: 'FEMALE', label: 'Nữ' }
    ],
    colSpan: 12
  }
]

const AddEditEmployee = () => {
  const { createEmployee } = useEmployeeStore()
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const handleSubmit = (values) => {
    createEmployee({ ...values, gender: values.gender === 1 ? 'MALE' : 'FEMALE' }, () => navigate('/admin/employee'))
  }

  const renderFormItem = ({ name, label, placeholder, isPassword, type, options, colSpan = 12 }) => (
    <Col span={colSpan} key={name}>
      <Item name={name} label={label} rules={[FORM_RULES.required]}>
        {type === 'select' ? (
          <Select options={options} placeholder={placeholder} />
        ) : isPassword ? (
          <Password placeholder={placeholder} />
        ) : (
          <Input placeholder={placeholder} type={type || 'text'} />
        )}
      </Item>
    </Col>
  )

  return (
    <Card className="max-w-4xl mx-auto">
      <Form form={form} onFinish={handleSubmit} layout="vertical" {...FORM_LAYOUT}>
        <Row gutter={[32, 16]}>{FORM_ITEMS.map(renderFormItem)}</Row>
        <button type="submit" className="mt-4 btn btn-blue">
          Thêm nhân viên
        </button>
      </Form>
    </Card>
  )
}

export default AddEditEmployee
