import PropTypes from 'prop-types'
import React from 'react'
import MenuItem from '../MenuItem'

function MenuList(props) {
  const { menus } = props
  return (
    <div className="menu-list">
      {menus.map((item) => {
        return <MenuItem key={item.nameCategory} items={item} />
      })}
    </div>
  )
}

MenuList.propTypes = {
  menus: PropTypes.array.isRequired,
}

export default MenuList
