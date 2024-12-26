const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.post("/todo", function(req, res) {

})

app.get("/todos", function(req, res) {

})

app.put("/completed", function(req, res) {

})


// Start the server
app.listen(port, ()=> {
  console.log(`Server is running on http://localhost:${port}`);
});