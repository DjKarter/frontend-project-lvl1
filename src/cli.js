import readlineSync from 'readline-sync';

const cl = (str) => console.log(str);

const helloUser = () => {
  cl('Welcome to Brain Games!');
  const name = readlineSync.question('Your answer: ');
  cl(`Hello, ${name}!`);
};

export default helloUser;
