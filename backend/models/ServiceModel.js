const mongoose = require('mongoose');

const constructionSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: ['Active', 'Block'],
    default: 'Active',
  },
});

module.exports = mongoose.model('Service', constructionSchema);
