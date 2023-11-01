// src/main.js
import { incrementar, reset } from '../src/counter.js';

const countElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');

incrementButton.addEventListener('click', () => {
  countElement.textContent = incrementar();
});

resetButton.addEventListener('click', () => {
  countElement.textContent = reset();
});
