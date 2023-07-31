// testDb.js
import { getData } from './db.js';

async function testDatabaseConnection() {
  const statement = 'SELECT * FROM projects';
  const params = [];

  try {
    const projectsData = await getData(statement, params);
    console.log(projectsData);
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
  }
}

testDatabaseConnection();
