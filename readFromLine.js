const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Please enter your name: ', USERNAME => {
    console.log(`Hello ${USERNAME}`);
    readline.close();
  });