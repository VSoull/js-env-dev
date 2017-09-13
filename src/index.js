import './index.css';
import numeral from 'numeral'; //lib for formating numbers

/* eslint-disable no-console */

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this awesome course!`);

console.log("hello world!");
console.warn("this is a warning!");
console.error("this is a error");
console.info("This is info!");
console.debug("This is a debug!");

console.count();
console.group();
console.groupCollapsed();
console.groupEnd()

count.assert();
cosnole.table();

 var j = 0;
for ( var i = 1; i <= 100; i++) {
 
	if ( (i % 3) == 0 && !(i % 5) == 0 ){
    	console.log("Fizz");
      continue;
    } 
    
    if ((i % 5) == 0 && !(i % 3) == 0) {
    	console.log("Buzz");
      continue;
    } 
  
  if( (i % 3) == 0 && (i % 5) == 0 ) {
  	console.log("FizzBuzz");
    j++;
    console.log("total apparition for FizzBuzz " + j);
    continue;
  }
  
  	console.log(i);
}
