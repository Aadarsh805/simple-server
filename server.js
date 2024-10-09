const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(express.json());

// Define a POST route for the endpoint
app.post("/", (req, res) => {
  const body = req.body;
  console.log("Received data:", JSON.stringify(body, null, 4))
  res.json(body);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
