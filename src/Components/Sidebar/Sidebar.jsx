import { Avatar, Badge, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Typography,MenuItem, Menu  } from '@mui/material'
import React, { useState } from 'react'
import Home from "@mui/icons-material/Home"
import ExploreIcon from '@mui/icons-material/Explore';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import MenuIcon from '@mui/icons-material/Menu';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MessageIcon from '@mui/icons-material/Message';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LightModeIcon from '@mui/icons-material/LightMode';
const Sidebar = ({ mode, setMode }) => {
  const [open,setOpen] = useState(false)
  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }} flex={1} p={2}>
      <Box position={"fixed"}>
        <List>
          <ListItem disablePadding sx={{ marginBottom: "7%" }}>
            <ListItemButton component="a" href='#'>
              <Typography variant='h5' fontWeight={800}>Instagram</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <SubscriptionsIcon />
              </ListItemIcon>
              <ListItemText primary="Reels" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <Badge badgeContent={4} color={"error"}>
                  <MessageIcon />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <FavoriteBorderIcon />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <AddBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#' onClick={(e)=> setOpen(true)}>
              <ListItemIcon>
                <MenuIcon  />
              </ListItemIcon>
              <ListItemText primary="More" />
            </ListItemButton>
          </ListItem>
          <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose={(e)=> setOpen(false)}
        open={open}
        
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
          {/* <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                {
                  mode === "light" ? <LightModeIcon /> : <ModeNightIcon />
                }


              </ListItemIcon>
              <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton>
          </ListItem> */}
        </List>
      </Box>

    </Box>
  )
}

export default Sidebar