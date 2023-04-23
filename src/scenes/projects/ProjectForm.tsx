import { Box, Button, TextField, useMediaQuery, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { Formik } from "formik";
import * as yup from "yup";
import { Project } from "../../types/Project";
import { tokens } from "../../theme";

const ProjectForm = (props: { project: Project }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const project = props.project;
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSave = (values: Project) => {
    console.log("Save " + values.name);
  };

  const handleFormDelete = (values: Project) => {
    console.log("Delete " + values.name);
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
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="deadline"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.deadline}
                name="deadline"
                error={!!touched.deadline && !!errors.deadline}
                helperText={touched.deadline && errors.deadline}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="status"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.status}
                name="status"
                error={!!touched.status && !!errors.status}
                helperText={touched.status && errors.status}
                sx={{ gridColumn: "span 4" }}
              />
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
  deadline: yup.string().required("required"),
  status: yup.string().required("required"),
});

export default ProjectForm;
