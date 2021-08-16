import React, { useState } from "react";
import Form from "./Form";
import Item from "./Item";

// Contains the Form and all the items

function List() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const newItems = [item, ...items];
    setItems(newItems);
  };

  const checkedItems = (id) => {
    let updatedItems = items.map((item) => {
      if (item.id === id) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });
    setItems(updatedItems);
  };

  const removeItem = (id) => {
    const removes = [...items].filter((item) => item.id !== id);
    setItems(removes);
  };

  const updateItem = (id, newValue) => {
    setItems((prev) => prev.map((item) => (item.id === id ? newValue : item)));
  };

  return (
    <div>
      <h1>Joe's Todo List</h1>
      <Form onSubmit={addItem} />
      <Item
        items={items}
        checkedItems={checkedItems}
        removeItem={removeItem}
        updateItem={updateItem}
      />
    </div>
  );
}

export default List;
