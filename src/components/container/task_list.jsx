import React from "react";
import { Task } from "../models/task.calss";
import TaskComponent from "../pure/task";
import { LEVELS } from "../models/levels.enum";

function taskListComponent() {
  const defaultTask = new Task(
    "Example",
    "Default descripcion",
    false,
    LEVELS.NORMAL
  );
  return (
    <div>
      <div>Your tasks</div>
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
}

export default taskListComponent;
