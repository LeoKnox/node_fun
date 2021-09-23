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

for (let i = step[step-1]; i > 0; i--) {
  let temp = i-2;
  a[i-2] = a[i-1];
  a[i-1] = temp;
  console.log("a:"+a);
}
