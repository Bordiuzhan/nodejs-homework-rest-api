const contacts = require('../../models/index');
const { HttpError } = require('../../helpers/index');
const Joi = require('joi');
const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
});

const getAll = async (req, res, next) => {
  try {
    const result = await contacts.listContacts();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getBuId = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.getContactById(contactId);
    console.log(result);
    if (!result) {
      throw HttpError(404, 'Server not found');
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const result = await contacts.addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const updateBuId = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const { contactId } = req.params;
    const result = await contacts.updateBuId(contactId, req.body);
    if (!result) {
      throw HttpError(404, 'Server not found');
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const deleteBuId = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.removeContact(contactId);
    if (!result) {
      throw HttpError(404, 'Server not found');
    }
    res.json({
      message: 'Delete success',
    });
    // res.status(204).send() // 204 Не передає меседж
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAll,
  getBuId,
  add,
  updateBuId,
  deleteBuId,
};
