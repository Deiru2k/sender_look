import Seq from 'sequelize';
import { db } from 'db/connection';

const Post = db.define('post', {
  title: Seq.STRING,
  body: Seq.STRING,
});

Post.sync();

export default Post;