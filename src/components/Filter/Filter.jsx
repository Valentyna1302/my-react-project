const Filter = ({ value, onFilter }) => {
  return (
    <div>
      <p>Search by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
