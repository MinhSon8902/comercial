import { createSlice } from '@reduxjs/toolkit'
import iconDiscount from 'src/assets/images/anhkhuyenmai.png'

const PRODUCT_ICON =
  'https://topzone.maugiaodien.com/wp-content/themes/flatsome-child/images/webmau16.com-icon-deli.webp'

const PRODUCT_DISCOUNT =
  'https://topzone.maugiaodien.com/wp-content/uploads/2023/08/webmau16.com-1684119872519-kredivo.gif'

const initState = {
  arrayProduct: [
    {
      id: 1,
      nameProduct: 'Điện thoại iPhone 13 Pro 256GB – NEW FULLBOX 100% –VN/A',
      imageUrl: 'https://cdn.tgdd.vn/Products/Images/42/303891/TimerThumb/iphone-15-plus-(2).jpg',
      productDiscount: PRODUCT_DISCOUNT,
      productPrice: 33990000,
      productTitle: 'Còn hàng - Giao nhanh',
      productIcon: PRODUCT_ICON,
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
    {
      id: 2,
      nameProduct: 'Điện thoại Samsung Galaxy S21 Ultra – NEW FULLBOX 100% –VN/A',
      imageUrl:
        'https://cdn.tgdd.vn/Products/Images/42/317981/oppo-find-n3-flip-pink-thumb-600x600.jpeg',
      productDiscount: iconDiscount,
      productPrice: 4534522,
      productTitle: 'Còn hàng - Giao nhanh',
      productIcon: PRODUCT_ICON,
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
      productDiscount: iconDiscount,
      productPrice: 25343274,
      productTitle: 'Còn hàng - Giao nhanh',
      productIcon: PRODUCT_ICON,
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
    {
      id: 4,
      nameProduct: 'Điện thoại Xiaomi Mi 11 Ultra – NEW FULLBOX 100% –VN/A',
      imageUrl: 'https://cdn.tgdd.vn/Products/Images/42/309814/TimerThumb/309814.jpg',
      productDiscount: iconDiscount,
      productPrice: 13245765,
      productTitle: 'Còn hàng - Giao nhanh',
      productIcon: PRODUCT_ICON,
      productColor: [
        { id: 1, color: 'Đen', price: 28990000 },
        { id: 2, color: 'Bạc', price: 29990000 },
        { id: 3, color: 'Vàng', price: 30990000 },
        { id: 4, color: 'Xanh', price: 31990000 },
      ],
      productStorages: [
        { id: 1, storage: '64GB', price: 28990000 },
        { id: 2, storage: '128GB', price: 30990000 },
        { id: 3, storage: '256GB', price: 32990000 },
        { id: 4, storage: '512GB', price: 34990000 },
      ],
    },
    {
      id: 5,
      nameProduct: 'Điện thoại OPPO Find X3 Pro – NEW FULLBOX 100% –VN/A',
      imageUrl: 'https://cdn.tgdd.vn/Products/Images/42/304162/TimerThumb/304162.jpg',
      productDiscount: PRODUCT_DISCOUNT,
      productPrice: 53245632,
      productTitle: 'Còn hàng - Giao nhanh',
      productIcon: PRODUCT_ICON,
      productColor: [
        { id: 1, color: 'Đen', price: 27990000 },
        { id: 2, color: 'Bạc', price: 28990000 },
        { id: 3, color: 'Vàng', price: 29990000 },
        { id: 4, color: 'Xanh', price: 30990000 },
      ],
      productStorages: [
        { id: 1, storage: '64GB', price: 27990000 },
        { id: 2, storage: '128GB', price: 29990000 },
        { id: 3, storage: '256GB', price: 31990000 },
        { id: 4, storage: '512GB', price: 33990000 },
      ],
    },
    {
      id: 6,
      nameProduct: 'Điện thoại Vivo X60 Pro – NEW FULLBOX 100% –VN/A',
      imageUrl:
        'https://cdn.tgdd.vn/Products/Images/42/250625/TimerThumb/samsung-galaxy-z-fold4-(22).jpg',
      productDiscount: iconDiscount,
      productPrice: 43252352,
      productTitle: 'Còn hàng - Giao nhanh',
      productIcon: PRODUCT_ICON,
      productColor: [
        { id: 1, color: 'Đen', price: 26990000 },
        { id: 2, color: 'Bạc', price: 27990000 },
        { id: 3, color: 'Vàng', price: 28990000 },
        { id: 4, color: 'Xanh', price: 29990000 },
      ],
      productStorages: [
        { id: 1, storage: '64GB', price: 26990000 },
        { id: 2, storage: '128GB', price: 28990000 },
        { id: 3, storage: '256GB', price: 30990000 },
        { id: 4, storage: '512GB', price: 32990000 },
      ],
    },
    {
      id: 7,
      nameProduct: 'Điện thoại OnePlus 9 Pro – NEW FULLBOX 100% –VN/A',
      imageUrl:
        'https://cdn.tgdd.vn/Products/Images/42/299250/TimerThumb/samsung-galaxy-z-flip5-(2).jpg',
      productDiscount: PRODUCT_DISCOUNT,
      productPrice: 21345672,
      productTitle: 'Còn hàng - Giao nhanh',
      productIcon: PRODUCT_ICON,
      productColor: [
        { id: 1, color: 'Đen', price: 25990000 },
        { id: 2, color: 'Bạc', price: 26990000 },
        { id: 3, color: 'Vàng', price: 27990000 },
        { id: 4, color: 'Xanh', price: 28990000 },
      ],
      productStorages: [
        { id: 1, storage: '64GB', price: 25990000 },
        { id: 2, storage: '128GB', price: 27990000 },
        { id: 3, storage: '256GB', price: 29990000 },
        { id: 4, storage: '512GB', price: 31990000 },
      ],
    },
    {
      id: 8,
      nameProduct: 'Điện thoại Sony Xperia 1 III – NEW FULLBOX 100% –VN/A',
      imageUrl: 'https://cdn.tgdd.vn/Products/Images/42/299034/TimerThumb/oppo-find-n2-flip.jpg',
      productDiscount: iconDiscount,
      productPrice: 75352453,
      productTitle: 'Còn hàng - Giao nhanh',
      productIcon: PRODUCT_ICON,
      productColor: [
        { id: 1, color: 'Đen', price: 24990000 },
        { id: 2, color: 'Bạc', price: 25990000 },
        { id: 3, color: 'Vàng', price: 26990000 },
        { id: 4, color: 'Xanh', price: 27990000 },
      ],
      productStorages: [
        { id: 1, storage: '64GB', price: 24990000 },
        { id: 2, storage: '128GB', price: 26990000 },
        { id: 3, storage: '256GB', price: 28990000 },
        { id: 4, storage: '512GB', price: 30990000 },
      ],
    },
    {
      id: 9,
      nameProduct: 'Điện thoại Huawei P40 Pro – NEW FULLBOX 100% –VN/A',
      imageUrl:
        'https://cdn.tgdd.vn/Products/Images/42/309821/realme-11-pro-plus-5g-thumb-600x600.jpeg',
      productDiscount: PRODUCT_DISCOUNT,
      productPrice: 24523523,
      productTitle: 'Còn hàng - Giao nhanh',
      productIcon: PRODUCT_ICON,
      productColor: [
        { id: 1, color: 'Đen', price: 23990000 },
        { id: 2, color: 'Bạc', price: 24990000 },
        { id: 3, color: 'Vàng', price: 25990000 },
        { id: 4, color: 'Xanh', price: 26990000 },
      ],
      productStorages: [
        { id: 1, storage: '64GB', price: 23990000 },
        { id: 2, storage: '128GB', price: 25990000 },
        { id: 3, storage: '256GB', price: 27990000 },
        { id: 4, storage: '512GB', price: 29990000 },
      ],
    },
    {
      id: 10,
      nameProduct: 'Điện thoại LG V60 ThinQ – NEW FULLBOX 100% –VN/A',
      imageUrl: 'https://cdn.tgdd.vn/Products/Images/42/278886/TimerThumb/278886.jpg  ',
      productDiscount: PRODUCT_DISCOUNT,
      productPrice: 24435313,
      productTitle: 'Còn hàng - Giao nhanh',
      productIcon: PRODUCT_ICON,
      productColor: [
        { id: 1, color: 'Đen', price: 22990000 },
        { id: 2, color: 'Bạc', price: 23990000 },
        { id: 3, color: 'Vàng', price: 24990000 },
        { id: 4, color: 'Xanh', price: 25990000 },
      ],
      productStorages: [
        { id: 1, storage: '64GB', price: 22990000 },
        { id: 2, storage: '128GB', price: 24990000 },
        { id: 3, storage: '256GB', price: 26990000 },
        { id: 4, storage: '512GB', price: 28990000 },
      ],
    },
  ],
}

export default createSlice({
  name: 'product',
  initialState: initState,
  reducers: {},
})
