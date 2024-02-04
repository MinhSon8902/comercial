import React from 'react'
import ProductList from '../Components/ProductList'
import { render } from '@testing-library/react'
import { it } from 'vitest'
import { BrowserRouter } from 'react-router-dom'

it('renders no products when data is an empty array', () => {
  const props = { data: [] }
  const { container } = render(<ProductList {...props} />)
  expect(container.querySelectorAll('.product-item')).toHaveLength(0)
})

it('renders one product item when data has one element', () => {
  const props = {
    data: [
      {
        id: 1,
        nameProduct: 'Điện thoại iPhone 13 Pro 256GB – NEW FULLBOX 100% –VN/A',
        imageUrl: 'https://cdn.tgdd.vn/Products/Images/42/303891/TimerThumb/iphone-15-plus-(2).jpg',
        productDiscount:
          'https://topzone.maugiaodien.com/wp-content/uploads/2023/08/webmau16.com-1684119872519-kredivo.gif',
        productPrice: 33990000,
        productTitle: 'Còn hàng - Giao nhanh',
        productIcon:
          'https://topzone.maugiaodien.com/wp-content/themes/flatsome-child/images/webmau16.com-icon-deli.webp',
        productColor: [
          { id: 1, color: 'Trắng', price: 34990000 },
          { id: 2, color: 'Vàng', price: 35990000 },
          { id: 3, color: 'Xám', price: 36990000 },
          { id: 4, color: 'Xanh Dương', price: 37990000 },
        ],
        productStorages: [
          { id: 1, storage: '128GB', price: 33990000 },
          { id: 2, storage: '256GB', price: 35990000 },
          { id: 3, storage: '512GB', price: 37990000 },
          { id: 4, storage: '1TB', price: 39990000 },
        ],
      },
    ],
  }
  const { container } = render(<ProductList {...props} />, { wrapper: BrowserRouter })
  expect(container.querySelectorAll('.product-item')).toHaveLength(1)
})

it('renders multiple product items when data has multiple elements', () => {
  const props = {
    data: [
      {
        id: 2,
        nameProduct: 'Điện thoại Samsung Galaxy S21 Ultra – NEW FULLBOX 100% –VN/A',
        imageUrl:
          'https://cdn.tgdd.vn/Products/Images/42/317981/oppo-find-n3-flip-pink-thumb-600x600.jpeg',
        productDiscount:
          'https://s3-alpha-sig.figma.com/img/d25b/3a94/3db23f065c7e4c864794a86584c57707?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BXp51Gs1ha66iJ~Hs9pS5pNSngwnbPsoq6Qo52mf-T4l3Ec0KeUjQaVCduG9i1gz4Aot-0ToU27H0wf5MYaGLBWfxjULdLc~xa7~LnseisY6No0k9k-LtF42pd8A9VIOakrPzEsJPEXv3656FprlJD5MPjdVU1DQfp1XJnySC7ejJxazMOSznrWXNpCmqTGVFGgLek-ijvsNsJi6N~jfwbzRooqxr3G7PTX9I-MjguP6jrzTZVdwcdT9Hq~3V8GJoZ7xnAr0Q8HMulq3ZpAbjIbLMHNUo7BdyA7dNMhiT6~vOOKbHT2aCfux3jqbjM0yfvLTPH7NxGQURPaq2HqyIA__',
        productPrice: 4534522,
        productTitle: 'Còn hàng - Giao nhanh',
        productIcon:
          'https://topzone.maugiaodien.com/wp-content/uploads/2023/08/webmau16.com-1684119872519-kredivo.gif',
        productColor: [
          { id: 1, color: 'Đen', price: 33990000 },
          { id: 2, color: 'Bạc', price: 34990000 },
          { id: 3, color: 'Vàng', price: 35990000 },
          { id: 4, color: 'Xanh', price: 36990000 },
        ],
        productStorages: [
          { id: 1, storage: '128GB', price: 33990000 },
          { id: 2, storage: '256GB', price: 35990000 },
          { id: 3, storage: '512GB', price: 37990000 },
          { id: 4, storage: '1TB', price: 39990000 },
        ],
      },
      {
        id: 3,
        nameProduct: 'Điện thoại Google Pixel 6 Pro – NEW FULLBOX 100% –VN/A',
        imageUrl: 'https://cdn.tgdd.vn/Products/Images/42/309864/TimerThumb/vivo-v29e-5g-(2).jpg',
        productDiscount:
          'https://s3-alpha-sig.figma.com/img/31e0/1e2b/1a19c925568c8911bf555e4258345e17?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AmW0tKO6lSeGE4uXIlNKwa7-CH6ofMAbfBJu3DJbqG419--11mOY~wLsgLT78nIMNlvhdZjcBNOaJ8FYidKE0JX3sVOZ8ESAakfNYFcn2mPazzDP8MdQP78GN-oTaOYQluqraYSLO7gqiPj0PguRy0ahbCjbNJ3r3SUbyUi1ArsfPPTYmWOu4ubwPLTS00ukddHlfNpZtnauU3GFiPRnh2aetf2yuK6ij6iwVEM8teYw35-xnRuoiQykaqCpP-7iLK8BMA8h6Ek3iE77a61kdf3Uq7dJwVz5fBb1ILzfrxRETH1PeuciWxcvu4dEpIIUzXCgYlAbNRv74tc49bTD0w__',
        productPrice: 25343274,
        productTitle: 'Còn hàng - Giao nhanh',
        productIcon:
          'https://topzone.maugiaodien.com/wp-content/themes/flatsome-child/images/webmau16.com-icon-deli.webp',
        productColor: [
          { id: 1, color: 'Đen', price: 29990000 },
          { id: 2, color: 'Bạc', price: 30990000 },
          { id: 3, color: 'Vàng', price: 31990000 },
          { id: 4, color: 'Xanh', price: 32990000 },
        ],
        productStorages: [
          { id: 1, storage: '64GB', price: 29990000 },
          { id: 2, storage: '128GB', price: 31990000 },
          { id: 3, storage: '256GB', price: 33990000 },
          { id: 4, storage: '512GB', price: 35990000 },
        ],
      },
    ],
  }
  const { container } = render(<ProductList {...props} />, { wrapper: BrowserRouter })
  expect(container.querySelectorAll('.product-item')).toHaveLength(2)
})
