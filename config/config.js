require('dotenv').config();
module.exports = {
  "development": {
    "username": DB_USER="yeonjeong",
    "password": DB_PW="password",
    "database": DB_NAME="fortune",
    "host": DB_HOST="34.64.111.16",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": DB_USER="yeonjeong",
    "password": DB_PW="password",
    "database": DB_NAME="fortune",
    "host": DB_HOST="34.64.111.16",
    "dialect": "mysql"
  }
}