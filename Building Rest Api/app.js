6const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extends: false }));

//ROUTES REST API
app.get("/", (req, res) => {
  return res.status(200).send("Hello I Am Form The Server");
});

app.get("/api/user", (req, res) => {
  return res.status(200).json(users);
});

app.get("/api/user/:id", (req, res) => {
  //:id is varaiable
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id); //from import
  return res.status(200).json(user);
});

app.post("/api/user", (req, res) => {
  const body = req.body;
  const userId = users.length + 1;
  users.push({ ...body, id: userId });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.status(200).json({ status: "success", id: userId });
  });
});

app.delete("/api/user/:id", (req, res) => {
  //Delete user with id
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id); //from import

  if (user !== -1) {
    // Remove the user from the array
    users.splice(user, 1);
    
    // Write the updated users array back to the JSON file
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ status: 'Error', message: 'Failed to delete user' });
      }
      return res.status(200).json({ status: 'Delete', id: id });
    });
  } else {
    // User not found
    return res.status(404).json({ status: 'Error', message: 'User not found' });
  }
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
