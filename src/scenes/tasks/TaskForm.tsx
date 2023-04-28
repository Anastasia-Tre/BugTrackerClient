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
import { tokens } from "../../theme";

const TaskForm = (props: { task: Task }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const task = props.task;
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSave = (values: Task) => {
    console.log("Save " + values.name);
  };

  const handleFormDelete = (values: Task) => {
    console.log("Delete " + values.name);
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
                  variant="filled"
                  type="text"
                  label="Project"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.project}
                  name="project"
                  error={!!touched.project && !!errors.project}
                  helperText={touched.project && errors.project}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Status"
                  select
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={task.status}
                  name="status"
                  error={!!touched.status && !!errors.status}
                  helperText={touched.status && errors.status}
                  sx={{ gridColumn: "span 4" }}
                >
                  <MenuItem value="NEW">New</MenuItem>
                  <MenuItem value="PROGRESS">In Progress</MenuItem>
                  <MenuItem value="TESTING">Testing</MenuItem>
                  <MenuItem value="CLOSED">Closed</MenuItem>
                </TextField>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Type"
                  select
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={task.type}
                  name="type"
                  error={!!touched.type && !!errors.type}
                  helperText={touched.type && errors.type}
                  sx={{ gridColumn: "span 4" }}
                >
                  <MenuItem value="BUG">Bug</MenuItem>
                  <MenuItem value="TASK">Task</MenuItem>
                  <MenuItem value="ISSUE">Issue</MenuItem>
                  <MenuItem value="FEATURE">Feature</MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Priority"
                  select
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={task.priority}
                  name="priority"
                  error={!!touched.priority && !!errors.priority}
                  helperText={touched.priority && errors.priority}
                  sx={{ gridColumn: "span 4" }}
                >
                  <MenuItem value="MINOR">Minor</MenuItem>
                  <MenuItem value="LOW">Low</MenuItem>
                  <MenuItem value="MEDIUM">Medium</MenuItem>
                  <MenuItem value="HIGH">High</MenuItem>
                </TextField>
                <DatePicker
                  label="Deadline"
                  value={Date.now}
                  onChange={(value) => {
                    handleChange({
                      target: {
                        name: "deadline",
                        value: value?.toString().substr(0, 10) || "",
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
                  label="Difficults"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.difficults}
                  name="difficults"
                  error={!!touched.difficults && !!errors.difficults}
                  helperText={touched.difficults && errors.difficults}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Author"
                  InputProps={{
                    readOnly: true,
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.author}
                  name="author"
                  error={!!touched.author && !!errors.author}
                  helperText={touched.author && errors.author}
                  sx={{ gridColumn: "span 4" }}
                />
              </Box>
              <Box
                width="100%"
                display="grid"
                gap="20px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                gridTemplateRows="repeat(8, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Assigned To"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.assignee}
                  name="assignee"
                  error={!!touched.assignee && !!errors.assignee}
                  helperText={touched.assignee && errors.assignee}
                  sx={{ gridColumn: "span 4", gridRow: "span 1" }}
                />
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
                  backgroundColor: colors.redAccent[500],
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
  project: yup.string().required("required"),
  deadline: yup.string().required("required"),
  status: yup
    .string()
    .oneOf(["NEW", "PROGRESS", "TESTING", "CLOSED"])
    .required("required"),
  type: yup
    .string()
    .oneOf(["BUG", "TASK", "ISSUE", "FEATURE"])
    .required("required"),
  assignee: yup.string().required("required"),
  author: yup.string().required("required"),
  priority: yup
    .string()
    .oneOf(["MINOR", "LOW", "MEDIUM", "HIGH"])
    .required("required"),
  difficulty: yup.number().required("required"),
});

export default TaskForm;
