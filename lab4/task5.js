const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Jak masz na imię?\n', (answer) => {
  console.log(`Witaj ${answer}!`);
  rl.close();
});
