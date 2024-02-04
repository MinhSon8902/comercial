import { Button, Result, Table, Tag, Typography } from 'antd'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOrders } from 'src/contexts/ordersContext'
import { formatDate, formatPrice } from 'src/utils/helper'
import gestures from 'src/assets/images/gestures.png'

function OrderHistory() {
  const { fetchOrders, orderDetail } = useOrders()
  const navigate = useNavigate()
  useEffect(() => {
    const fetchOrder = async () => {
      await fetchOrders()
    }
    fetchOrder()
  }, [fetchOrders])

  const sharedOnCell = (_, index) => {
    if (index === 0) {
      return {
        rowSpan: orderDetail.length - 1,
      }
    }
    if (index > 0) {
      return {
        rowSpan: 0,
      }
    }
    return {}
  }

  const columns = [
    {
      title: 'Mã Đơn Hàng',
      dataIndex: 'code',
      onCell: sharedOnCell,
    },
    {
      title: 'Sản Phẩm',
      dataIndex: 'name',
      render: (text) => <a href="/#">{text}</a>,
    },
    {
      title: 'Màu sắc',
      colSpan: 1,
      dataIndex: 'color',
    },
    {
      title: 'Dung lượng ổ cứng',
      colSpan: 1,
      dataIndex: 'storage',
    },
    {
      title: 'Tổng Phụ',
      dataIndex: 'count',
      colSpan: 1,
    },
    {
      title: 'Tổng Cộng',
      dataIndex: 'amount',
      colSpan: 1,
      onCell: sharedOnCell,
    },
    {
      title: 'Trạng Thái',
      dataIndex: 'tags',
      colSpan: 1,
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = 'green'
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      ),
      onCell: sharedOnCell,
    },
    {
      title: 'Ngày Thanh Toán',
      dataIndex: 'date',
      colSpan: 1,
      onCell: sharedOnCell,
    },
  ]

  return (
    <div className="container">
      {orderDetail.length > 0 ? (
        <Typography
          style={{ textAlign: 'center', marginBlock: '20px', fontWeight: '700', fontSize: '25px' }}
        >
          Lịch Sử Đơn Hàng
        </Typography>
      ) : (
        <Result
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          icon={<img style={{ width: '50px' }} alt="" src={gestures} />}
          title="Bạn chưa có đơn hàng nào, Hãy tiếp tục mua hàng"
          extra={
            <Button
              type="primary"
              onClick={() => {
                navigate('/')
              }}
            >
              Trang Chủ
            </Button>
          }
        />
      )}

      {orderDetail.length > 0 &&
        orderDetail.map((item, idx) => {
          const data = item.productOrder.map((x, idx) => ({
            key: idx,
            code: item.orderId,
            name: `${x.product.nameProduct} x ${x.quantity}`,
            count: formatPrice(x.product.productPrice * x.quantity),
            amount: formatPrice(
              item.productOrder.reduce(
                (total, item) => total + item.product.productPrice * item.quantity,
                0
              )
            ),
            color: x.selectedColor,
            storage: x.selectedStorage,
            tags: ['Đã Thanh Toán'],
            date: formatDate(item.date),
          }))
          return (
            <Table
              style={{ marginBottom: '10px' }}
              key={item.orderId}
              columns={columns}
              dataSource={data}
              bordered
              pagination={false}
              title={() => `Chi tiết đơn hàng ${idx + 1}`}
            />
          )
        })}
    </div>
  )
}

export default OrderHistory
