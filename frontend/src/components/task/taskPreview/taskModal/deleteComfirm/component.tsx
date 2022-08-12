import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { FC } from "react";
import "./deleteConfirm.css";

interface ConfirmTaskDeleteProps {
  confirm: Function;
  title: string;
}

export const ConfirmTaskDelete: FC<ConfirmTaskDeleteProps> = ({
  confirm,
  title,
}) => {
  return (
    <>
      <Box className="form-centerer">
        <Box className="form-container">
          <Typography
            sx={{
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            {`Are You sure you want to delete "${title}" task?`}
          </Typography>
          <Box className="modal-options">
            <Button
              sx={{ fontSize: "12px", marginRight: "24px" }}
              variant="contained"
              className="options-delete-button options-button"
              onClick={() => confirm(false)}
            >
              cancel
            </Button>
            <Button
              sx={{ fontSize: "12px" }}
              variant="contained"
              className="optiobs-edit-button options-button"
              onClick={() => confirm(true)}
            >
              confirm
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
