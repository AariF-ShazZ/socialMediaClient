import './App.css';
import Feed from './Components/Feed/Feed';
import Navbar from './Components/Navbar/Navbar';
import Rightbar from './Components/Rightbar/Rightbar';
import Sidebar from './Components/Sidebar/Sidebar';
import { Box, Stack } from "@mui/material"
function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
