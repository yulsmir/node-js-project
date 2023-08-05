import { createProjectCard } from '../src/projectController.js';

// Function to display projects on the page
async function displayProjects(createCardFunc) {
  try {
    const projectsData = await getData('SELECT * FROM projects', []);

    // Get the "projectsGrid" element
    const projectsGrid = document.getElementById('projectsGrid');

    // Clear existing content in the projectsGrid
    projectsGrid.innerHTML = '';

    // Loop through the projects and create project card elements using the provided function
    projectsData.forEach((project) => {
      const projectCard = createCardFunc(project);
      projectsGrid.appendChild(projectCard);
    });
  } catch (error) {
    console.error(error);
  }
}

// Function to create project card elements
async function createProjectCard(project) {
  const card = document.createElement('div');
  card.classList.add('project-card', 'grid-item');

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

// Add event listener for DOMContentLoaded to fetch and display project cards
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Call the function to display projects, passing the createProjectCard function
    await displayProjects(createProjectCard);
  } catch (error) {
    console.error(error);
  }
});
