import {
  Box,
  Button,
  MenuItem,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Header from "../../components/Header";
import { Formik } from "formik";
import * as yup from "yup";
import { Task } from "../../types/Task";
import { tokens } from "../../theme/theme";
import { useNavigate } from "react-router-dom";
import { TaskService } from "../../services/taskService";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Project } from "../../types/Project";
import { User } from "../../types/User";
import { ProjectService } from "../../services/projectService";
import { UserService } from "../../services/userService";

const TaskForm = (props: { task: Task }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const service = new TaskService();
  const projectService = new ProjectService();
  const userService = new UserService();
  const [projects, setProjects] = useState<Project[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const projects = await projectService.getAllProjects();
        setProjects(projects);
        const users = await userService.getAllUsers();
        setUsers(users);
      } catch (e) {
        console.log("Error in load data " + e);
      }
    }
    loadData();
  }, []);

  const task = props.task;
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSave = async (values: Task) => {
    if (!values.id) {
      await service.createTask(values);
    } else await service.updateTask(values);
    console.log("Save " + values.name);
    navigate(-1);
  };

  const handleFormDelete = async (values: Task) => {
    await service.deleteTask(values);
    console.log("Delete " + values.name);
    navigate(-1);
  };

  return (
    <Box m="20px">
      <Header title="TASK FORM" />

      <Formik
        onSubmit={handleFormSave}
        initialValues={task}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              width="100%"
              display="grid"
              gap="20px"
              gridTemplateColumns="repeat(2, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <Box
                width="100%"
                display="grid"
                gap="20px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  name="name"
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  select
                  variant="filled"
                  type="text"
                  label="Project"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.projectId}
                  name="projectId"
                  error={!!touched.projectId && !!errors.projectId}
                  helperText={touched.projectId && errors.projectId}
                  sx={{ gridColumn: "span 4" }}
                >
                  {projects.map((elem) => (
                    <MenuItem key={elem.id} value={elem.id}>
                      {elem.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Status"
                  select
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.status}
                  name="status"
                  id="status"
                  error={!!touched.status && !!errors.status}
                  helperText={touched.status && errors.status}
                  sx={{ gridColumn: "span 4" }}
                >
                  <MenuItem value={1}>New</MenuItem>
                  <MenuItem value={2}>In Progress</MenuItem>
                  <MenuItem value={3}>In Testing</MenuItem>
                  <MenuItem value={4}>Closed</MenuItem>
                </TextField>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Type"
                  select
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.type}
                  name="type"
                  error={!!touched.type && !!errors.type}
                  helperText={touched.type && errors.type}
                  sx={{ gridColumn: "span 4" }}
                >
                  <MenuItem value={1}>Issue</MenuItem>
                  <MenuItem value={2}>Feature</MenuItem>
                  <MenuItem value={3}>Task</MenuItem>
                  <MenuItem value={4}>Bug</MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Priority"
                  select
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.priority}
                  name="priority"
                  error={!!touched.priority && !!errors.priority}
                  helperText={touched.priority && errors.priority}
                  sx={{ gridColumn: "span 4" }}
                >
                  <MenuItem value={1}>Minor</MenuItem>
                  <MenuItem value={2}>Low</MenuItem>
                  <MenuItem value={3}>Normal</MenuItem>
                  <MenuItem value={4}>High</MenuItem>
                </TextField>
                <DatePicker
                  label="Deadline"
                  value={dayjs(values.deadline)}
                  onChange={(value) => {
                    handleChange({
                      target: {
                        name: "deadline",
                        value: value,
                      },
                    });
                  }}
                  slotProps={{ textField: { variant: "filled" } }}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Difficulty"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.difficulty}
                  name="difficulty"
                  error={!!touched.difficulty && !!errors.difficulty}
                  helperText={touched.difficulty && errors.difficulty}
                  sx={{ gridColumn: "span 4" }}
                />
                {/* <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Author"
                  InputProps={{
                    readOnly: true,
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.authorId}
                  name="author"
                  error={!!touched.authorId && !!errors.authorId}
                  helperText={touched.authorId && errors.authorId}
                  sx={{ gridColumn: "span 4" }}
                /> */}
              </Box>
              <Box
                width="100%"
                display="grid"
                gap="20px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                gridTemplateRows="repeat(7, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  select
                  variant="filled"
                  type="text"
                  label="Assigned To"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.assignedId}
                  name="assignedId"
                  error={!!touched.assignedId && !!errors.assignedId}
                  helperText={touched.assignedId && errors.assignedId}
                  sx={{ gridColumn: "span 4", gridRow: "span 1" }}
                >
                  {users.map((elem) => (
                    <MenuItem key={elem.id} value={elem.id}>
                      {elem.getFullName()}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="filled"
                  type="text"
                  multiline={true}
                  label="Description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.description}
                  name="description"
                  error={!!touched.description && !!errors.description}
                  helperText={touched.description && errors.description}
                  sx={{ gridColumn: "span 4", gridRow: "span 7" }}
                />
              </Box>
            </Box>
            {/* Buttons */}
            <Box display="flex" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Save
              </Button>
              <Button
                onClick={(e) => handleFormDelete(values)}
                variant="contained"
                sx={{ ml: "10px" }}
                style={{
                  backgroundColor: colors.redAccent[5],
                  color: "black",
                }}
              >
                Delete
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  description: yup.string().required("required"),
  deadline: yup.string().required("required"),
  status: yup.number().required("required"),
  type: yup.number().required("required"),
  priority: yup.number().required("required"),
  difficulty: yup.number().required("required"),
});

export default TaskForm;
