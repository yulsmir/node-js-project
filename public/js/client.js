async function fetchAndPopulateProjects() {
  try {
    const response = await fetch('/projects');
    const projects = await response.json();
    const gridContainer = document.querySelector('.grid');

    projects.forEach((project) => {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');

      const link = document.createElement('a');
      link.href = project.project_link;
      link.target = '_blank';

      const image = document.createElement('img');
      image.src = project.image_link;
      image.alt = project.title;

      link.appendChild(image);
      gridItem.appendChild(link);

      const description = document.createElement('p');
      description.textContent = project.title;

      gridItem.appendChild(description);
      gridContainer.appendChild(gridItem);
    });
  } catch (error) {
    console.error('Error fetching project data:', error);
  }
}

fetchAndPopulateProjects();
