// Create web server with express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set up body-parser
app.use(bodyParser.json());

// Set up comments
const comments = new Map();
comments.set(1, ['Nice post', 'Thanks for sharing']);
comments.set(2, ['Good job']);

// Get all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Get comments by post id
app.get('/posts/:id/comments', (req, res) => {
  const postId = Number(req.params.id);
  const postComments = comments.get(postId);
  res.send(postComments);
});

// Add new comment
app.post('/posts/:id/comments', (req, res) => {
  const postId = Number(req.params.id);
  const newComment = req.body.comment;
  const postComments = comments.get(postId);
  postComments.push(newComment);
  comments.set(postId, postComments);
  res.send(postComments);
});

// Delete comment
app.delete('/posts/:id/comments/:commentId', (req, res) => {
  const postId = Number(req.params.id);
  const commentId = Number(req.params.commentId);
  const postComments = comments.get(postId);
  const filteredComments = postComments.filter((comment, index) => index !== commentId);
  comments.set(postId, filteredComments);
  res.send(filteredComments);
});

// Update comment
app.put('/posts/:id/comments/:commentId', (req, res) => {
  const postId = Number(req.params.id);
  const commentId = Number(req.params.commentId);
  const newComment = req.body.comment;
  const postComments = comments.get(postId);
  postComments[commentId] = newComment;
  comments.set(postId, postComments);
  res.send(postComments);
});

// Listen to port 3000
app.listen(3000, () => {
  console.log('Web server is listening on port 3000!');
});
