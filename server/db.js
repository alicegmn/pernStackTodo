const Pool = require("pg").Pool;

const pool = new Pool({
  user: "user123",
  password: "password123",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
