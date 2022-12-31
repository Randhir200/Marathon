// Brute Force
// Not  work properly
// let energy =0;
// let dis=0;
// for(let el of matrix){
//     energy+=el[0]
//     dis+=el[1]
// }

// if(energy<dis){
//     console.log("No starting points");
//     return;
// }  if the all the sum of energy is lesser then all the sum of power so simply we have to return ("No starting points")
let q = [];
let engSum = 0;
let distSum = 0;
let ind = 0;
function marathon(eng, dist) {
  engSum += eng;
  distSum += dist;
  if (engSum > distSum) {
    q.push(ind);
  } else {
    q.push('#');
    engSum = 0;
    distSum = 0;
  }
  ind++;
}
marathon(2, 5);
marathon(9, 3);
marathon(1, 4);
marathon(3, 5);

console.log(q);
// let q = ["#",1,2,"#",4,5,6,"#",8];
let c = 0;
let len = q.length;
let front = 0; // fornt<
while (front < len) {
  let n = q.length; // 2
  let pNum = c + 1; // 1
  if (q[c] == '#') {
    // true
    while (q.length != n - pNum) {
      //2!=1
      q.shift(); // [#]
    }
    c = 0; // 0
  } else {
    c++;
  }
  front++;
}
// console.log(3%4);
if (q.length == 0) {
  console.log('No Starting Point');
} else {
  console.log(q[0]);
}
