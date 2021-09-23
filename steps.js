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
