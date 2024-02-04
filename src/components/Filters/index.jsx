import { Box, ThemeProvider, Typography, createTheme } from '@mui/material'
import { Flex, Select, Space } from 'antd'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { productRemainingSelector, searchTextSelector } from 'src/redux/selector'
import Breadcrumb from '../Breadcrumb'
import ProductItem from 'src/features/Product/Components/ProductItem'

const theme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          '&:focus': {
            backgroundColor: 'white',
          },
        },
      },
    },
  },
})

function Filters() {
  const [filter, setFilter] = useState('')
  const productList = useSelector(productRemainingSelector)
  const searchText = useSelector(searchTextSelector)
  const handleChange = (value) => {
    setFilter(value)
  }
  const arrayBreadCrumb = [
    { id: 1, name: 'Trang Chủ' },
    { id: 2, name: 'Cửa Hàng' },
    { id: 3, name: `Kết Quả Tìm Kiếm Cho ${searchText}` },
  ]
  return (
    <ThemeProvider theme={theme}>
      <div className="container" style={{ marginTop: '20px', paddingBottom: '20px' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            gap: '10px',
          }}
        >
          <Box sx={{ justifySelf: 'flex-start' }}>
            <Breadcrumb array={arrayBreadCrumb} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
            <Typography variant="body2" sx={{ marginRight: '10px' }}>
              Hiển thị tất cả {productList.length} kết quả
            </Typography>
            <Space wrap>
              <Select
                defaultValue="relevance"
                style={{
                  minWidth: '200px',
                }}
                onChange={handleChange}
                options={[
                  {
                    value: 'relevance',
                    label: 'Độ Liên Quan',
                  },
                  {
                    value: 'top',
                    label: 'Thứ tự theo mức độ phổ biến',
                  },
                  {
                    value: 'review',
                    label: 'Thứ tự theo điểm đánh giá',
                  },
                  {
                    value: 'new',
                    label: 'Mới nhất',
                  },
                  {
                    value: 'lowToHigh',
                    label: 'Thứ tự theo giá: thấp đến cao',
                  },
                  {
                    value: 'hightToLow',
                    label: 'Thứ tự theo giá: cao xuống thấp',
                  },
                ]}
              />
            </Space>
          </Box>
        </Box>
        <div className="product-list--search">
          {productList.map((product) => (
            <div className="product-item product-item--search" key={product.id}>
              <ProductItem product={product} />
            </div>
          ))}
        </div>
      </div>
    </ThemeProvider>
  )
}

Filters.propTypes = {}

export default Filters
