const mongoose = require("mongoose");

const data1Schema = new mongoose.Schema({
    imageLocations: String,
    summary: String,
    content: String,
    author: String,
    key: String,
    name: String,
    Comment: String,
    url: String,

});

module.exports = mongoose.model("datas1",data1Schema);