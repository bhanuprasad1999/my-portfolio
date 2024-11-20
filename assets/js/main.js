

const toggleButton = document.querySelector('.nav-toggle');
const navOptions = document.querySelector('.nav-opts');

toggleButton.addEventListener('click', () => {
  navOptions.classList.toggle('active');
});
