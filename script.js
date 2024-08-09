// JavaScript: script.js

function generatePrompt() {
  const actionPrompts = ['Design', 'Create'];
  const continuationPrompts = [
    'a mobile app for learning languages.',
    'a logo for a tech startup.',
    "an illustration for a children's book.",
    'a website for an online store.',
    'a marketing campaign for a new product.',
    'a poster for an environmental awareness event.',
  ];

  // Randomly select from action prompts
  const randomAction =
    actionPrompts[Math.floor(Math.random() * actionPrompts.length)];

  // Randomly select from continuation prompts
  const randomContinuation =
    continuationPrompts[Math.floor(Math.random() * continuationPrompts.length)];

  // Combine the prompts
  const randomPrompt = `${randomAction} ${randomContinuation}`;

  // Display the prompt
  document.getElementById('prompt').textContent = randomPrompt;
}
