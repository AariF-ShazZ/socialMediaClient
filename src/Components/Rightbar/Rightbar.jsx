import { Box, Typography,AvatarGroup,Avatar } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}>
        <Typography variant='h6' fontWeight={500}>Online Friends</Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" />
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpOG2vPdxUB-JknWCF7pbvrdzo-DzAaXlVxA&usqp=CAU" />
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpOG2vPdxUB-JknWCF7pbvrdzo-DzAaXlVxA&usqp=CAU" />
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpOG2vPdxUB-JknWCF7pbvrdzo-DzAaXlVxA&usqp=CAU" />
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpOG2vPdxUB-JknWCF7pbvrdzo-DzAaXlVxA&usqp=CAU" />
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpOG2vPdxUB-JknWCF7pbvrdzo-DzAaXlVxA&usqp=CAU" />
    
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default Rightbar