// import express from 'express';
// const port = 3000;
// const app = express();

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

// Middleware
app.use(express.json());
// app.use((err, req, res) => {
//   res.status(500).json('Some error');
// });

// // Homepage
// app.get('/', async (req, res) => {
//   // const userId = req.params.userId;
//   const statement = 'SELECT id, email FROM users';

//   const results = await getData(res, statement);
//   res.send(200).json({ userId: userId, lists: results });
// });

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
