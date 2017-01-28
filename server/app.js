import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hey, sup!');
})

const server = app.listen(8080, () => {
  console.log(`Server is UP on port 8080`);
});
