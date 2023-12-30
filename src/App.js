import { useState } from 'react';
import './App.css';
import Feed from './Components/Feed/Feed';
import Navbar from './Components/Navbar/Navbar';
import Rightbar from './Components/Rightbar/Rightbar';
import Sidebar from './Components/Sidebar/Sidebar';
import { Box, Stack } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define your theme with breakpoints
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* <Navbar /> */}
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
