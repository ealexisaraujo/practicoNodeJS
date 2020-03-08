const express = require('express');
const router = express.Router();
const response = require('../../../network/response');
const controller = require('./controller');

router.get('/', async (req, res) => {
  const lista = await controller.list();
  response.success(req, res, lista, 200);
});

module.exports = router;
