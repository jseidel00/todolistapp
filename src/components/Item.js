import React, { useState } from "react";
import Form from "./Form";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Item({ items, checkItems, removeItem, updateItem }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateItem(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  return items.map((item, index) => (
    <div className={item.isChecked ? "item checked" : "item"} key={index}>
      <div key={item.id} onClick={() => checkItems(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeItem(item.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: item.id, value: item.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Item;
