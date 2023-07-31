import { showLoginPopup, hideLoginPopup } from './adminController.js';
import {
  getAllProjects,
  addProject,
  deleteProject,
  updateProject,
  displayProjects,
  createButtons,
} from './projectController.js';

document.getElementById('adminBtn').addEventListener('click', showLoginPopup);

// Fetch and display projects when the page loads
window.addEventListener('load', async () => {
  await displayProjects();
  await createButtons();
});

getAllProjects();
displayProjects();

// document.getElementById('addProjectButton').addEventListener('click', () => {
//   const projectName = document.getElementById('projectNameInput').value;
//   const projectDescription = document.getElementById('projectDescriptionInput').value;

//   addProject(projectName, projectDescription);

//   document.getElementById('projectNameInput').value = '';
//   document.getElementById('projectDescriptionInput').value = '';

//   getAllProjects();
// });

// document.getElementById('deleteProjectButton').addEventListener('click', () => {
//   const projectIdToDelete = document.getElementById('projectIdToDelete').value;

//   deleteProject(projectIdToDelete);

//   document.getElementById('projectIdToDelete').value = '';

//   getAllProjects();
// });

// document.getElementById('updateProjectButton').addEventListener('click', () => {
//   const projectIdToUpdate = document.getElementById('projectIdToUpdate').value;
//   const updatedName = document.getElementById('updatedNameInput').value;
//   const updatedDescription = document.getElementById('updatedDescriptionInput').value;

//   updateProject(projectIdToUpdate, updatedName, updatedDescription);

//   document.getElementById('projectIdToUpdate').value = '';
//   document.getElementById('updatedNameInput').value = '';
//   document.getElementById('updatedDescriptionInput').value = '';

//   getAllProjects();
// });
