const express = require('express');
const app = express();

const router = require('./router/auth-router')
app.use("/", router);

app.get('/', (req, res) => {
  res.send('Home!');
});
app.get('/about', (req, res) => {
  res.send('About!');
});
app.get('/services', (req, res) => {
  res.send('Services!');
});
app.get('/portfolio', (req, res) => {
  res.send('Portfolio!');
});
app.get('/contact', (req, res) => {
  res.send('Contact!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});