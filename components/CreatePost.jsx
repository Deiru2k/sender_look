import React from 'react';

export default () => (
  <div>
    <a href="/">Back to posts</a>
    <form action="/posts" method="POST">
      <input type="text" name="title" /><br />
      <textarea cols="60" rows="15" name="body" /><br />
      <button type="submit">Create new post</button>
    </form>
  </div>
);
