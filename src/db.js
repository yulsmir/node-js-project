import mysqlPromise from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

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
  res.send({ error: 'Internal Server Error' });
}

// Get data from the database
async function getData(statement, params) {
  const connection = await prepareConnection();
  try {
    const [results] = await executeStatement(connection, statement, params);
    console.log('Retrieved data:', [results]);
    return [results];
  } catch (error) {
    // Instead of using res.send, throw the error
    throw new Error('Internal Server Error');
  } finally {
    await unprepareConnection(connection);
  }
}

export { getData };
