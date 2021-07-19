const mongoose = require('mongoose');

const Comment = new mongoose.Schema({
	user: {type:String, required: [true, "User is required"]},
	message: {type:String, required: [true, "Message is required"]}
})

const PostSchema = new mongoose.Schema({
	user: {type: String, required: [true, "User is required"], minlength: [2, "User must be at least 2 characters long"]},
	message: {type: String, required: [true, "Message is required"]},
	comments: [Comment]
}, {timestamps: true});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;