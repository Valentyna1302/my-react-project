import Task from "../Task/Task";

export default function TaskList({ tasks, onDelete }) {
  return (
    <ul
      style={{
        marginBottom: "30px",
      }}
    >
      {tasks.map((task) => (
        <li key={task.id}>
          <Task data={task} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
