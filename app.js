const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Azure App Service!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});