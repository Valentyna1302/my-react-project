export default function Task({ data: { id, text }, onDelete }) {
  return (
    <div>
      <p>{text}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
