const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/contacts');

router.get('/', ctrl.getAll);

router.get('/:contactId', ctrl.getBuId);

router.post('/', ctrl.add);

router.put('/:contactId', ctrl.updateBuId);

router.delete('/:contactId', ctrl.deleteBuId);
module.exports = router;
