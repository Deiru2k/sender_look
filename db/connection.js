import Seq from 'sequelize';


export const db = new Seq({
  dialect: 'sqlite',

  storage: './db.sqlite'
});