const express = require('express');
const myModule = require('./my-module');
const { readFile } = require('fs').promises;

const app = express();

app.get('/', async (request, response) => {
  response.send(await readFile('./home.html', 'utf-8'));
  console.log(myModule);
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`App available on http://localhost:3000`)
);
