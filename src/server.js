'use strict';

import dotenv from 'dotenv/config';
import express from 'express';
import path from 'path';
import mysqlPromise from 'mysql2/promise.js';

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use('/', router);

// Create a MySQL connection pool
const pool = mysqlPromise.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  rowsAsArray: true,
});

// Prepare the connection
async function prepareConnection() {
  const connection = await pool.getConnection();
  return connection;
}

// Execute a prepared statement
async function executeStatement(connection, statement, params) {
  const preparedStatement = await connection.prepare(statement);
  const [results] = await preparedStatement.execute(params);
  return results;
}

// Unprepare the connection
async function unprepareConnection(connection) {
  connection.release();
}

// Handle errors
function handleError(res, error) {
  res.status(404).json({ error: error });
}

// Get data from the database
async function getData(res, statement, params) {
  const connection = await prepareConnection();
  try {
    const results = await executeStatement(connection, statement, params);
    return results;
  } catch (error) {
    handleError(res, error);
  } finally {
    await unprepareConnection(connection);
  }
}

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/dbtest', async (req, res, data) => {
  // const userId = req.params.userId;
  const statementUsers = 'SELECT id, email FROM users';
  const statementProjects = 'SELECT title, image_link, project_link, user_id FROM projects';

  // const results = await getData(res, statementUsers);
  const results = await getData(res, statementProjects);

  // res.send(200);
  res.json(results);
  console.log(results);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
