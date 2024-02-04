import PropTypes from 'prop-types'
import React from 'react'
import MenuItem from '../MenuItem'
function Dropdown({ items }) {
  return (
    <ul className="submenu">
      {items.map((item, idx) => (
        <MenuItem key={idx} items={item} />
      ))}
    </ul>
  )
}

Dropdown.propTypes = {
  items: PropTypes.array,
}

export default Dropdown
