const { model, Schema } = require('mongoose');

const contractModel = model("contracts", new Schema({
  address: String,
  abi: Object
}, { collection: "contracts" }));

module.exports = { contractModel };