const { Contact } = require('../models/contact');
const { ctrlWrapper } = require('../helpers/index');
const { HttpError } = require('../helpers');

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 2 } = req.query;
  const skip = (page - 1) * limit;
  // eslint-disable-next-line spaced-comment
  const result = await Contact.find({ owner }, '-email', { skip, limit }); //.populate("owner","name email") -  повертає зв'язаний об'єкт, певні поля;
  res.json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  // const result = await Contact.findOne(_id:contactId);
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, 'Server not found');
  }
  res.json(result);
};

const add = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, 'Server not found');
  }
  res.json(result);
};

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const { body } = req.body;
  if (!body) {
    throw HttpError(400, 'missing field favorite');
  }
  const result = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, 'Server not found');
  }
  res.json(result);
};

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
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
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  deleteById: ctrlWrapper(deleteById),
};
