const mongoose = require('mongoose');

const candidateDetailsSchema = new mongoose.Schema({
   
});
const candidateDetails = mongoose.model('candidateDetails', candidateDetailsSchema);
module.exports = candidateDetails;