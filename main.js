// Brute Force
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
marathon(1,1)
marathon(1,1)


console.log(q);
// let q = ["#",1,2,"#",4,5,6,"#",8];
let c = 0;
let len = q.length;
let front = 0; // fornt<
while(front<len) {
    let n = q.length; // 2
    let pNum = c + 1; // 1
    if (q[c] == '#') { // true
        while (q.length != n - pNum) {//2!=1
        q.shift(); // [#]
        }
        c = 0; // 0
    } else {
        c++;
    }
    front++
}
console.log(q.length);
if (q.length == 0) {
    console.log('No Starting Point');
} else {
  console.log(q[0]);
}
