import { dinosaurs } from '../dino-data.js';
import { findById, renderDinoDetail } from '../utils.js';

const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const dino = findById(id, dinosaurs);
const main = document.querySelector('main');

const dinoDetail = renderDinoDetail(dino);
main.append(dinoDetail);

