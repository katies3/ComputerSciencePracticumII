const Post = require("../model/postModel");
const { connect, disconnect } = require("../config/mongoConfig");
const User = require("../model/userModel");
class PostService {
    constructor() {
        connect();
    }

    //get all posts
    async getAllPosts() {
        //find the post and return specific fields in users schema
        const post = await Post.find()
            .lean()
            .populate("user", "username")
            .populate("comments");
        return post;
    }

    //get a post by id
    async getPostById(postId) {
        //find the post and return specific fields in user schema
        const post = await Post.findOne({ _id: postId }).populate(
            "user",
            "username"
        );
        return post;
    }

    //create a new post
    async createPost(body) {
        //check if the body is empty
        if (!body) {
            throw new Error("Please add your post");
        }
        const { content, user } = body;
        const post = new Post({
            content,
            user
        });

        const userId = user.toString();
        console.log(userId);

        //find the user belongs to this id
        const userFound = await User.findById(userId);
        //save the post
        const postToSave = await post.save();

        //add the post for the user
        userFound.posts.push(postToSave.id);

        //save the user
        await userFound.save();
        return postToSave;
    }

    //update post
    async updatePost(id, body, option) {
        const post = await Post.findByIdAndUpdate(id, body, option);
        return post;
    }

    //delete post
    async deletePostById(id) {
        const post = await Post.findByIdAndDelete(id);
        return { message: `${post.content} has been deleted` };
    }
}

module.exports = new PostService();
