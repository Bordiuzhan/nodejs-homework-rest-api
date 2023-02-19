const contacts = require('../models/index');
const { ctrlWrapper } = require('../helpers/index');
const { HttpError } = require('../helpers');

const getAll = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getBuId = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  console.log(result);
  if (!result) {
    throw HttpError(404, 'Server not found');
  }
  res.json(result);
};

const add = async (req, res) => {
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

const updateBuId = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.updateBuId(contactId, req.body);
  if (!result) {
    throw HttpError(404, 'Server not found');
  }
  res.json(result);
};

const deleteBuId = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw HttpError(404, 'Server not found');
  }
  res.json({
    message: 'Delete success',
  });
  // res.status(204).send() // 204 Не передає меседж
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getBuId: ctrlWrapper(getBuId),
  add: ctrlWrapper(add),
  updateBuId: ctrlWrapper(updateBuId),
  deleteBuId: ctrlWrapper(deleteBuId),
};
