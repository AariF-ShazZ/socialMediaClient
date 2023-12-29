import { Box,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Switch } from '@mui/material'
import React from 'react'
import Home from "@mui/icons-material/Home"
import ModeNightIcon from '@mui/icons-material/ModeNight';
const Sidebar = () => {
  return (
    <Box sx={{display: { xs: "none", sm: "block" } }} flex={1} p={2}>
      <Box position={"fixed"}>
      <List>
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
            <Home />
            </ListItemIcon>
            <ListItemText primary="Page" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#'>
            <ListItemIcon>
            <Home />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#'>
            <ListItemIcon>
            <Home />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
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
            <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#'>
            <ListItemIcon>
            <ModeNightIcon />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    
    </Box>
  )
}

export default Sidebar