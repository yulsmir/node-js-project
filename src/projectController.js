import { getData } from './db.js';

// Function to create project card elements
async function createProjectCard(project) {
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
async function displayProjects() {
  try {
    const projectsData = await getData('SELECT * FROM projects', []);

    // Get the "projectsGrid" element
    const projectsGrid = document.getElementById('projectsGrid');

    // Loop through the projects and create project card elements
    projectsData.forEach((project) => {
      const projectCard = createProjectCard(project);
      projectsGrid.appendChild(projectCard);

      // Add buttons
      projectCard.appendChild(buttonsDiv); // Append buttons to the project card
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

// Function to create buttons for each project
const createButtons = () => {
  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'buttons';

  const deleteBtn = document.createElement('input');
  deleteBtn.type = 'button';
  deleteBtn.className = 'btn btn-delete';
  deleteBtn.value = 'Delete';

  deleteBtn.addEventListener('click', async (e) => {
    const selectedProject = e.target.closest('.project-card');
    await deleteProject(selectedProject.id);
    selectedProject.remove();
  });

  // Manage buttons visibility with admin checkbox
  adminCheckbox.addEventListener('change', () => {
    if (adminCheckbox.checked) {
      deleteBtn.style.display = 'inline-block';
    } else {
      deleteBtn.style.display = 'none';
    }
  });

  buttonsDiv.appendChild(deleteBtn);

  return buttonsDiv;
};

// Export the createButtons function
export { getAllProjects, addProject, deleteProject, updateProject, createButtons };
