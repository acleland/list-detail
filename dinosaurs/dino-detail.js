import { dinosaurs } from '../dino-data.js';
import { findById } from '../utils.js';

const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const dino = findById(id, dinosaurs);

console.log('id: ', id);
console.log(dinosaurs);
console.log(dino);

function createDataList (dino) {
    const ul = document.createElement('ul');
    
    let li1 = document.createElement('li');
    li1.textContent = `Time period: ${dino.period}`;
    ul.append(li1);

    let li2 = document.createElement('li');
    li2.textContent = `Suborder: ${dino.suborder}`;
    ul.append(li2);

    let li3 = document.createElement('li');
    li3.textContent = `Length: ${dino.length} ft`;
    ul.append(li3);
    
    return ul;
}