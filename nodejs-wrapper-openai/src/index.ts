import express from "express";
import cors from "cors";
import fs from "fs";
import { getActionPoints } from "./chat";
import { APIPromise } from "openai/core";

let db: any = []

fs.readFile('./ai.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  db = JSON.parse(data);
});

var app = express();
app.use(express.json())
app.use(cors())

app.get('/ai/todos', async (req, res) => {
  res.json({ result: db })
})

app.post('/ai/action-points', async (req, res) => {
  const body = req.body;
  const response = await getActionPoints(body.note);

  db = [...db, { title: body.title, content: body.note, action_items: response }]
  fs.writeFileSync('./ai.json', JSON.stringify(db));
  res.json({})
})

app.listen(8081, function () {

  console.log("Example app listening at 8081")
})