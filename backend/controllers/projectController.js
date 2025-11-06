const Project = require('../models/ProjectModel');
const mongoose = require('mongoose');

//get all service
exports.getProjects = async (req, res, next) => {
  const service = await Project.find({}).sort({ createAt: -1 });
  res.status(200).json(service);
};

//get a single service
exports.getProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such service' });
  }

  const service = await Project.findById(id);
  if (!service) {
    return res.status(400).json({ error: 'No such service ' });
  }
  res.status(200).json(service);
};

//post a service
exports.createProject = async (req, res) => {
  const { image, title, location, typeConstruct, sector, description, status } =
    req.body;

  try {
    const service = await Project.create({
      image,
      title,
      location,
      typeConstruct,
      sector,
      description,
      status,
    });
    res.status(200).json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a service

exports.deleteProject = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such service' });
  }

  const service = await Project.findOneAndDelete({ _id: id });

  if (!service) {
    return res.status(400).json({ error: 'No such service ' });
  }
  res.status(200).json(service);
};

//update a service
exports.updateProject = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such service' });
  }

  const service = await Project.findOneAndUpdate(
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
