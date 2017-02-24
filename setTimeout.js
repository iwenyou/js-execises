// // 1. Wait 2 seconds
// setTimeout(function() {
//     console.log("first task done!");
// }, 2000);
// // 2. Print out “First task done!”
// // 3. Wait another 2 seconds
// // 4. Print out “Second task done!”
// setTimeout(function() {
//     console.log("second task done!");
// }, 4000);
// // 5. Wait another 2 seconds
// // 6. Print out “Third task done!”
// setTimeout(function() {
//     console.log("third task done!");
// }, 6000);

setTimeout(function() {
    console.log("first task done!");
    setTimeout(function() {
      console.log("second task done!");
        setTimeout(function() {
          console.log("third task done!");
        }, 2000);
    }, 2000);
}, 2000);
