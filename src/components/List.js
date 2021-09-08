import React, { useState } from "react";
import Form from "./Form";
import Item from "./Item";
import Container from "@material-ui/core/Container";
import "../App.css";

function List() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const newItems = [item, ...items];
    setItems(newItems);
  };

  const checkItem = (id) => {
    let updatedItems = items.map((item) => {
      if (item.id === id) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });
    setItems(updatedItems);
  };

  const removeItem = (id) => {
    const remainders = [...items].filter((item) => item.id !== id);
    setItems(remainders);
  };

  const updateItem = (id, newValue) => {
    setItems((old) => old.map((item) => (item.id === id ? newValue : item)));
  };

  return (
    <Container maxWidth="sm" className="list">
      <h1 className="title">Joe's Todo List</h1>
      <div className="box">
        <Form onSubmit={addItem} />
        <Item
          items={items}
          checkItem={checkItem}
          removeItem={removeItem}
          updateItem={updateItem}
        />
      </div>
    </Container>
  );
}

export default List;
