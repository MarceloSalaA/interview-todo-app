import { Box, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { Task } from "../../../../../types/task";
import { TaskForm } from "../../../taskForm/component";

interface EditTaskProps {
  task: Task;
  save: Function;
}

export const EditTask: FC<EditTaskProps> = ({ task, save }) => {
  const [form, setForm] = useState<boolean>(false);

  const handleForm = (values: Task) => {
    if (values) {
      save(values);
    } else {
      save();
    }
  };

  return (
    <>
      <Box className="form-centerer">
        <TaskForm task={task} save={handleForm}></TaskForm>
      </Box>
    </>
  );
};
