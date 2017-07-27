import Express from 'express';

import * as postsHandlers from 'handlers/posts';
import * as postHandlers from 'handlers/post';

const router = Express.Router();

router.get('/', postsHandlers.get);
router.post('/posts', postsHandlers.post);
router.get('/posts/new', postsHandlers.getCreate);

router.get('/posts/:id', postHandlers.get);

export default router;
