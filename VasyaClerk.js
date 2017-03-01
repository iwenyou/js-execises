

function tickets(peopleInLine){
  // ...
  cash = 0;

  for(var i = 0; i < peopleInLine.length; i++){
    if(peopleInLine[i] - 25 <= cash){
      cash = cash - (peopleInLine[i] - 25);
      console.log(cash);
    }else if(peopleInLine[i] - 25 > cash){
      console.log("NO");

      return ('NO');
    }
  }
  console.log("YES");

  return ('YES');

}

tickets([25, 25, 50, 50]);
