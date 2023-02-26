const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/contacts');
const { validateBody, isValidId } = require('../../madelwares');
const { schema } = require('../../models/contact');

router.get('/', ctrl.getAll);

router.get('/:contactId', isValidId, ctrl.getById);

router.post('/', validateBody(schema.addSchema), ctrl.add);

// router.put('/:contactId',isValidId, validateBody(schema.updateSchema), ctrl.updateById);

// router.delete('/:contactId',isValidId, ctrl.deleteById);
module.exports = router;
