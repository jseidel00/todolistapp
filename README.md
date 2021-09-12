# Joe's Todo list app

This is a single page todo list made using React.js and Material-ui. The purpose of this project was to freshen up my skills with using these tools.

# How to run the app yourself

After cloning the project, you can execute the following script to run the project locally:

```bash
  npm start
```

Or if using yarn:

```bash
    yarn start
```

After which the app should automatically launch on your browser at the url `localhost:3000`

# What does this app look like?

If you don't want to run the code yourself, you can have a look at the app in action below.

# Project structure

There are four main components in this project

- List.js
- Item.js
- Form.js
- EditDialog.js

I used the `App.js` file to just return the `List.js` component. The list component contains the logic for creating, updating and deleting todo items on the list. It also returns the `Form.js` and `Item.js` components. The form handles the submitting of new items and the item components utilizes a map function to list out all the items that are stored. Finally, the `EditDialog.js` component displayes the edit pop-up dialog when the edit icon is clicked on an item.

I used a combination of material-ui components and css to create the design elements for this app.

Feel free to look through my code for more information!
