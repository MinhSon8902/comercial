import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumbs, Link } from '@mui/material'
import { NavLink } from 'react-router-dom'

function Breadcrumb({ array }) {
  return (
    <div className="bread-crumb__container">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {array.map((item, index) => {
          const isLastItem = index === array.length - 1
          return (
            <Link
              component={NavLink}
              underline="hover"
              color="inherit"
              href="/"
              sx={{ color: '#707070', fontSize: '12px' }}
              key={item.id}
            >
              {isLastItem ? item.name.toUpperCase() : item.name}
            </Link>
          )
        })}
      </Breadcrumbs>
    </div>
  )
}

Breadcrumb.propTypes = {
  array: PropTypes.array,
}

export default Breadcrumb
