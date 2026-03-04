import { useState } from "react";

export default function Input({ name, label, initialValue, onValueChange }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        value={initialValue}
        onChange={onValueChange}
      />
    </div>
  );
}
