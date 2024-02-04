import PropTypes from 'prop-types'
import React from 'react'
import Dropdown from '../Dropdown/Dropdown'
import { ArrowForwardIos } from '@mui/icons-material'
import cate1 from 'src/assets/images/dien-thoai.svg'
import cate2 from 'src/assets/images/apple-iphone.svg'
import cate3 from 'src/assets/images/may-tinh-bang.svg'
import cate5 from 'src/assets/images/icon-am-thanh.svg'
import cate6 from 'src/assets/images/webmau16.com-icon-dong-ho.svg'
import cate7 from 'src/assets/images/thu-cu-doi-moi-1.svg'
import cate8 from 'src/assets/images/icon-phu-kien.svg'
import cate9 from 'src/assets/images/tin-cong-nghe.svg'
import cate10 from 'src/assets/images/icon-khuyen-mai.svg'

const images = [
  { cateId: 1, imgUrl: cate1 },
  { cateId: 2, imgUrl: cate2 },
  { cateId: 3, imgUrl: cate3 },
  { cateId: 4, imgUrl: cate5 },
  { cateId: 5, imgUrl: cate6 },
  { cateId: 6, imgUrl: cate3 },
  { cateId: 7, imgUrl: cate8 },
  { cateId: 8, imgUrl: cate7 },
  { cateId: 9, imgUrl: cate1 },
  { cateId: 10, imgUrl: cate8 },
  { cateId: 11, imgUrl: cate9 },
  { cateId: 12, imgUrl: cate10 },
]

function MenuItem({ items }) {
  let src
  if (items.imgUrl) {
    src = images.find((item) => item.cateId === items.cateId)
  }
  return (
    <li className={`menu-item ${items.childCategory ? 'has-children' : ''}`}>
      <div style={{ minWidth: '18px', height: 'auto' }}>
        <img src={src?.imgUrl} className="menu-icon" alt="" />
      </div>
      <span className="menu-link">{items.nameCategory}</span>
      {items.childCategory && <ArrowForwardIos sx={{ marginLeft: 'auto', fontSize: '10px' }} />}
      {items.childCategory && <Dropdown items={items.childCategory} />}
    </li>
  )
}

MenuItem.propTypes = {
  items: PropTypes.object,
}

export default MenuItem
