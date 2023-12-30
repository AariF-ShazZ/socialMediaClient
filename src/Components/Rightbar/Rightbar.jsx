import { Box, Typography,AvatarGroup,Avatar, ImageList, ImageListItem } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"} width={300}>
        <Typography variant='h6' fontWeight={500}>Online Friends</Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" />
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpOG2vPdxUB-JknWCF7pbvrdzo-DzAaXlVxA&usqp=CAU" />
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpOG2vPdxUB-JknWCF7pbvrdzo-DzAaXlVxA&usqp=CAU" />
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpOG2vPdxUB-JknWCF7pbvrdzo-DzAaXlVxA&usqp=CAU" />
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpOG2vPdxUB-JknWCF7pbvrdzo-DzAaXlVxA&usqp=CAU" />
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpOG2vPdxUB-JknWCF7pbvrdzo-DzAaXlVxA&usqp=CAU" />
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpOG2vPdxUB-JknWCF7pbvrdzo-DzAaXlVxA&usqp=CAU" />
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpOG2vPdxUB-JknWCF7pbvrdzo-DzAaXlVxA&usqp=CAU" />
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpOG2vPdxUB-JknWCF7pbvrdzo-DzAaXlVxA&usqp=CAU" />
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpOG2vPdxUB-JknWCF7pbvrdzo-DzAaXlVxA&usqp=CAU" />
        </AvatarGroup>
        <Typography variant="h6" mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
        <ImageListItem >
          <img
            srcSet={`https://t4.ftcdn.net/jpg/01/75/97/39/360_F_175973930_FOfQM7zFXsVuFLlz1H4PrU4YGZX14oFA.jpg`}
            src={`https://t4.ftcdn.net/jpg/01/75/97/39/360_F_175973930_FOfQM7zFXsVuFLlz1H4PrU4YGZX14oFA.jpg`}
            alt={"item.title"}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem >
          <img
            srcSet={`https://t4.ftcdn.net/jpg/01/75/97/39/360_F_175973930_FOfQM7zFXsVuFLlz1H4PrU4YGZX14oFA.jpg`}
            src={`https://t4.ftcdn.net/jpg/01/75/97/39/360_F_175973930_FOfQM7zFXsVuFLlz1H4PrU4YGZX14oFA.jpg`}
            alt={"item.title"}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem >
          <img
            srcSet={`https://t4.ftcdn.net/jpg/01/75/97/39/360_F_175973930_FOfQM7zFXsVuFLlz1H4PrU4YGZX14oFA.jpg`}
            src={`https://t4.ftcdn.net/jpg/01/75/97/39/360_F_175973930_FOfQM7zFXsVuFLlz1H4PrU4YGZX14oFA.jpg`}
            alt={"item.title"}
            loading="lazy"
          />
        </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  )
}

export default Rightbar