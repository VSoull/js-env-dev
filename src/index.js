import './index.css';
import numeral from 'numeral'; //lib for formating numbers

const courseValue = numeral(1000).format('$0,0.00');
debugger;
console.log(`I would pay ${courseValue} for this awesome course!`);