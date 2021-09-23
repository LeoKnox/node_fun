let step = 5;
let a = [];

for (let i = 0; i < step; i++) {
  a[i] = 1;
}

console.log(a);

if ((a[step-2] === 1) && (a[step-1] === 1)) {
  a[step-2] = 2;
  a.pop();
}

console.log(a);
console.log(a[a.length-1]);

for (let j = a[a.length-1]; j > 0; j--) {
  let temp = a[j-1];
  a[j-2] = a[j-1];
  a[j-1] = temp;
  console.log("a:"+a);
}
console.log(a);
