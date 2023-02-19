const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/contacts');
const { validateBody } = require('../../madelwares');
const schema = require('../../shemas/contacts');

router.get('/', ctrl.getAll);

router.get('/:contactId', ctrl.getBuId);

router.post('/', validateBody(schema.addSchema), ctrl.add);

router.put('/:contactId', validateBody(schema.addSchema), ctrl.updateBuId);

router.delete('/:contactId', ctrl.deleteBuId);
module.exports = router;
