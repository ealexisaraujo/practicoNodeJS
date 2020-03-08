const express = require('express');
const router = express.Router();
const response = require('../../../network/response');
const controller = require('./index');

router.get('/', async (req, res) => {
  try {
    const lista = await controller.list();
    response.success(req, res, lista, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await controller.get({ id });
    response.success(req, res, user, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
});

router.post('/', async (req, res) => {
  const { id, name } = req.body;
  try {
    const user = await controller.upsert({ id, name });
    response.success(req, res, user, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
});

module.exports = router;
