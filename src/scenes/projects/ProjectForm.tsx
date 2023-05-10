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
import { Project } from "../../types/Project";
import { tokens } from "../../theme/theme";
import { ProjectService } from "../../services/projectService";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const ProjectForm = (props: { project: Project }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const project = props.project;
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const service = new ProjectService();

  const handleFormSave = async (values: Project) => {
    if (!values.id) {
      await service.createProject(values);
    } else await service.updateProject(values);
    console.log("Save " + values.name);
    navigate(-1);
  };

  const handleFormDelete = async (values: Project) => {
    await service.deleteProject(values);
    console.log("Delete " + values.name);
    navigate(-1);
  };

  return (
    <Box m="20px">
      <Header title="PROJECT FORM" />

      <Formik
        onSubmit={handleFormSave}
        initialValues={project}
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
              width="50%"
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
                label="Description"
                multiline={true}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />
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
                type="text"
                label="Status"
                select
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.status}
                name="status"
                error={!!touched.status && !!errors.status}
                helperText={touched.status && errors.status}
                sx={{ gridColumn: "span 4" }}
              >
                <MenuItem value={1}>Open</MenuItem>
                <MenuItem value={2}>Current</MenuItem>
                <MenuItem value={3}>Closed</MenuItem>
              </TextField>
            </Box>
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
  status: yup.number().required("required"),
});

export default ProjectForm;
