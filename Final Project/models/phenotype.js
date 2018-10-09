var mongoose = require('mongoose');

var phenotypeSchema = new mongoose.Schema({
  _id: { type: String, unique: true, index: true },
  snpCount: Boolean,
  contents: String
});

module.exports = mongoose.model('phenotype', phenotypeSchema); 