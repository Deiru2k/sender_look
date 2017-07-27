import Express from 'express';
import bodyParser from 'body-parser';

import dbMiddleware from 'db';
import routes from 'routes';

const app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(dbMiddleware);
app.use(routes);

app.listen(8080, () => {
  console.log('Server ready, visit http://localhost:8080');
});
