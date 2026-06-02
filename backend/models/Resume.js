const { string, required } = require("joi");
const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    title: {
        type: String,
        required: true
    },

    template: {
        type: String,
        required: true
    },

    resumeData: {
        type: Object,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Resume", resumeSchema);

