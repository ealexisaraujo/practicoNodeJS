const express = require('express');
const helmet = require('helmet');
const app = express();

const swaggerUi = require('swagger-ui-express');
const { config } = require('../config/index');
const user = require('./components/user/network');

app.use(express.json());
app.use(helmet());

const swaggerDoc = require('./swagger.json');

// Routes
app.use('/api/user', user);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
