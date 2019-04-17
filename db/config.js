const options = {
  query: (e) => {
    console.log(e.query)
  }
}
const pgp = require('pg-promise')(options);
const setDataBase = () => {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV){
    return pgp({
      database: 'addressbook',
      port: 5432,
      host: 'localhost',
      user: 'yoana',
      password: 'fI9Qd#@@Y6fe',
      dialect: 'postgres'
    })
  }
  else if (process.env.NODE_ENV === 'production'){
    return pgp(process.env.DATABASE_URL)
  }
}
const db = setDataBase();
module.exports = db;