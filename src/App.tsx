import { ColorModeContext, useMode } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Routes } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Projects from "./scenes/projects";
import Tasks from "./scenes/tasks";
import User from "./scenes/user";
import { PROJECTS, ROOT, TASKS, USER } from "./navigation/CONSTANTS";
import EditProjectPage from "./scenes/projects/EditProjectForm";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EditTaskPage from "./scenes/tasks/EditTaskForm";

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
                <Route path={PROJECTS + "/:id"} Component={EditProjectPage} />
                <Route path={ROOT} element={<Dashboard />} />
                <Route path={PROJECTS} element={<Projects />} />
                <Route path={TASKS + "/:id"} Component={EditTaskPage} />
                <Route path={TASKS} element={<Tasks />} />
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
