import React, { useState } from "react";

function Form() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add an item"
        name="text"
        className="input"
      />
      <button className="button">Add item</button>
    </form>
  );
}

export default Form;
