const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey GitHub Copilot, please implement the following routes for comments:
// 1. GET /api/comments/:postId - Retrieve all comments for a specific post.
// 2. POST /api/comments/:postId - Create a new comment for a specific post.
// 3. DELETE /api/comments/:commentId - Delete a specific comment by its ID.