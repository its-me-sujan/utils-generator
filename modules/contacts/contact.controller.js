const contactModel = require("./contact.model");

// CRUD Ops
const create = (payload) => {
    return contactModel.create(payload);
};

const list = () => {
    return contactModel.find();
};

const getById = (id) => {
    return contactModel.findOne({_id: id});
};

const update = (id, payload) => {
    return contactModel.updateOne({_id: id}, payload);
};

const remove = (id) => {
    return contactModel.deleteOne({_id: id});
};

module.exports = {create, list, getById, update, remove};