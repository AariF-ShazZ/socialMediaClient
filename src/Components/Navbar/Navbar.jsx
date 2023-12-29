import React from 'react'
import styled from '@emotion/styled'
import { AppBar, Badge, InputBase, Toolbar, Typography } from '@mui/material'
import Instagram from "@mui/icons-material/Instagram"
import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "5px",
  width: "40%"
}))
const Icons = styled("div")(({ theme }) => ({
  // backgroundColor:"white"  
}))
const Navbar = () => {
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
        </Icons>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar