import { Box, Divider, Typography } from "@mui/material";
import { FC, useState } from "react";
import { Task, TaskStatus } from "../../../types/task";
import { TaskModal } from "./taskModal/component";
import "./task.css";
import { TaskAPI } from "../../../api/task.api";

export const TaskPreview: FC<Task> = ({ _id, title, description, status }) => {
  const [modal, setModal] = useState<boolean>(false);
  const [thisId, setThisId] = useState<string>(_id);
  const [thisTitle, setThisTitle] = useState<string>(title);
  const [thisDescription, setThisDescription] = useState<string>(description);
  const [thisStatus, setThisStatus] = useState<TaskStatus>(status);

  const editTask = (values: Task) => {
    if (values) {
      // setEditedTask(values)
      setThisId(_id);
      setThisTitle(values.title);
      setThisDescription(values.description);
      setThisStatus(values.status);

      TaskAPI.edit({
        _id: _id,
        title: values.title,
        description: values.description,
        status: values.status,
      });
    }
    window.dispatchEvent(new Event("storage"));
    setModal(false);
  };

  const deleteTask = (confirm: boolean) => {
    setModal(false);
    if (confirm) {
      TaskAPI.delete({
        _id: thisId,
      });

      window.dispatchEvent(new Event("storage"));
    }
  };

  return (
    <>
      <Box className="task-container" onClick={() => setModal(!modal)}>
        <Box className="title-container">
          <Typography className="title">{thisTitle}</Typography>
        </Box>
        <Box className="description-container">
          <Typography
            sx={{ margin: "10px", fontSize: "13px" }}
            className="description"
          >
            {thisDescription}
          </Typography>
        </Box>
        <Box className="task-status">{thisStatus}</Box>
      </Box>
      {modal && thisStatus !== TaskStatus.DONE ? (
        <TaskModal
          editTask={editTask}
          deleteTask={deleteTask}
          task={{
            _id: thisId,
            title: thisTitle,
            description: thisDescription,
            status: thisStatus,
          }}
        />
      ) : (
        <></>
      )}
      <Divider />
    </>
  );
};
