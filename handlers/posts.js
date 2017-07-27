import { renderTemplate } from 'utils';

import Post from 'db/models/Post';

import Posts from 'components/Posts';
import CreatePost from 'components/CreatePost';

export function get(req, res) {
  Post.findAll().then((posts) => {
    const html = renderTemplate(Posts, 'Awesome blog posts', { posts });
    res.send(html);
  })
}

export function post(req, res) {
  Post.build(req.body).save().then(({ id }) => {
    res.redirect(`/posts/${id}`);
  })
}

export function getCreate(req, res) {
  const html = renderTemplate(CreatePost, 'Create new awesome post');
  res.send(html);
}
