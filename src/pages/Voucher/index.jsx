import { useEffect, useMemo } from 'react'

import useVoucherStore from '@/store/voucherStore'
import { formatMoneyVND } from '@/utils'

import AddEditVoucher from './AddEditVoucher'
import { Skeleton, Table } from 'antd'
import dayjs from 'dayjs'

const formatDate = (date) => dayjs(date).format('DD/MM/YYYY')

function ListVoucher() {
  const { loading, vouchers, getAllVouchers } = useVoucherStore()

  const voucherColumns = useMemo(
    () => [
      {
        dataIndex: 'id',
        key: 'id',
        align: 'center',
        render: (id) => id
      },
      {
        title: 'Mã voucher',
        dataIndex: 'code',
        key: 'code'
      },
      {
        title: 'Mô tả',
        dataIndex: 'description',
        key: 'description',
        align: 'center'
      },
      {
        title: 'Số lượng',
        dataIndex: 'totalQuantity',
        key: 'totalQuantity',
        align: 'center'
      },
      {
        title: 'Số lượng đã sử dụng',
        dataIndex: 'usedQuantity',
        key: 'usedQuantity',
        align: 'center'
      },
      {
        title: 'Giảm giá',
        dataIndex: 'discountPrice',
        key: 'discountPrice',
        align: 'center',
        render: formatMoneyVND
      },
      {
        title: 'Thời gian bắt đầu',
        dataIndex: 'startTime',
        key: 'startTime',
        align: 'center',
        render: formatDate
      },
      {
        title: 'Thời gian kết thúc',
        dataIndex: 'endTime',
        key: 'endTime',
        align: 'center',
        render: formatDate
      },
      {
        title: 'Điều kiện sử dụng',
        dataIndex: 'voucherCondition',
        key: 'voucherCondition',
        align: 'center',
        render: formatMoneyVND
      }
    ],
    []
  )

  useEffect(() => {
    getAllVouchers()
  }, [getAllVouchers])

  if (loading) return <Skeleton />

  return (
    <>
      <AddEditVoucher textButton="Tạo voucher" classButton="mb-4 btn btn-blue" />
      <Table
        rowClassName="editable-row"
        columns={voucherColumns}
        size="middle"
        dataSource={vouchers}
        loading={loading}
        rowKey="id"
      />
    </>
  )
}

export default ListVoucher
