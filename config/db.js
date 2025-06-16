const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
const path = require('path');

async function connectDB() {
  return open({
    filename: path.join(__dirname, 'init_sqlite.sqlite'),
    driver: sqlite3.Database
  });
}

module.exports = connectDB;
