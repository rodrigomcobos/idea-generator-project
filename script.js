// Load prompts from the JSON file
const lodash = require('lodash');
let promptsData;

fetch('prompts.json') // Replace 'prompts.json' with the path to your JSON file
  .then((response) => response.json()) // Parse the response as JSON
  .then((data) => {
    // Process the JSON data
    promptsData = data; // Store the data in the 'promptsData' variable
  })
  .catch((error) => {
    // Handle any errors
    console.error('Error loading prompts:', error); // Log the error
  });

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    header.style.top = '-100px'; // Adjust value to hide the header completely
  } else {
    // Scrolling up
    header.style.top = '0';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile or negative scrolling
});

function generatePrompt() {
  // Function to generate a prompt
  if (!promptsData) {
    // Check if the 'promptsData' variable is defined
    console.error('Prompts data not loaded yet.'); // Log an error if it's not
    return;
  }

  const actionPrompts = ['Design', 'Create']; // Array of action prompts
  const continuationPrompts = promptsData.designPrompts; // Array of continuation prompts

  const randomAction = // Generate a random action and continuation prompt
    actionPrompts[Math.floor(Math.random() * actionPrompts.length)]; // Randomly select an action
  const randomContinuation = // Randomly select a continuation prompt
    continuationPrompts[Math.floor(Math.random() * continuationPrompts.length)]; // Randomly select a continuation
  const randomPrompt = `${randomAction} ${randomContinuation}`; // Combine the action and continuation prompts

  document.getElementById('prompt').textContent = randomPrompt; // Display the prompt

  // Change the background gradient
  changeBackgroundGradient(); // Call the function to change the background
}

function changeBackgroundGradient() {
  // Function to change the background
  const gradients = [
    // Array of gradients
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

  const randomGradient = // Randomly select a gradient
    gradients[Math.floor(Math.random() * gradients.length)]; // Randomly select a gradient
  document.body.style.background = randomGradient.gradient; // Set the background gradient
  document.body.style.backgroundSize = '600% 600%'; // Set the background gradient size
  document.body.style.animation = 'gradientAnimation 10s ease infinite'; // Set the background gradient animation
}

// Close the slide-out menu if clicking outside of it
document.addEventListener('click', function (event) {
  // Add an event listener for the click event
  const slideMenu = document.querySelector('.slide-menu'); // Select the slide menu
  const hamburger = document.querySelector('.hamburger'); // Select the hamburger

  // Check if the click is outside the slide menu and hamburger button
  if (!slideMenu.contains(event.target) && !hamburger.contains(event.target)) {
    // If it is, remove the slide menu
    slideMenu.classList.remove('active'); // Remove the slide menu
  }
});

// Event listener for the hamburger menu
document.querySelector('.hamburger').addEventListener('click', function () {
  // Add an event listener for the click event
  document.querySelector('.slide-menu').classList.toggle('active'); // Toggle the slide menu class on click
});

// Event listener for the close (X) button
document.querySelector('.close-menu').addEventListener('click', function () {
  // Add an event listener for the click event
  document.querySelector('.slide-menu').classList.remove('active'); // Remove the slide menu class on click
});

function getContrastingColor(hexColor) {
  // Function to get the contrasting color from a hex color value
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(1, 3), 16);
  const b = parseInt(hexColor.slice(1, 3), 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000; // Calculate the brightness of the color (0-255)
  return brightness > 128 ? '#000' : '#fff'; // Return the contrasting color (white or black)
}
