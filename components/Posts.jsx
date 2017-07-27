import React from 'react';

export default ({ posts }) => (
  <div>
    <a href="/posts/new">New post</a><br />
    <ul>
      {posts.map(({ id, title, body }) => (
        <li key={id}>
          <h1>
            <a href={`/posts/${id}`}>{title}</a>&nbsp;
            <small>{body.slice(0, 50)}...</small>
          </h1>
        </li>
      ))}
    </ul>
  </div>
);
