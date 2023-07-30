// Fetch all projects
async function getAllProjects() {
  const statement = 'SELECT * FROM projects';
  const [results] = await pool.execute(statement);
  return results;
}

// Add a project
async function addProject(title, imageLink, projectLink, userId) {
  const statement =
    'INSERT INTO projects (title, image_link, project_link, user_id) VALUES (?, ?, ?, ?)';
  const [results] = await pool.execute(statement, [title, imageLink, projectLink, userId]);
  return results.insertId;
}

// Delete a project
async function deleteProject(projectId) {
  const statement = 'DELETE FROM projects WHERE id = ?';
  await pool.execute(statement, [projectId]);
}

// Update a project
async function updateProject(projectId, title, imageLink, projectLink) {
  const statement = 'UPDATE projects SET title = ?, image_link = ?, project_link = ? WHERE id = ?';
  await pool.execute(statement, [title, imageLink, projectLink, projectId]);
}

export { getAllProjects, addProject, deleteProject, updateProject };
