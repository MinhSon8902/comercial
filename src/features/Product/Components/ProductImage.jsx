import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Card, CardMedia, IconButton } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'

function ProductImage() {
  const phoneCases = [
    'https://topzone.maugiaodien.com/wp-content/uploads/2021/11/webmau16.com-1675236331324-600-600-ip14prm-new-3-1.jpg',
    'https://topzone.maugiaodien.com/wp-content/uploads/2021/11/webmau16.com-1675236331323-600-600-ip14prm-new-1-1-300x300.jpg',
    'https://topzone.maugiaodien.com/wp-content/uploads/2021/11/webmau16.com-1675236331323-600-600-ip14prm-new-2.jpg',
    'https://topzone.maugiaodien.com/wp-content/uploads/2021/11/webmau16.com-1675236331324-600-600-ip14prm-new-3-1.jpg',
    'https://topzone.maugiaodien.com/wp-content/uploads/2021/11/webmau16.com-1675242312254-600x600-ip12prm-old-3.jpg',
    'https://topzone.maugiaodien.com/wp-content/uploads/2021/11/webmau16.com-1675242312254-600x600-ip12prm-old-3.jpg',
  ]
  const [selected, setSelected] = useState(0)
  const [start, setStart] = useState(0)

  const handleBack = () => {
    if (selected === 0 || start === 0) return
    setSelected((prevState) => prevState - 1)
    setStart((prevState) => prevState - 1)
  }

  const handleForward = () => {
    if (selected < phoneCases.length - 1) {
      setSelected((prevState) => prevState + 1)
    }
    if (start < phoneCases.length - 4) {
      setStart((prevState) => prevState + 1)
    }
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          border: '1px solid #D1D5DB',
          borderRadius: '10px',
          paddingBlock: '50px',
        }}
      >
        <IconButton onClick={handleBack}>
          <ArrowBackIos />
        </IconButton>
        <Card sx={{ borderRadius: 1, margin: '0 10px', flex: '0 0 auto' }}>
          <CardMedia
            component="img"
            width="250px"
            height="250px"
            image={phoneCases[selected]}
            alt={`Phone Case ${selected + 1}`}
          />
        </Card>
        <IconButton onClick={handleForward}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '90%',
          marginTop: '10px',
        }}
      >
        {phoneCases.slice(start, start + 4).map((phoneCase, index) => (
          <IconButton key={index} onClick={() => setSelected(index)}>
            <Card
              key={index}
              sx={{
                borderRadius: 1,
                margin: '0 10px',
                flex: '0 0 auto',
                border: index === selected ? '1px solid red' : 'none',
              }}
            >
              <CardMedia
                component="img"
                width="65px"
                height="65px"
                image={phoneCase}
                alt={`Phone Case ${index + 1}`}
              />
            </Card>
          </IconButton>
        ))}
      </Box>
    </Box>
  )
}

ProductImage.propTypes = {
  product: PropTypes.object,
}

export default ProductImage
