

const strContains = (str, substr) => {
 
  let reklamowka = substr.searchString;
  console.log(str)
  return str.toLowerCase().includes(reklamowka.toLowerCase())
};
//In the context of your code, str is card.title and substr (the substring you're checking for) is searchString.

// import strContains from './strContains.js';

// let str = "Hello, World!";
// let substr = "World";

// console.log(strContains(str, substr)); // This will output: true

export default strContains;