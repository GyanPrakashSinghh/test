// backend/server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// API to get all employees
app.get("/api/employees", (req, res) => {
  const query = "SELECT * FROM employee";
  db.all(query, (err, rows) => {
    if (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
    res.status(200).json(rows);
  });
});

// API to add a new employee
app.post("/api/employees", (req, res) => {
  const { name, address, email, mobile, post, bank_account, pf_number, photo } = req.body;

  const query = `INSERT INTO employee (name, address, email, mobile, post, bank_account, pf_number, photo) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  db.run(query, [name, address, email, mobile, post, bank_account, pf_number, photo], function (err) {
    if (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
    res.status(201).json({ success: true, id: this.lastID });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
