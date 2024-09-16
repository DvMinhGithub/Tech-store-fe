import { useCallback, useState } from 'react'

import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Form, Input, Space, Table } from 'antd'

export default function ProductAttributeForm({ attributes, setAttributes }) {
  const [form] = Form.useForm()
  const [editingIndex, setEditingIndex] = useState(null)

  const handleAttributeAction = useCallback(
    (values) => {
      if (editingIndex !== null) {
        setAttributes((prevAttributes) => prevAttributes.map((attr, index) => (index === editingIndex ? values : attr)))
        setEditingIndex(null)
      } else {
        setAttributes((prevAttributes) => [...prevAttributes, values])
      }
      form.resetFields()
    },
    [editingIndex, form, setAttributes]
  )

  const handleSubmit = useCallback(() => {
    form
      .validateFields()
      .then(handleAttributeAction)
      .catch((error) => console.error('Xác thực thất bại:', error))
  }, [form, handleAttributeAction])

  const removeAttribute = useCallback(
    (index) => {
      setAttributes((prevAttributes) => prevAttributes.filter((_, i) => i !== index))
    },
    [setAttributes]
  )

  const editAttribute = useCallback(
    (index) => {
      const attribute = attributes[index]
      form.setFieldsValue(attribute)
      setEditingIndex(index)
    },
    [attributes, form]
  )

  const columns = [
    { title: 'Tên thuộc tính', dataIndex: 'name', key: 'name' },
    { title: 'Giá trị thuộc tính', dataIndex: 'value', key: 'value' },
    {
      title: 'Hành động',
      key: 'actions',
      render: (_, __, index) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            onClick={() => editAttribute(index)}
            className="text-blue-500 hover:text-blue-700"
          />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => removeAttribute(index)}
            className="text-red-500 hover:text-red-700"
          />
        </Space>
      )
    }
  ]

  return (
    <>
      <Form form={form} layout="inline" className="w-full mb-4">
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Vui lòng nhập tên thuộc tính!' }]}
          className="w-1/3 mb-2 mr-2">
          <Input placeholder="Tên thuộc tính" />
        </Form.Item>
        <Form.Item
          name="value"
          rules={[{ required: true, message: 'Vui lòng nhập giá trị thuộc tính!' }]}
          className="w-1/3 mb-2 mr-2">
          <Input placeholder="Giá trị thuộc tính" />
        </Form.Item>
        <Form.Item className="mb-2">
          <Button type="primary" icon={<PlusOutlined />} onClick={handleSubmit} className="btn btn-blue !min-h-8">
            {editingIndex !== null ? 'Cập nhật' : 'Thêm'} Thuộc Tính
          </Button>
        </Form.Item>
      </Form>

      {attributes.length > 0 && (
        <Table
          dataSource={attributes}
          columns={columns}
          pagination={false}
          rowKey={(_, index) => index}
          className="mb-4"
        />
      )}
    </>
  )
}
