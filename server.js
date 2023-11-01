const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
