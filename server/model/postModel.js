const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        upvotes:
        {
            type: Number,
            min: 0
        },
        downvotes:
        {
            type: Number,
            min: 0
        },
        content:
        {
            type: String,
            required: [true, "Post can't be empty"]
        },
        coordinates: Number,
        user:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        comments: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Comment"
        }]
    }, { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
