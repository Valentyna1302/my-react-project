import { useId, useState } from "react";

//* Якщо селект використовується поза формою, то ми працюємо з ним як з контрольованим елементом:
// Зберігаємо поточне значення в стані.
// Передаємо значення стану як атрибут value.
// Змінюємо стан при події onChange.
const LangSwitcher = ({ value, onSelect }) => {
  const selectId = useId();

  return (
    <div>
      <label htmlFor={selectId}>Choose language</label>
      <select
        id={selectId}
        value={value}
        onChange={(evt) => onSelect(evt.target.value)}
      >
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
