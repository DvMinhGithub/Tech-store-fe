import { useEffect } from 'react'

import useCategoryStore from '@/store/categoryStore'

import AddEditCategory from './AddEditCategory'
import { Skeleton, Table } from 'antd'

function ListCategory() {
  const { loading, categories, fetchCategories } = useCategoryStore()
  const categoryTables = [
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
        <AddEditCategory
          category={record}
          classButton="text-gray-500 link no-underline"
          textButton={<i className="cursor-pointer fa-regular fa-pen-to-square text-blue"></i>}
        />
      )
    }
  ]

  useEffect(() => {
    fetchCategories()
  }, [])

  return loading ? (
    <Skeleton />
  ) : (
    <>
      <AddEditCategory textButton="Thêm danh mục" classButton="mb-4 btn btn-blue" />
      <Table
        rowClassName="editable-row"
        columns={categoryTables}
        size="middle"
        dataSource={categories?.length > 0 ? categories : []}
        loading={loading}
        rowKey={(category) => category.id}
      />
    </>
  )
}

export default ListCategory
