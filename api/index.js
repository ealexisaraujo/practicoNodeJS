const express = require('express');
const helmet = require('helmet');
const app = express();

const { config } = require('../config/index');
const user = require('./components/user/network');

app.use(express.json());
app.use(helmet());

app.use('/api/user', user);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
