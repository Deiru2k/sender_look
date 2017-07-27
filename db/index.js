import { db } from 'db/connection';

export default function(req, res, next) {
  req.db = db;
  next();
}
