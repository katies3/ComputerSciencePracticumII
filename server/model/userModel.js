const mongoose = require('mongoose');

//create schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'User is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
},
    { timestamps: true }
);

//export mongoose
module.exports = mongoose.model('User', UserSchema);