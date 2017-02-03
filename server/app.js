import express from 'express';
import bodyParser from 'body-parser';
import * as db from './utils/DataBaseUtils.js';

db.setUpConnection();

const app = express();

app.use(bodyParser.json());

app.get('/notes', (req, res) => {
  db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
  res.send('Hey, sup!');
});

app.delete('/notes/:id', (req, res) => {
  res.send('Hey, sup!');
});

const server = app.listen(8080, () => {
  console.log(`Server is UP on port 8080`);
});
