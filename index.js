const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", async (req, res) => {
  res.send("Hello there!");
});

// Use app.get() to define the "show" endpoint
app.get("/show", async (req, res) => {
  // Send JSON data instead of an array of objects
  res.json([
    {
      achievement: "BackEnd What?",
      sayGreeting: "Hello From StackTrek",
    },
  ]);
});

app.get("/achievement", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3001/show");
    const data = response.data;
    const achievement = data[0].achievement;
    res.send(`${achievement}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving achievement data");
  }
});

app.get("/greet", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3001/show");
    const data = response.data;
    const sayGreeting = data[0].sayGreeting;
    res.send(`${sayGreeting}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving sayGreeting data");
  }
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
