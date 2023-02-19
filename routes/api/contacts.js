const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/contacts');
const { validateBody } = require('../../madelwares');
const schema = require('../../shemas/contacts');

router.get('/', ctrl.getAll);

router.get('/:contactId', ctrl.getById);

router.post('/', validateBody(schema.addSchema), ctrl.add);

router.put('/:contactId', validateBody(schema.updateSchema), ctrl.updateById);

router.delete('/:contactId', ctrl.deleteById);
module.exports = router;
