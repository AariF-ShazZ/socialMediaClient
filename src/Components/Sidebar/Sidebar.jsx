import { Box } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box sx={{backgroundColor:"skyblue",display:{xs:"none",sm:"block"}}} flex={1} p={2}>Sidebar</Box>
  )
}

export default Sidebar