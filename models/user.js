//Model for user account

const mongoose = require("mongoose");
const user = new mongoose.Schema({
    username: String,
    password: String,
    role: String,
    score:[{
        skill: {
            type: String,
        },
        category: {
            type: String,
        },
        sub_category: {
            type: String,
        },
        points: {
            type: Number,
        }
    }]
});

module.exports = mongoose.model("User", user);