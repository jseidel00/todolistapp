import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function Form(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.random() * 100,
      text: input,
      isChecked: false,
    });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Add an item"
        variant="outlined"
        value={input}
        onChange={handleChange}
        required={true}
        fullWidth
      />
      <Button
        className="button"
        type="submit"
        variant="contained"
        color="default"
        startIcon={<AddCircleIcon />}
        fullWidth
      >
        Add item
      </Button>
    </form>
  );
}

export default Form;
