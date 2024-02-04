import React from 'react'
import PropTypes from 'prop-types'
import ProductItem from './ProductItem'

function ProductList(props) {
  const { data } = props
  return (
    <div className="product-list">
      {data.map((product) => (
        <div className="product-item" key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  )
}

ProductList.propTypes = {
  data: PropTypes.array,
}

export default ProductList
