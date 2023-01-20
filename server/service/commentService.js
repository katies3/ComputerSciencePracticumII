const Comment = require("../model/commentModel");
const { connect } = require("../config/mongoConfig");
const User = require("../model/userModel");
class CommentService {
    constructor() {
        connect();
    }

    //get all comments
    async getAllComments() {
        //find the post and return specific fields in users schema
        const comment = await Comment.find()
            .lean()
            .populate("user", "username");
        return comment;
    }

    //get a comment by id
    async getCommentById(commenttId) {
        //find the comment and return specific fields in user schema
        const comment = await Comment.findOne({ _id: commenttId }).populate(
            "user",
            "username"
        );
        return comment;
    }

    //create a new comment
    async createComment(body) {
        //check if the body is empty
        if (!body) {
            throw new Error("Please add your comment");
        }

        const { comment, user } = body;
        const commentFromReq = new Comment({
            comment: comment,
            user: user
        });
        console.log("Body! :" + comment);
        console.log("User! :" + user);
        const userId = commentFromReq.user.toString();

        //find the user belongs to this id
        const userFound = await User.findById(userId);

        //save the comment
        const commentToSave = await commentFromReq.save();

        //add the comment for the user
        userFound.comments.push(commentToSave.user);

        //save the user
        await userFound.save();
        return commentToSave;
    }

    //update comment
    async updateComment(id, body, option) {
        const comment = await Comment.findByIdAndUpdate(id, body, option);
        return comment;
    }

    //delete comment
    async deleteCommentById(id) {
        const comment = await Comment.findByIdAndDelete(id);
        return { success: `${comment.content} has been deleted` };
    }
}

module.exports = new CommentService();
