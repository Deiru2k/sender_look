import React, { Component } from 'react';

export default ({ post }) => (
  <div>
    <a href="/">Back to posts</a>
    <h1>{post.title}</h1>
    <hr />
    <p>
      {post.body}
    </p>
    <hr />
    <b>Created at: {post.createdAt.toLocaleString()}</b>
  </div>
);
