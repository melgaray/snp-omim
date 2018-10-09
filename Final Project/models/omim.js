var mongoose = require('mongoose');

var omimSchema = new mongoose.Schema({
  _id: { type: String, unique: true, index: true },
  hasPhenotype: Boolean,
  contents: String,
  snpPathogenicCount: String,
  snpContents: String,
  snpCount: String
});

module.exports = mongoose.model('gene', omimSchema); 