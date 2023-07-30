import { showLoginPopup, hideLoginPopup } from './adminController.js';
import { handleProjects } from './projectController.js';

// Add event listeners or call functions as needed
document.getElementById('adminBtn').addEventListener('click', showLoginPopup);

// Call project-related functions or add more event listeners
handleProjects();
