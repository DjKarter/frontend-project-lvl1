import readlineSync from 'readline-sync';

let name = '';
let ans = '';
let temp = '';
let iter;
let ansStr;
let res;

const NOD = (num1, num2) => {
  let temp1 = num1; let
temp2 = num2;
  while (temp1 % temp2 !== 0) {
        [temp1, temp2] = [temp2, (temp1 % temp2)];
  }

  return temp2;
};

export const gameStart = (rules = 'gg') => {
  console.log('Welcome to Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  if (rules === 'gg') {
    return;
  }

  console.log(rules);
  iter = 0;
};

export const evenGame = () => {
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

export const calcGame = () => {
  while (iter !== 3) {
    const numb1 = Math.floor(Math.random() * 100);
    const numb2 = Math.floor(Math.random() * 100);
    const sign = Math.floor(Math.random() * 3);
    const tempSign = sign === 1 ? '-' : '*';
    const operator = (sign % 3) ? '+' : (tempSign);

    ansStr = (readlineSync.question(`Question: ${numb1} ${operator} ${numb2}\nYour answer: `));
    ans = Number(ansStr);

    switch (operator) {
      case '+':
        res = numb1 + numb2;
        break;
      case '-':
        res = numb1 - numb2;
        break;
      case '*':
        res = numb1 * numb2;
        break;
      default:
        break;
    }

    if (ans === res) {
      console.log('Correct!');
    } else {
      break;
    }

    iter += 1;
  }

  console.log((iter === 3) ? `Congratulations, ${name}!` : `'${ansStr}' is wrong answer ;(. Correct answer was ${res}.\nLet's try again, ${name}!`);
};

export const nodGame = () => {
  while (iter !== 3) {
    const numb1 = Math.floor(Math.random() * 100);
    const numb2 = Math.floor(Math.random() * 100);

    ansStr = (readlineSync.question(`Question: ${numb1} ${numb2}\nYour answer: `));
    ans = Number(ansStr);
    res = NOD(numb1, numb2);

    if (ans === res) {
      console.log('Correct!');
    } else {
      break;
    }

    iter += 1;
  }

  console.log((iter === 3) ? `Congratulations, ${name}!` : `'${ansStr}' is wrong answer ;(. Correct answer was ${res}.\nLet's try again, ${name}!`);
};
