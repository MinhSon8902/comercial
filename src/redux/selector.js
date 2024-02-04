import { createSelector } from 'reselect'

export const cartItemSelector = (state) => state.user.items
export const productListSelector = (state) => state.productList.arrayProduct
export const searchTextSelector = (state) => state.filter.search

export const cartItemsCountSelector = createSelector(cartItemSelector, (cartItems) =>
  cartItems.reduce((count, item) => count + item.quantity, 0)
)

export const cartTotalSelector = createSelector(cartItemSelector, (cartItems) =>
  cartItems.reduce((total, item) => total + item.product.productPrice * item.quantity, 0)
)

export const productRemainingSelector = createSelector(
  productListSelector,
  searchTextSelector,
  (productList, searchText) => {
    return productList.filter((product) => {
      return product.nameProduct.toLowerCase().includes(searchText.toLowerCase())
    })
  }
)
