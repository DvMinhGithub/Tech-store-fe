import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import DefaultImage from '@/assets/icons/DefaultImage'
import { constants } from '@/constants'
import useBrandStore from '@/store/brandStore'
import useCategoryStore from '@/store/categoryStore'
import useProductStore from '@/store/productStore'
import { handleNotification } from '@/utils'

import ProductAttributeForm from './ProductAttribute'
import { Button, Card, Col, Form, Input, Row, Select } from 'antd'
import { useForm } from 'antd/lib/form/Form'

const { TextArea } = Input

export default function AddEditProduct() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form] = useForm()

  const { product, addProduct, getProductById, updateProduct } = useProductStore()
  const { categories, fetchCategories } = useCategoryStore()
  const { brands, fetchBrands } = useBrandStore()

  const [previewImg, setPreviewImg] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [attributes, setAttributes] = useState([])

  useEffect(() => {
    fetchCategories()
    fetchBrands()
    if (id) {
      getProductById(id)
    }
  }, [id, fetchCategories, fetchBrands, getProductById])

  useEffect(() => {
    if (id && product) {
      const categoryIds = product.listCategory?.map((item) => item.id)
      form.setFieldsValue({
        ...product,
        brandId: product.brand?.id,
        category: categoryIds
      })
      setPreviewImg(product.productImage)
    }
  }, [id, product, form])

  const categoryOptions = categories?.map(({ id, name }) => ({ value: id, label: name }))
  const brandOptions = brands?.map(({ id, name }) => ({ value: id, label: name }))

  const handleSubmit = (values) => {
    const { name, brandId, category, description, price } = values

    if (!name.trim() || !price || !description.trim()) return

    const formData = new FormData()
    if (imageFile) {
      formData.append('image', imageFile)
    }
    formData.append('name', name.trim())
    formData.append('brandId', brandId)
    formData.append('categoryIds', category.join(','))
    formData.append('description', description.trim())
    formData.append('price', price)

    const onSuccess = () => navigate('/admin/product')
    id ? updateProduct(id, formData, onSuccess) : addProduct(formData, onSuccess)
  }

  const handleImagePreview = (files) => {
    const file = files[0]
    if (!file?.type?.includes('image')) {
      handleNotification(constants.NOTIFICATION_ERROR, { message: 'File không đúng định dạng' })
      return
    }

    setImageFile(file)
    setPreviewImg(URL.createObjectURL(file))
  }

  return (
    <div className="min-h-screen">
      <Card title={id ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm'} className="max-w-4xl mx-auto">
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Hình ảnh sản phẩm">
            <input
              type="file"
              onChange={(e) => handleImagePreview(e.target.files)}
              accept="image/*"
              className="absolute opacity-0 w-[200px] h-full"
            />
            {previewImg ? (
              <img
                src={previewImg}
                alt="Preview"
                className="w-[200px] aspect-[200/133] border border-gray-300 rounded overflow-hidden"
              />
            ) : (
              <DefaultImage width={200} height={133} />
            )}
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Tên sản phẩm"
                rules={[
                  { required: true, message: 'Vui lòng nhập tên sản phẩm!' },
                  {
                    validator: (_, value) =>
                      value?.includes('  ')
                        ? Promise.reject('Tên sản phẩm không được chứa quá nhiều khoảng trắng liên tiếp!')
                        : Promise.resolve()
                  }
                ]}>
                <Input placeholder="Nhập tên sản phẩm" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="category"
                label="Danh mục sản phẩm"
                rules={[{ required: true, message: 'Vui lòng chọn danh mục sản phẩm!' }]}>
                <Select mode="multiple" allowClear placeholder="Chọn danh mục sản phẩm" options={categoryOptions} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="price" label="Giá bán" rules={[{ required: true, message: 'Vui lòng nhập giá bán!' }]}>
                <Input type="number" placeholder="Nhập giá bán" min={0} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="brandId"
                label="Thương hiệu"
                rules={[{ required: true, message: 'Vui lòng chọn thương hiệu!' }]}>
                <Select allowClear placeholder="Chọn thương hiệu" options={brandOptions} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="description"
            label="Mô tả sản phẩm"
            rules={[{ required: true, message: 'Vui lòng nhập mô tả sản phẩm!' }]}>
            <TextArea rows={4} placeholder="Nhập mô tả sản phẩm" />
          </Form.Item>

          <Form.Item label="Thông số sản phẩm">
            <ProductAttributeForm attributes={attributes} setAttributes={setAttributes} />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            {id ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm'}
          </Button>
        </Form>
      </Card>
    </div>
  )
}
