const mongoose = require("mongoose");

const question = new mongoose.Schema({
    question: {
        type: String,
    },
    options: [{
        type: String,
    }],
    correct_answers: [{
        type: Number,
    }],
    skill: {
        type: String,
    },
    category: {
        type: String,
    },
    sub_category: {
        type: String,
    },
});

module.exports = mongoose.model("Question", question);