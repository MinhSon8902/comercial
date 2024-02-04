import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()
  return (
    <Result
      status="404"
      title="404"
      subTitle="Xin lỗi, trang bạn truy cập không tồn tại."
      extra={
        <Button
          type="primary"
          onClick={() => {
            navigate('/')
          }}
        >
          Quay Lại Trang Chủ
        </Button>
      }
    />
  )
}

NotFound.propTypes = {}

export default NotFound
