const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    imageLocations: String,
    summary: String,
    content: String,
    author: String,
    key: String,
    name: String,
    Comment: String,
    url: String,

});

module.exports = mongoose.model("datas",dataSchema);