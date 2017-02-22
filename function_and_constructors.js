//Create a function that accepts two numbers as parameters and returns their sum.
// var sumTwo = function(a,b){
//   return a + b;
// };
//
// console.log(sumTwo(3,4));


//Create a function that accepts an array as an argument and returns the average. (Basically the same as before, but wrap that code in a function and demonstrate its usage.)
// var calAvg = function(arr){
//   var sum = 0;
//   for(var i = 0; i < arr.length; i++){
//     sum = arr[i] + sum;
//   }
//   return sum/arr.length;
// };


//Take out one object from your array of book objects and assign it to a new variable called “book”. Add a function “printDetails” that console logs all the book’s information.
// var book = {title: "three body problem", auther: "Cixin Liu", isbn: "unknown", pages: 396, published_at: "2007"};
// var printDetails = function(obj){
//   console.log("title: " + obj.title);
//   console.log("auther: " + obj.auther);
//   console.log("isbn: " + obj.isbn);
//   console.log("pages: " + obj.pages);
//   console.log("published_at: " + obj.published_at);
// };
// printDetails(book);


//Bonus: Create a object constructor for book. Use it to create a book like:
// var newBook =  function(name,auther,pages,isbn,years){
//   var book = {name: name, auther: auther, pages: pages, isbn: isbn, years: years};
//   console.log(book);
// };
// var mobyDick = newBook("Moby Dick", "Herman Melville", 704, "0553213113", "1851");
