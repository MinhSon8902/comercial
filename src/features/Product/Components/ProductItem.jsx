import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { formatPrice } from 'src/utils/helper'

function ProductItem({ product }) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/products/${product.id}`)
  }
  return (
    <div className="product-item__container" onClick={handleClick}>
      <img className="product-image" src={product.imageUrl} alt="" />
      <div className="product-content">
        <img className="product-discount" src={product.productDiscount} alt="" />
        <h2 className="product-name">{product.nameProduct}</h2>
        <span className="product-price">{formatPrice(product.productPrice)}</span>
        <div className="product-status">
          <span className="product-title">{product.productTitle}</span>
          <img className="product-icon" src={product.productIcon} alt="" />
        </div>
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.object,
}

export default ProductItem
