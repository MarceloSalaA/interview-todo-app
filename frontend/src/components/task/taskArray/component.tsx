import { FC, useEffect, useState } from "react";
import { Task } from "../../../types/task";
import { TaskPreview } from "../taskPreview/component";

interface TaskArrayProps {
  tasks?: Task[];
  deleteTaskInArray?: Task;
}

export const TaskArray: FC<TaskArrayProps> = ({ tasks }) => {
  return (
    <>
      {true ? (
        tasks?.map((task) => (
          <TaskPreview
            key={Math.random().toString()}
            _id={task._id}
            title={task.title}
            description={task.description}
            status={task.status}
          />
        ))
      ) : (
        <></>
      )}
    </>
  );
};
