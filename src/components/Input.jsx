import { useState } from "react";

export default function Input({ name, label, initialValue, onValueChange }) {
  const [value, setValue] = useState(initialValue);
  function handleChangeValue(event) {
    const { name, value } = event.target;
    setValue(event.target.value);
    onValueChange(name, value);
  }
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChangeValue}
      />
    </div>
  );
}
