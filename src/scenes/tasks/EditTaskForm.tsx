import { useLocation } from "react-router-dom";
import { Task } from "../../types/Task";
import TaskForm from "./TaskForm";

const EditTaskPage = () => {
  const location = useLocation();
  const task = location.state?.stateTask;
  console.log(task);

  if (!task) {
    return <TaskForm task={new Task()} />;
  }

  return <TaskForm task={task} />;
};

export default EditTaskPage;
