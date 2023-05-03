const express = require('express');
const cors = require('cors');
const sql = require('mssql');

const app = express();

// Allow cross-origin requests from your React application
app.use(cors());

// Azure SQL Database configuration
const config = {
  user: 'sqladmin',
  password: 'React@Azure',
  server: 'siddhantserver.database.windows.net',
  database: 'SiddhantDatabase',
  options: {
    encrypt: true // For security reasons
  }
};

// Endpoint for retrieving data from Azure SQL Database
app.get('/data', async (req, res) => {
    try {
      const pool = await sql.connect(config);
      const hatsResult = await pool.request().query('SELECT * FROM dbo.Hats');
      const sneakersResult = await pool.request().query('SELECT * FROM dbo.Sneakers');
      const jacketsResult = await pool.request().query('SELECT * FROM dbo.Jackets');
      const watchesResult = await pool.request().query('SELECT * FROM dbo.Watches');
  
      res.json({ hats: hatsResult.recordset, sneakers: sneakersResult.recordset, jackets: jacketsResult.recordset, watches: watchesResult.recordset });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    }
  });
  
// Start the server
app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
