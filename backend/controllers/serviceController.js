const Service = require('../models/ServiceModel');
const mongoose = require('mongoose');

//get all service
exports.getServices = async (req, res, next) => {
  const service = await Service.find({}).sort({ createAt: -1 });
  res.status(200).json(service);
};

//get a single service
exports.getService = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such service' });
  }

  const service = await Service.findById(id);
  if (!service) {
    return res.status(400).json({ error: 'No such service ' });
  }
  res.status(200).json(service);
};

//post a service
exports.createService = async (req, res) => {
  const { image, title, description, status } = req.body;

  try {
    const service = await Service.create({ image, title, description, status });
    res.status(200).json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a service

exports.deleteService = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such service' });
  }

  const service = await Service.findOneAndDelete({ _id: id });

  if (!service) {
    return res.status(400).json({ error: 'No such service ' });
  }
  res.status(200).json(service);
};

//update a service
exports.updateService = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such service' });
  }

  const service = await Service.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!service) {
    res.status(404).json({ error: 'No such service' });
  }

  res.status(200).json(service);
};
