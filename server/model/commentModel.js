const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        comment: {
            type: String,
            required: [true, "Comment can't be empty"]
        },
        upvotes: {
            type: String,
            min: 0
        },
        downvotes: {
            type: Number,
            min: 0
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
