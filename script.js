
import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const imageDisplay = document.getElementById('imageDisplay');
const valentineQuestion = document.getElementById('valentineQuestion');
const responseButtons = document.getElementById('responseButtons');
const viewMessageButton = document.getElementById('viewMessageButton');

// Love song audio
const audio = new Audio("Glue-Song.mp3");
yesButton.addEventListener("click", () => {
    audio.play();
});

let noClickCount = 0;
let buttonHeight = 48; // Starting height in pixels
let buttonWidth = 80;
let fontSize = 20; // Starting font size in pixels
const imagePaths = [
  "./image1.gif",
  "./image2.gif",
  "./image3.gif",
  "./image4.gif",
  "./image5.gif",
  "./image6.gif",
  "./image7.gif"
];

noButton.addEventListener('click', function() {
  if (noClickCount < 5) {
    noClickCount++;
    imageDisplay.src = imagePaths[noClickCount];
    buttonHeight += 35; // Increase height by 5px on each click
    buttonWidth += 35;
    fontSize += 25; // Increase font size by 1px on each click
    yesButton.style.height = `${buttonHeight}px`; // Update button height
    yesButton.style.width = `${buttonWidth}px`;
    yesButton.style.fontSize = `${fontSize}px`; // Update font size
    if (noClickCount < 6) {
        noButton.textContent = [
            "No", "Are you sure?", "Pretty please?", 
            "Think about it...", "You're making me sad :(", 
            "I'm might just cry..."
        ][noClickCount];
    }
  }
});

yesButton.addEventListener('click', () => {
  imageDisplay.src = './image7.gif'; // Change to image7.gif
  valentineQuestion.textContent = "Yayyy!! :3"; // Change the question text
  responseButtons.style.display = 'none'; // Hide both buttons
  confetti(); // Trigger confetti animation


    // Show the "View Message" button
    viewMessageButton.classList.remove('hidden');
});

viewMessageButton.addEventListener('click', () => {
    messagePopup.classList.remove('hidden');
});

closeMessageButton.addEventListener('click', () => {
    messagePopup.classList.add('hidden');
});

// Function to create floating hearts
function createFloatingHearts() {
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 100}%`;
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
}