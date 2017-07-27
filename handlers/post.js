import Post from 'db/models/Post';

import { renderTemplate } from 'utils';

import PostComponent from 'components/Post';

export function get(req, res) {
  const id = req.params.id;
  Post.findById(id).then((post) => {
    const html = renderTemplate(PostComponent, `${post.title} - My Awesome Blog`, { post });
    res.send(html)
  });
}
