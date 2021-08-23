import React, { useState } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import EditDialog from "./EditDialog";

function Item({ items, checkItem, removeItem, updateItem }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    isChecked: false,
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = (item) => {
    setEdit({ id: item.id, value: item.text });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setEdit({
      id: null,
      value: "",
      isChecked: false,
    });
  };

  const submitUpdate = (value) => {
    updateItem(edit.id, value);
    setEdit({
      id: null,
      value: "",
      isChecked: false,
    });
    handleClose();
  };

  if (edit.id) {
    return (
      <EditDialog
        open={open}
        handleClose={handleClose}
        onSubmit={submitUpdate}
      />
    );
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
            <IconButton edge="end" onClick={() => removeItem(item.id)}>
              <DeleteForeverIcon />
            </IconButton>
            <IconButton edge="end" onClick={() => handleClickOpen(item)}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default Item;
