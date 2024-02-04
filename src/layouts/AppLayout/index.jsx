import { Flex, Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import 'src/assets/scss/index.scss'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

const layoutStyle = {
  overflow: 'hidden',
}

function AppLayout() {
  return (
    <Flex gap="middle" wrap="wrap">
      <Layout style={layoutStyle}>
        <Header />
        <Outlet />
        <Footer />
      </Layout>
    </Flex>
  )
}

AppLayout.propTypes = {}

export default AppLayout
