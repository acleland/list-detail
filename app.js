// import functions and grab DOM elements
import { dinosaurs } from './dino-data.js';
import { renderDino } from './utils.js';
const main = document.querySelector('main');

// Create a container for my dinosaurs
const dinoContainer = document.createElement('div');
dinoContainer.setAttribute('id', 'dino-container');
dinoContainer.classList.add('container');
main.append(dinoContainer);

// Pull dino info from dino-data.js and add them to my container
for (let dino of dinosaurs) {
    dinoContainer.append(renderDino(dino));
}

