import TodoTaskList from "../todo_task_list/TodoTaskList";

export default function ProjectView() {
    return (
      <div className="project-view">
        <h1>Control View</h1>

        <TodoTaskList />
        <TodoTaskList />
      </div>
    )
  }