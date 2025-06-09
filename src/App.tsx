import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import CoursePage from "./pages/CoursePage";
// import VideoPage from "./pages/CoursePage";

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
    typography: {
      fontFamily: [
        "Roboto",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/course/:id" element={<CoursePage />} /> */}
            <Route path="/course/:id/video/:videoId" element={<CoursePage />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
