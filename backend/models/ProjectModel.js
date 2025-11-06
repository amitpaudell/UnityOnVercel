const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  typeConstruct: {
    type: String,
    enum: [
      'Residental Construction',
      'Commercial Construction',
      'Industrial Construction',
      'Infrastructure Construction',
    ],
  },
  sector: {
    type: String,
    enum: ['Health', 'Education', 'Corporate'],
  },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: ['Active', 'Block'],
    default: 'Active',
  },
});

module.exports = mongoose.model('Project', projectSchema);
