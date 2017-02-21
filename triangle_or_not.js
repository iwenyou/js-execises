function isTriangle(a,b,c){
  return  Boolean(a + b > c & a + c > b & b + c > a & a - b < c & a - c < b & b - c < a);
}
