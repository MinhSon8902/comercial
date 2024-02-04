import CloseIcon from '@mui/icons-material/Close'
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material'
import { useState } from 'react'

function createData(name, value) {
  return { name, value }
}

const rows = [
  createData('Màn hình', '6.7 inch, Super Retina XDR, 2796 x 1290 Pixels'),
  createData('Camera sau', '48.0 MP + 12.0 MP + 12.0 MP'),
  createData('Camera Selfie', '12.0 MP'),
  createData('Bộ nhớ trong', '128 GB'),
  createData('CPU', 'Apple A16 Bionic'),
  createData('Dung lượng pin', '29 Giờ'),
  createData('Thẻ sim', '	1 – 1 eSIM, 1 Nano SIM'),
  createData('Hệ điều hành', 'iOS 16'),
  createData('Xuất xứ', 'Trung Quốc'),
  createData('Thời gian ra mắt', '09/2022'),
]
function ProductInfo() {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div>
      <TableContainer
        component={Paper}
        sx={{
          padding: '10px',
          boxShadow: 'rgb(60 64 67 / 10%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px',
        }}
      >
        <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Thông số kỹ thuật</h3>
        <Table aria-label="simple table">
          <TableBody sx={{}}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&:first-of-type': { borderRadius: '10px 10px 0 0', overflow: 'hidden' },
                  '&:nth-of-type(2n + 1)': { backgroundColor: '#F2F2F2' },
                }}
              >
                <TableCell component="th" scope="row" sx={{ padding: '5px' }}>
                  {row.name}
                </TableCell>
                <TableCell align="right" sx={{ padding: '5px' }}>
                  {row.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <button
          onClick={handleClickOpen}
          style={{
            backgroundColor: '#FFF',
            boxShadow:
              '0px 2px 6px 2px rgba(60, 64, 67, 0.15), 0px 1px 2px 0px rgba(60, 64, 67, 0.10)',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '300',
            width: '100%',
            padding: '5px 45px',
            cursor: 'pointer',
          }}
        >
          Xem cấu hình chi tiết
        </button>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={{
            backgroundColor: '#D70018',
            color: '#FFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <DialogTitle sx={{ padding: '10px' }}>Thông số kỹ thuật</DialogTitle>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                      '&:first-of-type': { borderRadius: '10px 10px 0 0', overflow: 'hidden' },
                      '&:nth-of-type(2n + 1)': { backgroundColor: '#F2F2F2' },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>
    </div>
  )
}

ProductInfo.propTypes = {}

export default ProductInfo
