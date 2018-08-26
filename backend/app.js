const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {

  const posts = [
    {
      id: "fagagjajga",
      title: "First server-side post",
      content: "This is coming from the post"
    },
    {
      id: "fdfjdsklaf",
      title: "Second server-side post",
      content: "This is coming from the post"
    }
  ];

  return res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });

});

module.exports = app;
