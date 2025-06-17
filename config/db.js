const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

async function getDB() {
  return open({
    filename: path.join(__dirname, '../data/init_sqlite.sqlite'),
    driver: sqlite3.Database
  });
}

module.exports = getDB;
