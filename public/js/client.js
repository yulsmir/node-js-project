// client.js

async function createGridItem(item) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');

  const link = document.createElement('a');
  link.href = item[2];
  link.target = '_blank';

  const image = document.createElement('img');
  image.src = item[1];
  image.alt = 'project-image';

  link.appendChild(image);
  gridItem.appendChild(link);

  const itemInfo = document.createElement('div');
  itemInfo.classList.add('item-info');

  const paragraph = document.createElement('p');
  paragraph.textContent = item[0];

  itemInfo.appendChild(paragraph);
  gridItem.appendChild(itemInfo);

  return gridItem;
}

async function populateGrid(data) {
  const gridContainer = document.getElementById('gridContainer');

  data.forEach((item) => {
    const gridItem = createGridItem(item);
    gridContainer.appendChild(gridItem);
  });
}

async function fetchData() {
  try {
    const response = await fetch('/dbtest');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    populateGrid(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the fetchData function when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  fetchData();
});
