import { ColorModeContext, useMode } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Projects from "./scenes/projects";
import Tasks from "./scenes/tasks";
import User from "./scenes/user";
import { PROJECTS, ROOT, TASKS, USER } from "./navigation/CONSTANTS";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              {/* <Topbar /> */}
              <Routes>
                <Route path={ROOT} element={<Dashboard />} />
              </Routes>
              <Routes>
                <Route path={PROJECTS} element={<Projects />} />
              </Routes>
              <Routes>
                <Route path={TASKS} element={<Tasks />} />
              </Routes>
              <Routes>
                <Route path={USER} element={<User />} />
              </Routes>
            </main>
          </div>
        </LocalizationProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
