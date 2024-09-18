const fs = require('fs');
const path = require('path');
const express = require('express');
const jsonGraphqlExpress = require('json-graphql-server/node');

const PORT = 8002;
const app = express();
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json')));

app.use('/', jsonGraphqlExpress.default(data));
app.listen(PORT, () => {
  console.log('GraphQL server is running on 8002 port');
});
