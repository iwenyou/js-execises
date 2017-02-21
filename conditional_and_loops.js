// Do a NASA countdown in the console. It should output each number starting at 10 all the way down to 1, then output “BLASTOFF!” Hint: use a loop.
//
// var i = 10;
//   for (i; i > 0; i -= 1){
//     console.log(i);
//   }
// console.log("BLASTOFF!");
//Write code that will print each number from this array (use a loop):
// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
// for (var i = 0; i < numbers.length; i++){
//   console.log(numbers[i]);
// }
//Write code that will find the average of the above array “numbers”.
// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
// var total = 0;
// for(var i = 0; i < numbers.length; i++){
//   total = total + numbers[i];
// }
// console.log(total/numbers.length);
//Implement FizzBuzz in JavaScript. Write a program that prints the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
// for(var i = 1; i < 101; i++){
//   if (i % 3 === 0 & i % 5 === 0) {
//     console.log("FizzBuzz");
//   }
//   else if (i % 3 === 0){
//     console.log("fizz");
//   }
//   else if(i % 5 === 0){
//     console.log("buzz");
//   }
//   else{
//     console.log(i);
//   }
// }
//Recreate the guess a number game between 1 and 100. That is, the computer chooses a random number between 1 and 100, and tells the user to pick higher or lower. The user has 10 tries. Use the prompt function to help you with this. (NOTE: prompt will return a string, and you may need to "cast" it into a number.)
var num = Math.floor(Math.random()*100)
