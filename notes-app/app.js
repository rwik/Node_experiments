import chalk from 'chalk';
import validator from 'validator';
//import getNotes from 'notes';
//const msg = getNotes();
//console.log(msg);

console.log(chalk.red.inverse(validator.isEmail('abc@gmail.com')));

