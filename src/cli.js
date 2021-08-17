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

const isPrime = (num) => {
  if (num === 1) return false;

  for (let iter1 = 2; iter1 <= num ** (1 / 2); iter1 += 1) {
    if (num % iter1 === 0) return false;
  }
  return true;
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

export const progresssionGame = () => {
  while (iter !== 3) {
    const numb1 = Math.floor(Math.random() * 1000);
    const inc = Math.floor(Math.random() * 100);
    const length = Math.floor(Math.random() * 6 + 5);
    const pos = Math.floor(Math.random() * length);
    const arr = [];

    for (let iter1 = 0; iter1 < length; iter1 += 1) {
      if (iter1 === pos) {
        arr.push('..');
        res = iter1 * inc + numb1;
      } else arr.push(iter1 * inc + numb1);
    }

    ansStr = (readlineSync.question(`Question: ${arr.join(' ')}\nYour answer: `));
    ans = Number(ansStr);

    if (ans === res) {
      console.log('Correct!');
    } else {
      break;
    }

    iter += 1;
  }

  console.log((iter === 3) ? `Congratulations, ${name}!` : `'${ansStr}' is wrong answer ;(. Correct answer was ${res}.\nLet's try again, ${name}!`);
};

export const primeGame = () => {
  while (iter !== 3) {
    const numb1 = Math.floor(Math.random() * 100 + 1);
    res = numb1;
    ansStr = (readlineSync.question(`Question: ${numb1}\nYour answer: `));

    if (ansStr === (isPrime(numb1) ? 'yes' : 'no')) {
      console.log('Correct!');
    } else {
      break;
    }

    iter += 1;
  }

  console.log((iter === 3) ? `Congratulations, ${name}!` : `'${ansStr}' is wrong answer ;(. Correct answer was ${isPrime(res) ? 'yes' : 'no'}.\nLet's try again, ${name}!`);
};
