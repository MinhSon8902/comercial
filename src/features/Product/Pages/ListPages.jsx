import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { productListSelector } from 'src/redux/selector'
import ProductList from '../Components/ProductList'

function ListPages(props) {
  const productList = useSelector(productListSelector)

  const { typeCss, heading } = props
  return (
    <div className={`product-container ${typeCss}`}>
      <h1 className="product-heading">{heading}</h1>
      <ProductList data={productList} />
    </div>
  )
}

ListPages.propTypes = { typeCss: PropTypes.string, heading: PropTypes.string }

export default ListPages
