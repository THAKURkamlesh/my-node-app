const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Docker HUB server are successfully deployed using jenkins pipeline ');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:$`);
});
