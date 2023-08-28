 const commentCtr = {};
const Comment  = require('../models/comentario');

  commentCtr.createComment= async (req, res) => {
    try {
      const { postId, text } = req.body;
      const post = await Post.findByPk(postId);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      const newComment = await Comment.create({
        text,
        PostId: postId
      });
      res.status(201).json(newComment);
    } catch (error) {
      res.status(500).json({ error: 'Error creating comment' });
    }
  }

module.exports = commentCtr;