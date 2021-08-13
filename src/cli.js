import readlineSync from 'readline-sync';

let name = '';
let ans = '';
let temp = '';

export const helloUser = () => {
  console.log('Welcome to Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let iter = 0;

  while (iter !== 3) {
    const rand = Math.floor(Math.random() * 100);
     ans = readlineSync.question(`Question: ${rand}\nYour answer: `);

    if (ans === (rand % 2 ? 'no' : 'yes')) {
      console.log('Correct!');
    } else {
      temp = rand % 2 ? 'no' : 'yes';
      break;
    }
    iter += 1;
  }

  console.log((iter === 3) ? `Congratulations, ${name}` : `'${ans}' is wrong answer ;(. Correct answer was ${temp}.\nLet's try again, ${name}!`);
};
