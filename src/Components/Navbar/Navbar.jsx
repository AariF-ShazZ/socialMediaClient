import React from 'react'
import styled from '@emotion/styled'
import { AppBar, Badge, InputBase, Toolbar, Typography,Avatar,Box,MenuItem, Menu } from '@mui/material'
import Instagram from "@mui/icons-material/Instagram"
import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import { useState } from 'react';
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))
const Icons = styled("div")(({ theme }) => ({
  display:"none",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}))
const UserBox = styled(Box)(({ theme }) => ({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))

const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>socialMEDIA</Typography>
        <Instagram sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder='search...' /></Search>
        <Icons>
          <Badge badgeContent={4} color={"error"}>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color={"error"}>
            <Notifications/>
          </Badge>
          <Avatar onClick={(e)=> setOpen(true)} sx={{width:30,height:30}} alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" />
        </Icons>
        <UserBox onClick={(e)=> setOpen(true)}>
        <Avatar  sx={{width:30,height:30}} alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"  />
        <Typography variant='span'>Aarif</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose={(e)=> setOpen(false)}
        open={open}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar