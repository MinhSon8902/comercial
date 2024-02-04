import { Box, Typography } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { Layout, Rate } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Breadcrumb from 'src/components/Breadcrumb'
import { productListSelector } from 'src/redux/selector'
import { addToCart } from 'src/redux/userSlice'
import { formatPrice } from 'src/utils/helper'
import { v4 as uuidv4 } from 'uuid'
import AddToCartForm from '../Components/AddToCartForm'
import ProductImage from '../Components/ProductImage'
import ProductInfo from '../Components/ProductInfo'

function DetailPage() {
  const dispatch = useDispatch()
  const { productId } = useParams()
  const productList = useSelector(productListSelector)
  const product = productList.find((product) => product.id === Number(productId))
  const arrayBreadcrumb = [{ id: product.id, name: product.nameProduct }]

  const handleAddToCartSubmit = (formValues) => {
    const resultAction = dispatch(
      addToCart({
        id: uuidv4(),
        productId: product.id,
        product,
        quantity: Number.parseInt(formValues.quantity),
        selectedColor: formValues.selectedColors,
        selectedStorage: formValues.selectedStorages,
      })
    )
    unwrapResult(resultAction)
  }

  return (
    <Box sx={{ paddingBottom: '20px' }}>
      <div className="bread-crumb">
        <Breadcrumb array={arrayBreadcrumb} />
      </div>
      <div className="container">
        <Layout
          className="detail-page"
          style={{
            backgroundColor: 'white',
            marginTop: '20px',
            padding: '20px',
            borderRadius: '5px',
          }}
        >
          <div className="detail-page__image">
            <ProductImage product={product} />
          </div>
          <div className="detail-page__content">
            <Typography
              variant="h3"
              sx={{ color: '#0A0A0A', fontSize: '17px', fontWeight: '700', marginBottom: '19px' }}
            >
              {product.nameProduct}
            </Typography>
            <div style={{ marginBottom: '22px' }}>
              <Rate style={{ marginRight: '15px', fontSize: '15px' }} defaultValue={3} />
              <span style={{ color: '#334862', fontSize: '14px', fontWeight: '400' }}>
                ( 7 đánh giá của khách hàng )
              </span>
            </div>
            <div className="product-priced">{formatPrice(product.productPrice)}</div>
            <AddToCartForm product={product} onSubmit={handleAddToCartSubmit} />
          </div>
          <div className="detail-page__info">
            <ProductInfo information={product} />
          </div>
        </Layout>
      </div>
    </Box>
  )
}

DetailPage.propTypes = {}

export default DetailPage
