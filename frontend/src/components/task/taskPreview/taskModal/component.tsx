import {
  Box,
  Button,
  ButtonGroup,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { FC, useState } from "react";
import { Task, TaskStatus } from "../../../../types/task";
import { ConfirmTaskDelete } from "./deleteComfirm/component";
import { EditTask } from "./editTask/component";
import "./taskModal.css";

interface TaskModalProps {
  editTask: Function;
  deleteTask: Function;
  task: Task;
}

export const TaskModal: FC<TaskModalProps> = ({
  editTask,
  deleteTask,
  task,
}) => {
  const [, setTaskStatus] = useState<string>(task.status);
  const [confirmScreen, setConfirmScreen] = useState<boolean>(false);
  const [editScreen, setEditScreen] = useState<boolean>(false);

  const handleDeleteTask = (confirm: boolean) => {
    setConfirmScreen(false);
    if (confirm) {
      deleteTask(true);
    }
  };

  const handleEditTask = (values: Task) => {
    setEditScreen(false);
    if (values) {
      editTask(values);
    }
  };

  return (
    <>
      <Box className="task-modal">
        <Box className="modal-options">
          <ButtonGroup orientation="horizontal" variant="contained">
            <Button
              sx={{ fontSize: "12px" }}
              className="options-delete-button options-button"
              onClick={() => setConfirmScreen(true)}
            >
              delete
            </Button>
            <Button
              sx={{ fontSize: "12px" }}
              className="optiobs-edit-button options-button"
              onClick={() => setEditScreen(true)}
            >
              edit task
            </Button>
          </ButtonGroup>
        </Box>
        <Box className="modal-status">
          <TextField
            className="status-select"
            label="Status"
            defaultValue={task.status}
            sx={{ fontSize: "12px" }}
            variant="outlined"
            select
          >
            <MenuItem className="status" value={TaskStatus.PENDING}>
              {TaskStatus.PENDING}
            </MenuItem>
            <MenuItem className="status" value={TaskStatus.IN_PROGRESS}>
              {TaskStatus.IN_PROGRESS}
            </MenuItem>
          </TextField>
        </Box>
      </Box>
      {confirmScreen ? (
        <Box className="task-form-container">
          <ConfirmTaskDelete confirm={handleDeleteTask} title={task.title} />
        </Box>
      ) : (
        <></>
      )}
      {editScreen ? (
        <Box className="task-form-container">
          <EditTask task={task} save={handleEditTask} />
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};
