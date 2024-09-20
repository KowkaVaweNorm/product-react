const fs = require('fs');
const path = require('path');
const express = require('express');
const jsonGraphqlExpress = require('json-graphql-server/node');
const cors = require('cors');
const PORT = 8002;
const app = express();
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json')));
// const logFilePath = path.resolve(__dirname, 'logs.js');
const corsOptions = {
  origin: 'http://localhost:5173', // Укажите ваш фронтенд домен
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json()); // Для корректной работы с JSON в теле запроса
// app.use((req, res, next) => {
//   const logEntry = {
//     timestamp: new Date().toISOString(),
//     method: req.method,
//     url: req.url,
//     body: req.body,
//     headers: req.headers,
//   };

//   fs.appendFileSync(logFilePath, `\n${JSON.stringify(logEntry, null, 2)},`);

//   next();
// });

app.use('/', jsonGraphqlExpress.default(data));
app.listen(PORT, () => {
  console.log('GraphQL server is running on 8002 port');
});
