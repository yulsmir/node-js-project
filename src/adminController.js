function showLoginPopup() {
  document.getElementById('popup-1').classList.add('active');
}

function hideLoginPopup() {
  document.getElementById('popup-1').classList.remove('active');
}

export { showLoginPopup, hideLoginPopup };
