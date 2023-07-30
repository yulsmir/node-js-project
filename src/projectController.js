import { getData } from './db.js';

// Function to create project card elements
function createProjectCard(project) {
  const card = document.createElement('div');
  card.classList.add('project-card');

  const title = document.createElement('h3');
  title.textContent = project.title;

  const image = document.createElement('img');
  image.src = project.image_link;
  image.alt = project.title;

  const link = document.createElement('a');
  link.href = project.project_link;
  link.textContent = 'View Project';

  card.appendChild(title);
  card.appendChild(image);
  card.appendChild(link);

  return card;
}

// Function to display projects on the page
export async function displayProjects() {
  try {
    // Retrieve projects data from the database
    const projectsData = await getData('SELECT * FROM projects', []);

    // Get the "projectsGrid" element
    const projectsGrid = document.getElementById('projectsGrid');

    // Loop through the projects and create project card elements
    projectsData.forEach((project) => {
      const projectCard = createProjectCard(project);
      projectsGrid.appendChild(projectCard);
    });
  } catch (error) {
    console.error(error);
  }
}

async function getAllProjects() {
  const statement = 'SELECT * FROM projects';
  const [results] = await pool.execute(statement);
  console.log(results);
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
