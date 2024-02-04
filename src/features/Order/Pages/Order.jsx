import { Card, Divider, Flex, Layout, Skeleton, Table, Typography } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useOrders } from 'src/contexts/ordersContext'
import { getCart } from 'src/redux/userSlice'
import { formatDate, formatPrice } from 'src/utils/helper'
const { Sider, Content } = Layout

const contentStyle = {
  textAlign: 'center',
  backgroundColor: '#fff',
}
const siderStyle = {
  textAlign: 'center',
  backgroundColor: '#fff',
}

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
}

const liStyle = {
  fontSize: '16px',
  fontWeight: '400',
  color: '#0a0a0a',
}

const itemList = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const desc = { color: 'rgb(10, 10, 10)', fontWeight: '700', fontSize: '14px' }
const text = { color: 'rgb(215, 0, 24)', fontWeight: '700', fontSize: '14px' }

const columns = [
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
    title: 'Tổng',
    dataIndex: 'count',
    colSpan: 1,
    defaultSortOrder: 'ascend',
    sorter: (a, b) => a.count > b.count,
  },
]

function Order() {
  const { getOrder, currentOrder, isLoading } = useOrders()
  const { orderId } = useParams()
  const dispatch = useDispatch()
  dispatch(getCart())

  useEffect(() => {
    const fetchOrder = async () => {
      await getOrder(orderId)
    }
    fetchOrder()
  }, [getOrder, orderId])

  const data = currentOrder.productOrder.map((item, idx) => {
    return {
      key: idx,
      name: `${item.product.nameProduct} x ${item.quantity}`,
      count: formatPrice(item.product.productPrice * item.quantity),
      color: item.selectedColor,
      storage: item.selectedStorage,
    }
  })

  const total = currentOrder.productOrder.reduce(
    (total, item) => total + item.product.productPrice * item.quantity,
    0
  )

  return (
    <Skeleton loading={isLoading}>
      <div className="container">
        <Flex gap="middle" wrap="wrap" style={{ marginTop: '20px' }}>
          <Layout style={layoutStyle}>
            <Content style={contentStyle}>
              <Typography
                style={{
                  fontWeight: '700',
                  color: '#0a0a0a',
                  fontSize: '1.6rem',
                  textAlign: 'left',
                  marginBottom: '13px',
                }}
              >
                Chi tiết đơn hàng
              </Typography>
              <Table columns={columns} dataSource={data} pagination={false} bordered />
              <Divider style={{ marginBlock: '30px 5px' }} />
              <div>
                <div style={itemList}>
                  <p style={desc}>Tổng số phụ:</p>
                  <span style={text}>{formatPrice(total)}</span>
                </div>
                <Divider style={{ marginBlock: '10px' }} />
                <div style={itemList}>
                  <p style={desc}>Phương thức thanh toán:</p>
                  <span style={{ color: 'rgb(102, 102, 102', fontSize: '14px' }}>
                    Chuyển khoản ngân hàng
                  </span>
                </div>
                <Divider style={{ marginBlock: '10px' }} />
                <div style={itemList}>
                  <p style={desc}>Tổng cộng:</p>
                  <span style={text}>{formatPrice(total)}</span>
                </div>
                <Divider style={{ marginBlock: '10px' }} />
              </div>
            </Content>
            <Sider width="37%" style={siderStyle}>
              <Card
                style={{
                  backgroundColor: 'rgba(0,0,0,.02)',
                  marginLeft: '10px',
                }}
              >
                <Typography
                  style={{
                    fontWeight: '600',
                    color: '#7a9c59',
                    fontSize: '17px',
                    textAlign: 'left',
                    marginBottom: '20px',
                  }}
                >
                  Cảm ơn bạn. Đơn hàng của bạn đã được nhận.
                </Typography>
                <ul style={{ listStyle: 'circle', listStylePosition: 'inside', textAlign: 'left' }}>
                  <li style={liStyle}>
                    Mã đơn hàng: <span style={{ fontWeight: '600' }}>{currentOrder.orderId}</span>
                  </li>
                  <li style={liStyle}>
                    Ngày: <span style={{ fontWeight: '600' }}>{formatDate(currentOrder.date)}</span>
                  </li>
                  <li style={liStyle}>
                    Tổng cộng:{' '}
                    <span style={{ color: '#d70018', fontWeight: 'bold' }}>
                      {formatPrice(total)}
                    </span>
                  </li>
                  <li style={liStyle}>
                    Phương thức thanh toán:{' '}
                    <span style={{ fontWeight: '600' }}>Chuyển khoản ngân hàng</span>
                  </li>
                </ul>
              </Card>
            </Sider>
          </Layout>
        </Flex>
      </div>
    </Skeleton>
  )
}

Order.propTypes = {}

export default Order
