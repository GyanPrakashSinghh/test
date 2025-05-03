const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const app = express();
const db = new sqlite3.Database("./database.db");

app.use(cors());
app.use(express.json());

// Employee endpoint to get all employees
app.get("/api/employees", (req, res) => {
  db.all("SELECT * FROM employee", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
    res.json(rows);
  });
});

// Start the server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
