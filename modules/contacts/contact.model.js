const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {type: String, required:true},
    phone: Number,
    address: String,
    password: String,
});

// C of Contact capital as it is plural 
module.exports = mongoose.model("Contact", contactSchema);