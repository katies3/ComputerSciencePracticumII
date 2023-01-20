const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const { connect, disconnect } = require("../config/mongoConfig");

class UserService {
    constructor() {
        connect();
    }

    //get all users
    async getAllUser() {
        const user = await User.find()
            .select("-password")
            .populate("posts", "content comments");
        return user;
    }

    //get a user by id
    async getUserById(userId) {
        const user = await User.findOne({ _id: userId })
            .select("-password")
            .populate("posts", "content comments");
        return user;
    }

    //create a new user
    async createUser(body) {
        const { username, password, password2 } = body;

        //check if the username & password are provided
        if (!username || !password) {
            throw new Error("Please provide username and pasword");
        }

        //Check if user exists
        const userExists = await User.findOne({ username });
        if (userExists) {
            throw new Error(`${userExists.username} already exists`);
        }

        //Check if passwords match
        if (!password || !password2) {
            throw new Error("Password does not match");
        }

        const user = new User(body);
        user.password = await bcrypt.hash(user.password, 10);
        const userToSave = await user.save();
        return userToSave;
    }

    //update a user
    async updateUser(id, body, option) {
        const user = await User.findByIdAndUpdate(id, body, option);
        return { message: `${user.username} is successfull updated` };
    }

    //delete a user
    async deleteUserById(userId) {
        const user = await User.findByIdAndDelete(userId);
        return { message: `${user.username} has been deleted` };
    }

    //Authenticate a user
    async loginUser(username, password) {
        const user = await User.findOne({ username });

        if (!username || !password) {
            throw new Error("Please provide username and pasword");
        }

        if (user && (await bcrypt.compare(password, user.password))) {
            return user;
        } else {
            throw new Error("Invalid credentials");
        }
    }
}

module.exports = new UserService();
