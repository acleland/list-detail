// import functions and grab DOM elements
import { dinosaurs } from './dino-data.js';
import { renderDino } from './utils.js';

const main = document.querySelector('main');
const dinoContainer = document.createElement('div');
dinoContainer.setAttribute('id', 'dino-container');
dinoContainer.classList.add('container');
main.append(dinoContainer);

for (let dino of dinosaurs) {
    dinoContainer.append(renderDino(dino));
}

