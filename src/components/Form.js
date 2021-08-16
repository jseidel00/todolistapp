import React, { useState } from "react";

function Form(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.random() * 100,
      text: input,
    });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add an item"
        name="text"
        className="input"
        value={input}
        onChange={handleChange}
      />
      <button className="button" type="submit">
        Add item
      </button>
    </form>
  );
}

export default Form;
