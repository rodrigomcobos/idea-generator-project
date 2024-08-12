// Load prompts from the JSON file
let promptsData;

fetch('prompts.json')
  .then((response) => response.json())
  .then((data) => {
    promptsData = data;
  })
  .catch((error) => {
    console.error('Error loading prompts:', error);
  });

function generatePrompt() {
  if (!promptsData) {
    console.error('Prompts data not loaded yet.');
    return;
  }

  const actionPrompts = ['Design', 'Create'];
  const continuationPrompts = promptsData.designPrompts;

  const randomAction =
    actionPrompts[Math.floor(Math.random() * actionPrompts.length)];
  const randomContinuation =
    continuationPrompts[Math.floor(Math.random() * continuationPrompts.length)];
  const randomPrompt = `${randomAction} ${randomContinuation}`;

  document.getElementById('prompt').textContent = randomPrompt;

  // Change the background gradient
  changeBackgroundGradient();
}

function changeBackgroundGradient() {
  const gradients = [
    {
      gradient: 'radial-gradient(circle, #ff7e5f, #feb47b)',
      primary: '#ff7e5f',
    },
    {
      gradient: 'radial-gradient(circle, #6a11cb, #2575fc)',
      primary: '#6a11cb',
    },
    {
      gradient: 'radial-gradient(circle, #f7971e, #ffd200)',
      primary: '#f7971e',
    },
    {
      gradient: 'radial-gradient(circle, #00c6ff, #0072ff)',
      primary: '#00c6ff',
    },
    {
      gradient: 'radial-gradient(circle, #f953c6, #b91d73)',
      primary: '#f953c6',
    },
    {
      gradient: 'radial-gradient(circle, #34e89e, #0f3443)',
      primary: '#34e89e',
    },
  ];

  const randomGradient =
    gradients[Math.floor(Math.random() * gradients.length)];
  document.body.style.background = randomGradient.gradient;
  document.body.style.backgroundSize = '600% 600%';
  document.body.style.animation = 'gradientAnimation 10s ease infinite';
}

// Close the slide-out menu if clicking outside of it
document.addEventListener('click', function (event) {
  const slideMenu = document.querySelector('.slide-menu');
  const hamburger = document.querySelector('.hamburger');

  // Check if the click is outside the slide menu and hamburger button
  if (!slideMenu.contains(event.target) && !hamburger.contains(event.target)) {
    slideMenu.classList.remove('active');
  }
});

// Event listener for the hamburger menu
document.querySelector('.hamburger').addEventListener('click', function () {
  document.querySelector('.slide-menu').classList.toggle('active');
});

// Event listener for the close (X) button
document.querySelector('.close-menu').addEventListener('click', function () {
  document.querySelector('.slide-menu').classList.remove('active');
});

function getContrastingColor(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(1, 3), 16);
  const b = parseInt(hexColor.slice(1, 3), 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? '#000' : '#fff';
}
