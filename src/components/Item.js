import React, { useState } from "react";
import Form from "./Form";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";

function Item({ items, checkItem, removeItem, updateItem }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    isChecked: false,
  });

  const submitUpdate = (value) => {
    updateItem(edit.id, value);
    setEdit({
      id: null,
      value: "",
      isChecked: false,
    });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <List>
      {items.map((item, index) => (
        <ListItem
          key={index}
          onClick={() => checkItem(item.id)}
          role={undefined}
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              color="primary"
              checked={item.isChecked}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText id={item.id} primary={item.text} />
          <ListItemSecondaryAction>
            <IconButton
              className="delete-icon"
              edge="end"
              onClick={() => removeItem(item.id)}
            >
              <DeleteForeverIcon />
            </IconButton>
            <IconButton
              className="edit-icon"
              edge="end"
              onClick={() => setEdit({ id: item.id, value: item.text })}
            >
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
  // return items.map((item, index) => (
  //   <div className={item.isChecked ? "item checked" : "item"} key={index}>
  //     <div key={item.id} onClick={() => checkItems(item.id)}>
  //       {item.text}
  //     </div>
  //     <div className="icons">
  //       <DeleteForeverIcon
  //         onClick={() => removeItem(item.id)}
  //         className="delete-icon"
  //       />
  //       <EditIcon
  //         onClick={() => setEdit({ id: item.id, value: item.text })}
  //         className="edit-icon"
  //       />
  //     </div>
  //   </div>
  // ));
}

export default Item;
