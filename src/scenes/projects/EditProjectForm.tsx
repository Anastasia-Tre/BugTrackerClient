import { useLocation } from "react-router-dom";
import { Project } from "../../types/Project";
import ProjectForm from "./ProjectForm";

const EditProjectPage = () => {
  const location = useLocation();
  const project = location.state?.stateProject;
  console.log(project);

  if (!project) {
    return <ProjectForm project={new Project()} />;
  }

  return <ProjectForm project={project} />;
};

export default EditProjectPage;
