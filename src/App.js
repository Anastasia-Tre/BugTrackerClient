import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom"; 
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Projects from "./scenes/projects";
import Bugs from "./scenes/bugs";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            {/* <Topbar /> */}
            <Routes>
              <Route path="/" element={<Dashboard />}/>
            </Routes>
            <Routes>
              <Route path="/projects" element={<Projects />}/>
            </Routes>
            <Routes>
              <Route path="/bugs" element={<Bugs />}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
