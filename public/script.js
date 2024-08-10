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
    'a user interface for a fitness tracker.',
    'a brand identity for a coffee shop.',
    'an animated short for a school project.',
    'a brochure for a travel agency.',
    'a packaging design for a new beverage.',
    'a book cover for a science fiction novel.',
    'a concept art for a video game.',
    'a social media campaign for a charity.',
    'an educational website for children.',
    'a mobile game interface for casual gamers.',
    'an infographic about climate change.',
    'a promotional video for a startup company.',
    'a website redesign for a local business.',
    'a set of icons for a productivity app.',
    'a greeting card design for a special occasion.',
    'an interactive map for a tourist attraction.',
    'a visual identity for a music festival.',
    'a flyer for a community event.',
    'a digital art piece for a gallery exhibition.',
    'a calendar design for a nonprofit organization.',
    'a website for an online course platform.',
    'a custom t-shirt design for a sports team.',
    'a landing page for a new tech gadget.',
    'an e-book cover for a self-help guide.',
    'a storyboard for an animated series.',
    'a set of stickers for a mobile app.',
    'a presentation template for a business pitch.',
    'a visual campaign for a new product launch.',
    'a design for a unique piece of merchandise.',
    'a virtual reality experience for a museum.',
    'a mobile app interface for meditation and wellness.',
    'an educational poster for a school science project.',
    "a set of illustrations for a children's storybook.",
    'a website for a freelance portfolio.',
    'a book cover design for a mystery novel.',
  ];

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

  // Optionally update the content box background based on gradient
  // document.querySelector('.content-box').style.backgroundColor = getContrastingColor(randomGradient.primary);
}

function getContrastingColor(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(1, 3), 16);
  const b = parseInt(hexColor.slice(1, 3), 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? '#000' : '#fff';
}
