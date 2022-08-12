import { Box, Button } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { TaskAPI } from "../../api/task.api";
import { TaskArray } from "../../components/task/taskArray/component";
import { TaskForm } from "../../components/task/taskForm/component";
import { Task } from "../../types/task";
import "./taskView.css";

export const TaskView: FC = () => {
  const [form, setForm] = useState<boolean>(false);
  const [reload, setReload] = useState<boolean>(false);

  window.addEventListener("storage", () => setReload(!reload), false);

  const handleForm = async (values: Task) => {
    setForm(false);
    if (values) {
      const res = await TaskAPI.create(values);
      setReload(!reload);
    }
  };

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchAll() {
      const res = await TaskAPI.getAll();
      setTasks(res);
    }
    fetchAll();
    console.log("reloading...");
  }, [reload]);

  return (
    <>
      <Box className="general-tasks-options-container">
        <Button
          variant="contained"
          className="create-task-button"
          onClick={() => setForm(true)}
        >
          Create new Task
        </Button>
      </Box>
      <Box className="tasks-container">
        <TaskArray tasks={tasks} />
      </Box>
      {form ? (
        <Box className="task-form-container">
          <TaskForm save={handleForm} />
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};
