import Task from "../Task/Task";

export default function TaskList({ tasks, onDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task data={task} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
