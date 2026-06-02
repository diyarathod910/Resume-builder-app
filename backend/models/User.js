const { string, required } = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    customUserId: {
        type: Number,
        unique: true
    },

    name: {
        type: String,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    image: {
        type: String
    },
    password: {
        type: String,
        default: null
    },

}, {
    timestamps: true
});


module.exports = mongoose.model("user", userSchema);

