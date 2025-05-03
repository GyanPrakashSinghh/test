// backend/db.js
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/employees.db");

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS employee (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      address TEXT,
      email TEXT,
      mobile TEXT,
      post TEXT,
      bank_account TEXT,
      pf_number TEXT,
      photo TEXT
    )`
  );
});

module.exports = db;
