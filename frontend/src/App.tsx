import "./App.css";

import { FC, useEffect, useState } from "react";
import { TaskView } from "./views/taskView/view";
import { TaskAPI } from "./api/task.api";

const App: FC = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchAll() {
      const res = await TaskAPI.getAll();
      setTasks(res);
    }
    fetchAll();
  }, []);

  return (
    <>
      {console.log(tasks)}
      <div className="content-container">
        <div className="main-activity">
          <div className="app-name-container">
            <p>TODO List Web App</p>
          </div>
          <TaskView></TaskView>
        </div>
      </div>
    </>
  );
};

export default App;
