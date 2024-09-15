import { useEffect, useState } from 'react'

import useBrandStore from '@/store/brandStore'

import { Form, Input, Modal, Row, Skeleton, Table } from 'antd'
import { useForm } from 'antd/es/form/Form'
import TextArea from 'antd/es/input/TextArea'

export default function ListBrand() {
  const { loading, brands, fetchBrands } = useBrandStore()

  const brandTables = [
    {
      key: 'id',
      align: 'center',
      dataIndex: 'index',
      render: (_, __, index) => index + 1
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Hành động',
      dataIndex: '',
      key: 'x',
      align: 'center',
      render: (_, record) => (
        <AddEditBrand
          brand={record}
          classButton="text-gray-500 link no-underline"
          textButton={<i className="cursor-pointer fa-regular fa-pen-to-square text-blue"></i>}
        />
      )
    }
  ]

  useEffect(() => {
    fetchBrands()
  }, [fetchBrands])

  return loading ? (
    <Skeleton />
  ) : (
    <>
      <AddEditBrand textButton="Thêm thương hiệu" classButton="mb-4 btn btn-blue" />
      <Table
        rowClassName="editable-row"
        columns={brandTables}
        size="middle"
        dataSource={brands?.length ? brands : []}
        loading={loading}
        rowKey={(brand) => brand.id}
      />
    </>
  )
}

function AddEditBrand({ brand = {}, classButton = '', textButton = 'Sửa' }) {
  const { createBrand, updateBrand } = useBrandStore()

  const [form] = useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => setIsModalOpen(true)
  const handleCancel = () => {
    form.resetFields()
    setIsModalOpen(false)
  }

  const handleSubmit = (values) => {
    if (brand?.id) {
      updateBrand(brand.id, values)
    } else {
      createBrand(values)
    }

    form.resetFields()
    setIsModalOpen(false)
  }

  const handleOk = () => form.submit()

  useEffect(() => {
    form.setFieldsValue(brand)
  }, [brand, form])

  return (
    <>
      <button className={classButton} onClick={showModal}>
        {textButton}
      </button>
      <Modal
        title={brand?.id ? 'Cập nhật thương hiệu' : 'Thêm thương hiệu'}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Row>
            <Form.Item
              className="w-full"
              name="name"
              label="Tên thương hiệu"
              rules={[{ required: true, message: 'Vui lòng nhập tên thương hiệu!' }]}>
              <Input placeholder="Nhập tên thương hiệu" name="name" />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item
              className="w-full"
              name="description"
              label="Mô tả"
              rules={[{ required: true, message: 'Vui lòng nhập mô tả!' }]}>
              <TextArea
                placeholder="Nhập mô tả thương hiệu"
                name="description"
                autoSize={{
                  minRows: 2,
                  maxRows: 6
                }}
              />
            </Form.Item>
          </Row>
        </Form>
      </Modal>
    </>
  )
}
