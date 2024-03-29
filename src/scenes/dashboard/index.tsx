import { Box, Divider, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";
import Header from "../../components/Header";
import TaskCardShort from "../tasks/TaskCardShort";
import TaskCard from "../tasks/TaskCard";
import { Task } from "../../types/Task";
import InfoBox from "../../components/InfoBox";
import Pie from "./PieDiagram";
import Line from "./LineDiagram";
import Bar from "./BarDiagram";
import { useEffect, useState } from "react";
import { TaskService } from "../../services/taskService";
import { Serie } from "@nivo/line";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [taskInFocus, setTaskInFocus] = useState<Task>(new Task());
  const [tasksForNowOrLater, settasksForNowOrLater] = useState<Task[]>([]);
  const [infostat, setInfoStat] = useState<number[]>([]);
  const [dataForLineDiagram, setDataForLineDiagram] = useState<Serie[]>([]);
  const [dataForBarDiagram, setDataForBarDiagram] = useState<
    { project: string; complete: number; uncomplete: number }[]
  >([]);
  const service = new TaskService();

  const userId = 1;
  useEffect(() => {
    async function loadData() {
      try {
        const data = await service.getTaskInFocus(userId);
        setTaskInFocus(data);
        const data1 = await service.getAllTasksForNowOrLater(userId);
        settasksForNowOrLater(data1);

        const info = [
          await service.getTaskTotal(userId),
          await service.getTaskComplete(userId),
          await service.getTaskUncomplete(userId),
          await service.getTaskOverdue(userId),
        ];
        setInfoStat(info);

        const tasks = await service.getAllTasksForUser(userId);
        const dataForLine = service.prepareDataForLineDigram(tasks);
        setDataForLineDiagram(dataForLine);
        const dataForBar = service.prepareDataForBarDiagram(tasks);
        setDataForBarDiagram(dataForBar);
      } catch (e) {
        console.log("Error in load data for all tasks" + e);
      }
    }
    loadData();
  }, []);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      <Box
        width="100%"
        display="grid"
        gap="20px"
        gridTemplateColumns="repeat(3, minmax(0, 1fr))"
      >
        <Box
          display="grid"
          gap="7px"
          // gridTemplateRows="repeat(5, minmax(0, 1fr))"
          sx={{ gridColumn: "span 1" }}
        >
          {/* TASK IN FOCUS */}
          <Box
            display="flex"
            flexDirection="column"
            flexWrap="wrap"
            sx={{ m: "0 0 5px 0" }}
            // sx={{ m: "0 0 5px 0", gridRow: "span 2" }}
          >
            <Typography fontSize="20px" color={colors.grey[4]} align="center">
              TASK IN FOCUS
            </Typography>
            <Divider
              style={{
                backgroundColor: colors.grey[4],
                height: "1px",
                marginBottom: 1,
              }}
            />
            <TaskCard task={taskInFocus} />
          </Box>

          {/* NOW OR LATER? */}
          <Box
            display="flex"
            flexDirection="column"
            flexWrap="wrap"
            // sx={{ gridRow: "span 3" }}
          >
            <Typography fontSize="20px" color={colors.grey[4]} align="center">
              NOW OR LATER?
            </Typography>
            <Divider
              style={{
                backgroundColor: colors.grey[4],
                height: "1px",
                marginBottom: 1,
              }}
            />
            {tasksForNowOrLater.map((task, index) => (
              <TaskCardShort key={index} task={task} />
            ))}
          </Box>
        </Box>

        <Box
          display="grid"
          gap="7px"
          gridTemplateRows="repeat(5, minmax(0, 1fr))"
          sx={{ gridColumn: "span 2" }}
        >
          <Box
            display="grid"
            gap="7px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{ gridRow: "span 1" }}
          >
            <InfoBox label="Total bugs" num={infostat[0]} />
            <InfoBox label="Complete bugs" num={infostat[1]} />
            <InfoBox label="Uncomplete bugs" num={infostat[2]} />
            <InfoBox label="Overdue bugs" num={infostat[3]} />
          </Box>
          <Box
            display="grid"
            gap="15px"
            gridTemplateColumns="repeat(2, minmax(0, 1fr))"
            sx={{ gridRow: "span 2" }}
          >
            <Pie
              complete={infostat[1]}
              uncomplete={infostat[2]}
              total={infostat[0]}
            />
            <Line data={dataForLineDiagram} />
          </Box>

          <Box sx={{ gridRow: "span 2" }}>
            <Bar data={dataForBarDiagram} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
