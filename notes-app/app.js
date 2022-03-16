import chalk from 'chalk';
import validator from 'validator';
import getNotes from 'file:///C:/vault/GitHub/Node_experiments/notes-app/notes.js';
const msg = getNotes();
console.log(msg);

console.log(chalk.red.inverse(validator.isEmail('abc@gmail.com')));

