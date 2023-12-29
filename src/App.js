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
  return (
    <Box>
      <ThemeProvider theme={theme}>
      <Navbar/>
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      </ThemeProvider>
    </Box>
  );
}

export default App;
