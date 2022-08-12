import { Box, Pagination } from "@mui/material";
import { FC } from "react";

export const TaskPage: FC = () => {
  return (
    <>
      <Box>
        <Pagination count={10} />
      </Box>
    </>
  );
};
