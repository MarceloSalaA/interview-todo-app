import {
  Box,
  Button,
  ButtonGroup,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { useFormik } from "formik";
import "./taskForm.css";
import { Task, TaskDTO, TaskStatus } from "../../../types/task";
import * as Yup from "yup";

interface TaskFormProps {
  task?: Task;
  save: Function;
}

const taskSchema: Yup.SchemaOf<TaskDTO> = Yup.object().shape({
  title: Yup.string().required("A title is required"),
  description: Yup.string().required("A description is required"),
  status: Yup.mixed<TaskStatus>().oneOf(Object.values(TaskStatus)).required(),
});

export const TaskForm: FC<TaskFormProps> = ({ task, save }) => {
  const saveTask = async (values: TaskDTO) => {
    save(values);
  };

  const formik = useFormik<TaskDTO>({
    initialValues: {
      title: task?.title || "",
      description: task?.description || "",
      status: task?.status || TaskStatus.PENDING,
    },
    validationSchema: taskSchema,
    onSubmit: saveTask,
  });

  return (
    <>
      <Box className="form-centerer">
        <Box className="form-container">
          <Box className="form-title-container">
            <Typography className="form-title">Title:</Typography>
            <TextField
              label="Title"
              variant="filled"
              className="form-title-input"
              type="text"
              error={formik.touched.title}
              helperText={formik.errors.title}
              onChange={formik.handleChange("title")}
              defaultValue={formik.initialValues.title}
            />
          </Box>
          <Box className="form-description-container">
            <Typography className="form-description">Description:</Typography>
            <TextField
              label="Description"
              multiline
              rows={3}
              error={formik.touched.description}
              helperText={formik.errors.description}
              onChange={formik.handleChange("description")}
              defaultValue={formik.initialValues.description}
            />
          </Box>
          {task ? (
            <Box className="form-status-container">
              <Typography className="form-status">Status:</Typography>
              <Box className="modal-status">
                <TextField
                  className="status-select"
                  label="Status"
                  defaultValue={task.status}
                  onChange={formik.handleChange("status")}
                  sx={{ fontSize: "12px" }}
                  variant="outlined"
                  error={formik.touched.status}
                  helperText={formik.errors.status}
                  select
                >
                  <MenuItem className="status" value={TaskStatus.PENDING}>
                    {TaskStatus.PENDING}
                  </MenuItem>
                  <MenuItem className="status" value={TaskStatus.IN_PROGRESS}>
                    {TaskStatus.IN_PROGRESS}
                  </MenuItem>
                  <MenuItem className="status" value={TaskStatus.DONE}>
                    {TaskStatus.DONE}
                  </MenuItem>
                </TextField>
              </Box>
            </Box>
          ) : (
            <></>
          )}
          <Box className="form-options">
            <ButtonGroup variant="contained">
              <Button className="form-option-cancel" onClick={() => save()}>
                Cancel
              </Button>
              <Button
                className="form-option-save"
                onClick={() => formik.handleSubmit()}
              >
                Save
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Box>
    </>
  );
};
