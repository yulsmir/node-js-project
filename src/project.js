// JavaScript code
document.addEventListener('DOMContentLoaded', () => {
  // Fetch data from the server
  fetch('/dbtest')
    .then((response) => response.json())
    .then((data) => {
      // Get the container where projects will be displayed
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
});
