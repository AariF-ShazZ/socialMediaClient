import React from 'react';
import { Box, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Avatar,Checkbox } from '@mui/material';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import {MoreVert,FavoriteBorder,Favorite} from '@mui/icons-material/';
import Post from '../Post/Post';


const Feed = () => {
  return (
    <Box flex={4} p={2}>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
    </Box>
  )
}

export default Feed