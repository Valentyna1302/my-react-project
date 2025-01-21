export default function Form({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: Date.now(),
      text: e.target.elements.text.value,
    });
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" />
      <button type="submit">Add task</button>
    </form>
  );
}
