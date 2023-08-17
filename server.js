const express = require("express");
const app = express();
const port = 3003;

// Greeting
app.get("/greeting", (req, res) => {
  res.send(`Hello, stranger!`);
});

app.get("/greeting/:name", (req, res) => {
  res.send(`${req.params.name}! It's so great to see you!`);
});

// tip calculator
app.get("/tip/:total/:tipPercentage", (req, res) => {
  const tipAmount = ((req.params.total * req.params.tipPercentage) / 100).toFixed(2);
  res.send(`Tip amount is $${tipAmount}`);
});

// Magic 8 Ball
const magic8ball = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/magic/:question", (req, res) => {
  // console.log(encodeURI("Will I Be A Millionaire"));
  const question = decodeURI(req.params.question);
  const reandomResponse =
    magic8ball[Math.floor(Math.random() * magic8ball.length)];

  res.send(`
    <h1>Your Question: ${question} </h1>
    <h1>Magic 8 Ball Response: ${reandomResponse}</h1>
    `);
});

app.listen(port, () => {
  console.log("listening on port", port);
});
